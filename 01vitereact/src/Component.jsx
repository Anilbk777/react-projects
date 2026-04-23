import { useState } from "react";

function Component1() {
    let [counter, setCounter] = useState(0)

    let AddCount = () => {
        if (counter <= 19) {
            setCounter((counter) => counter + 1)
        }

    }

    let SubCount = () => {
        if (counter >=1) setCounter((counter) => counter - 1);
        
    }

    return (
      <>
        <h2 className="counter">Counter</h2>
        <span style={{ color: "blue", fontSize: "42px", marginTop: "10px" }}>
          value: {counter}
        </span>

        <button onClick={AddCount}>Increase count</button>
        <button onClick={SubCount}>Decrease count</button>
      </>
    );
}

export default Component1;
