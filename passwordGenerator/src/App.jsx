import { useState } from "react";

import "./App.css";

function App() {
  const [length, setLengtj] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charALlowed, setCharAllowed] = useState(false)
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="flex justify-center m-4">
        <div className="container bg-sky-500/50 rounded-lg w-120  flex flex-col items-center ">
          <div className=" inline-block m-5 ">
            <input
              className=" bg-white text-black p-2 border-none outline-none focus:ring-0 rounded-l-lg w-90"
              type="text"
              placeholder="abcde"
            />
            <button className="bg-blue-600 p-2 rounded-r-lg">copy</button>
          </div>
          <div className="flex gap-2 text-red-600">
            <input
              type="range"
              className="border-none outline-none focus:outline-none focus:ring-0"
            />
            length(0)
            <input type="checkbox" />
            Numbers
            <input type="checkbox" /> Characters
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
