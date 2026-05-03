import React, { useState } from "react";

function Login({ handleLogIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn(email, password);


    setEmail("");
    setPassword("");
  };
  return (
    <div className=" h-screen w-full flex items-center justify-center  ">
      <div className="border-2 flex flex-col items-center justify-center gap-5 p-7 rounded-2xl border-green-700">
        <h1 className="text-2xl font-bold">Log In</h1>
        <div>
          <div>
            <form
              id="loginForm"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 mb-5"
            >
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="email"
                placeholder="Email"
                className="border-2 outline-none border-emerald-600 rounded-full px-4 py-2 w-[20vw] text-xl placeholder:text-gray-400"
              />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
            <button type="submit" form="loginForm">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
