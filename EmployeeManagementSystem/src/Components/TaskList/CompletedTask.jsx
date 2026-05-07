import React from "react";

const CompletedTask = ({ data }) => {
  return (
    <div className="shrink-0 bg-red-400 h-full w-[300px] rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-6 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2 ">{data.taskDescription}</p>
      <div className="mt-6">
        <button className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompletedTask;
