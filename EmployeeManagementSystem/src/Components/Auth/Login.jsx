import React, { useState } from "react";

function Login({ handleLogIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn(email, password);

    console.log("submitted");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="border-2 flex flex-col items-center justify-center gap-5 p-7 rounded-2xl border-green-700">
        <h1 className="text-2xl font-bold">Log In</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-5">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border-2 outline-none border-emerald-600 rounded-full px-4 py-2 w-[20vw] text-xl"
          />

          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border-2 outline-none border-emerald-600 rounded-full px-4 py-2 w-[20vw] text-xl"
          />

          <button
            type="submit"
            className="bg-emerald-600 rounded-full px-4 py-2 w-[20vw] text-xl font-medium hover:bg-emerald-700 active:scale-95"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
