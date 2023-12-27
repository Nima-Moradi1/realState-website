import Link from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-8">Sign Up </h1>
      <form className="flex flex-col gap-5 ">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-xl"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-xl"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-xl"
          id="password"
        />
        <button className="bg-slate-700 text-white p-4 rounded-xl uppercase hover:opacity-90 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-3 mt-5 ">
        <p>Have an Account ? </p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
