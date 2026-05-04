import React from 'react'

const AcceptedTask = () => {
  return (
    <div className="shrink-0 bg-blue-400 h-full w-[300px] rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-6 py-1 rounded text-sm">High</h3>
        <h4>May 2, 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a video on SQL</h2>
      <p className="text-sm mt-2 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
        voluptatibus, expedita blanditiis itaque ut maiores.
      </p>
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
}

export default AcceptedTask
