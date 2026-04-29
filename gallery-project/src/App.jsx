import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(data);
  };
  useEffect(() => {
    getData();
  }, [index]);
  let printUserData = (
    <h3 className="text-lg text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );

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
      <h1 className="text-2xl bg-amber-700 fixed">{index}</h1>
      <div className="flex flex-wrap gap-5 px-10 py-5">{printUserData}</div>

      <div className="flex justify-center items-center gap-5">
        <button
          className="bg-amber-400 text-black text-sm px-6 py-2 rounded-2xl active:scale-95 transition-all font-medium"
          onClick={() => {
            if (index > 1) {
              setIndex((prev) => prev - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <button
          className="bg-amber-400 text-black text-sm px-6 py-2 rounded-2xl active:scale-95 transition-all font-medium"
          onClick={() => {
            setIndex((prev) => prev + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
