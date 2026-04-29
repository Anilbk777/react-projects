import React from 'react'
import axios from 'axios'

const Api = () => {
    const getData = async () => {
      //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      //   const data = await response.json()
      // console.log(data.title)
      
      const response = await axios(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(response.data)
    }
  return (
    <div>
      <button
        onClick={getData}
        className="border-2 rounded px-4 py-2 text-2xl bg-blue-500 transition-transform active:scale-95"
      >
        Get data
      </button>
    </div>
  );
}

export default Api
