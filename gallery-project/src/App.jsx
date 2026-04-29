import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30",
    );
    setUserData(data);
    console.log(data);
  };
  let printUserData = "No user data available";
  if (userData.length > 0) {
    printUserData = userData.map((elem, id) => (
      <div>
        <div className="h-45 w-44 bg-white rounded-1xl">
          <img
            key={id}
            className="h-full object-cover"
            src={elem.download_url}
          />
        </div>
        <h1 className="text-center">{elem.author}</h1>
      </div>
    ));
  }

  return (
    <div className="bg-black min-h-screen  p-4 text-white">
      <button
        onClick={getData}
        className="bg-green-500 px-6 py-2 mb-5 rounded active:scale-95 transition-all"
      >
        Get data
      </button>

      <div className="flex flex-wrap gap-5">{printUserData}</div>
    </div>
  );
};

export default App;
