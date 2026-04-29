import React from "react";
import axios from "axios";
const App = () => {
  const getData = async () => {
    const { data } = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100",
    );
    console.log(data);
  };
  return (
    <div className="bg-black h-screen p-4 text-white">
      <button
        onClick={getData}
        className="bg-green-500 px-6 py-2 rounded active:scale-95 transition-all"
      >
        Get data
      </button>
    </div>
  );
};

export default App;
