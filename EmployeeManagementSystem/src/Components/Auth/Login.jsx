import React from "react";

function Login() {
  return (
    <div className=" h-screen w-full flex flex-col items-center justify-center gap-5 ">
      <h1 className="text-2xl font-bold">Log In</h1>
      <div>
        <div>
          <form className="flex flex-col gap-5 mb-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 border-amber-800 rounded-2xl px-4 py-2 w-[20vw]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2 border-amber-800 rounded-2xl px-4 py-2 w-[20vw]"
            />
          </form>
        </div>
        <div className="flex gap-12 mb-8">
          <div className="flex">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="ml-2">
              Remember me
            </label>
          </div>
          <div className="text-gray-400">Forget password</div>
        </div>
        <div className=" bg-rose-600 rounded-2xl px-4 py-2 w-[20vw] text-center text-xl font-medium">
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
