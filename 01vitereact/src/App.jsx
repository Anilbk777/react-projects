import { useState } from "react";
import Component1 from "./Component1"
import Component2 from "./Component2";

function App() {

  let [color, setColor] = useState("black")

 
  return (
    // <div
    //   className="w-full h-screen duration-200"
    //   style={{ backgroundColor: color }}
    // >
    //   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    //     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    //       <button
    //         onClick={() => setColor("red")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "red" }}
    //       >
    //         Red
    //       </button>
    //       <button
    //         onClick={() => setColor("green")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "green" }}
    //       >
    //         Green
    //       </button>
    //       <button
    //         onClick={() => setColor("blue")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "blue" }}
    //       >
    //         blue
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="h-screen w-screen bg-black text-white">
      <Component2/>
    </div>
  );
}

export default App
