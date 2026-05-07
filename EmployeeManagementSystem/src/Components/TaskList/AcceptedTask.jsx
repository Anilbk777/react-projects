import React from "react";

const AcceptedTask = ({ data }) => {
  console.log(data);
  return (
    <div className="shrink-0 bg-blue-400 h-full w-[300px] rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-6 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2 ">{data.taskDescription}</p>
      <div className="flex justify-between mt-6 ">
        <button className="bg-green-500 rounded font-medium py-1 px-2 text-xs">
          Mark as Completed
        </button>
        <button className="bg-red-500 rounded font-medium py-1 px-2 text-xs">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptedTask;
