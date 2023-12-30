import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">profile</h1>
      <form className="flex flex-col gap-3">
        <img
          src={currentUser.avatar}
          alt="Profile Photo"
          className="self-center mb-5 rounded-full h-24 w-24 object-cover cursor-pointer"
        />
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
