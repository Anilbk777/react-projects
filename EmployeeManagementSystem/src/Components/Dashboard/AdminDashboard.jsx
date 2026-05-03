import React from "react";
import Header from "../Other/Header";
const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full p-10">
      <Header />
      <div className=" flex justify-center flex-col ml-[34vw] mr-[26vw] p-4 rounded-md bg-gray-900">
        <h1 className="text-center text-3xl font-bold mb-4">Create Task</h1>
        <form className="flex flex-col items-center justify-center ">
          <div>
            <h3 className="text-lg font-small mb-1">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="bg-gray-600 w-[25vw] px-4 py-1 outline-none rounded-md mb-5 placeholder:font-light"
            />
          </div>
          <div>
            <h3 className="text-lg font-small mb-1">Description</h3>
            <textarea
              name=""
              id=""
              placeholder="Detail description of task (Max 500 words)"
              className="bg-gray-600 resize-none w-[25vw] px-4 py-1 outline-none  rounded-md mb-5 placeholder:font-light"
            ></textarea>
          </div>
          <div>
            <h3 className="text-lg font-small mb-1">Date</h3>
            <input
              type="date"
              className="bg-gray-600 w-[25vw] px-4 py-1 outline-none rounded-md mb-5 placeholder:font-light"
            />
          </div>
          <div>
            <h3 className="text-lg font-small mb-1">Assign To</h3>
            <input
              type="text"
              className="bg-gray-600 w-[25vw] px-4 py-1 outline-none rounded-md mb-5 placeholder:font-light"
            />
          </div>
          <div>
            <h3 className="text-lg font-small mb-1">Category</h3>
            <input
              type="text"
              placeholder="Design, Development, etc..."
              className="bg-gray-600 w-[25vw] px-4 py-1 outline-none rounded-md mb-5 placeholder:font-light"
            />
          </div>
          <button className="bg-black text-white font-bold text-lg  px-4 py-2 rounded-md w-[25vw] mb-5">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
