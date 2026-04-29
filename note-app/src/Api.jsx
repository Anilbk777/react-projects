import React, { useState } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   const data = await response.json()
    // console.log(data.title)

    //   const {data}= await axios(
    //     "https://jsonplaceholder.typicode.com/todos/1"
    //   );
    //   console.log(data)
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  return (
    <div>
      <button
        onClick={getData}
        className="border-2 rounded px-4 py-2 text-2xl bg-blue-500 transition-transform active:scale-95"
      >
        Get data
      </button>
      {data.map((elem, idx) => (
        <div key={idx} className="h-50 w-50">
          <img src={elem.download_url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Api;
