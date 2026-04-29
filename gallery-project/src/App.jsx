import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=15",
    );
    setUserData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  let printUserData = <h3 className="text-xs text-gray-500">No User Data Available</h3>
  if (userData.length > 0) {
    printUserData = userData.map((elem, id) => (
      <div key={id}>
        <a href={elem.url} target="_blank">
          <div className="h-45 w-44 bg-white rounded-2xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={elem.download_url}
            />
          </div>
          <h1 className="text-center">{elem.author}</h1>
        </a>
      </div>
    ));
  }

  return (
    <div className="bg-black min-h-screen  p-4 text-white">

      <div className="flex flex-wrap gap-5">{printUserData}</div>
    </div>
  );
};

export default App;
