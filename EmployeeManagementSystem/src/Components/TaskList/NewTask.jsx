import React from "react";

const NewTask = ({ data }) => {
  return data.map((elem, idx) => (
    <div
      key={idx}
      className="shrink-0 bg-green-400 h-full w-[300px] rounded-xl p-5"
    >
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-6 py-1 rounded text-sm">{elem.category}</h3>
        <h4>{elem.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{elem.taskTitle}</h2>
      <p className="text-sm mt-2 ">{elem.taskDescription}</p>
      <div className="mt-6">
        <button className="bg-blue-500 rounded font-medium py-1 px-2 text-xs">
          Accept Task
        </button>
      </div>
    </div>
  ));
};

export default NewTask;
