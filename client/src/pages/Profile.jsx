/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileError, setFileError] = useState(false);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (file) {
      handleFileUpload();
    }
  }, [file]);
  const handleFileUpload = (file) => {
    // we create a storage and based on the "app" we passed ,
    // the firebase is gonna recognize who we are
    const storage = getStorage(app);
    // we pass a date along the file , because the user may
    // choose two pictures again and at once, and since they're
    // the same , we get an error . so that's how we handle it
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    // this one is a method from firebase to see the percentage of the upload
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePercentage(Math.round(progress));
    });
    (error) => {
      setFileError(true);
    };
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURl) => {
        setFormData({ ...formData, avatar: downloadURl });
      });
    };
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">profile</h1>
      <form className="flex flex-col gap-3">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          // since we should we the first thing user selects ,
          //we set the first targeted file to setFile to be able to see what the user chose
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="Profile Photo"
          className="self-center mb-5 rounded-full h-24 w-24 object-cover cursor-pointer"
        />
        <p className="text-sm self-center ">
          {fileError ? (
            <span className="text-red-700">error image upload</span>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePercentage}%`}</span>
          ) : filePercentage === 100 ? (
            <span className="text-green-600">Image Uploaded Successfully !</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="Username"
          className="border p-4 rounded-xl"
          id="username"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border p-4 rounded-xl"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-4 rounded-xl"
          id="password"
        />
        <button className="bg-slate-700 text-white rounded-xl p-3 uppercase hover:opacity-90 disabled:opacity-75">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
