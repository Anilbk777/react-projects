import { useCallback, useState } from "react";

// import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charALlowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charALlowed) str += "!@#$%^&*~`+-="

    for (let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * str.length + 1) ;
      pass += str[randomIndex]
    }
    setPassword(pass)
  },[length,numberAllowed, charALlowed,setPassword])

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="flex justify-center m-4">
        <div className="container bg-sky-500/50 rounded-lg w-120  flex flex-col items-center ">
          <div className=" inline-block m-5 ">
            <input
              className=" bg-white text-black p-2 border-none outline-none focus:ring-0 rounded-l-lg w-90"
              type="text"
              placeholder="password"
              value={password}
              readOnly
            />
            <button className="bg-blue-600 p-2 rounded-r-lg">copy</button>
          </div>
          <div className="flex gap-2 text-red-600 ">
            <input
              type="range"
              className="border-none outline-none focus:outline-none focus:ring-0"
              min={1}
              max={100}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length({length})</label>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            Numbers
            <input type="checkbox"
              defaultChecked={charALlowed}
              id="cahracterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            /> Characters
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
