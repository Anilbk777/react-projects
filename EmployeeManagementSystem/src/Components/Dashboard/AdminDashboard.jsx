import React from "react";
import Header from "../Other/Header";
const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <div className="border-2 border-amber-500">
        <h1 className="text-center text-3xl font-bold mb-4">Create Task</h1>
        <form className="flex flex-col items-center justify-center ml-[37vw] mr-[35vw]">
          <div>
            <h3 className="text-lg font-small mb-1">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="bg-gray-600 w-[25vw] px-4 py-1 outline-none rounded-xl mb-5 placeholder:font-light"
            />
          </div>
          <div>
            <h3 className="text-lg font-small mb-1">Description</h3>
            <textarea
              name=""
              id=""
              placeholder="Detail description of task (Max 500 words)"
              className="bg-gray-600 w-[25vw] px-4 py-1 outline-none rounded-xl mb-5 placeholder:font-light"
            ></textarea>
          </div>
          <div>
            <h3 className="text-lg font-small mb-1">Date</h3>
            <input
              type="date"
              className="bg-gray-600 w-[25vw] px-4 py-1 outline-none rounded-xl mb-5 placeholder:font-light"
            />
          </div>
          <div>
            <h3 className="text-lg font-small mb-1">Assign To</h3>
            <input
              type="text"
              className="bg-gray-600 w-[25vw] px-4 py-1 outline-none rounded-xl mb-5 placeholder:font-light"
            />
          </div>
          <div>
            <h3 className="text-lg font-small mb-1">Category</h3>
            <input
              type="text"
              placeholder="Design, Development, etc..."
              className="bg-gray-600 w-[25vw] px-4 py-1 outline-none rounded-xl mb-5 placeholder:font-light"
            />
          </div>
          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
