import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className="flex mt-10 gap-5">
      <div className="bg-red-400 w-[45%] px-9 py-6 rounded-2xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-blue-400 w-[45%] px-9 py-6 rounded-2xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-green-400 w-[45%] px-9 py-6 rounded-2xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-yellow-400 w-[45%] px-9 py-6 rounded-2xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers
