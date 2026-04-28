import { useState } from "react";

const Component2 = () => {
  const [age, setAge] = useState("");
  const [showAge, setShowAge] = useState(false);

  function handleClick() {
    setShowAge(true);
  }

  return (
    <div>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={handleClick}>Apply</button>

      {showAge && <p>Your age: {age}</p>}
    </div>
  );
};

export default Component2;
