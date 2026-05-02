import React, { useRef } from "react";

function Login() {
  const formRef = useRef(null);
  const buttonClick = () => {
    formRef.current.requestSubmit();
  };
  return (
    <div className=" h-screen w-full flex flex-col items-center justify-center gap-5 ">
      <h1 className="text-2xl font-bold">Log In</h1>
      <div>
        <div>
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-5 mb-5"
          >
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 outline-none border-emerald-600 rounded-full px-4 py-2 w-[20vw] text-xl placeholder:text-gray-400"
            />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              className="border-2 outline-none border-emerald-600 rounded-full px-4 py-2 w-[20vw] text-xl placeholder:text-gray-400"
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
        <div className=" bg-emerald-600 rounded-full px-4 py-2 w-[20vw] text-center text-xl font-medium hover:bg-emerald-700 active:scale-95">
          <button onClick={buttonClick}>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
