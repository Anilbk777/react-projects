import React from "react";
import Header from "../Other/Header";
const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <div className="border-2 border-amber-500">
        <h1 className="text-center">Create Task</h1>
        <form className="flex flex-col items-center justify-center">
          <div>
            <h3>Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="bg-gray-600"
            />
          </div>
          <div>
            <h3>Description</h3>
            <textarea
              name=""
              id=""
              placeholder="Detail description of task (Max 500 words)"
              className="bg-gray-600"
            ></textarea>
          </div>
          <div>
            <h3>Date</h3>
            <input type="date" className="bg-gray-600" />
          </div>
          <div>
            <h3>Assign To</h3>
            <input type="text" className="bg-gray-600" />
          </div>
          <div>
            <h3>Category</h3>
            <input
              type="text"
              placeholder="Design, Development, etc..."
              className="bg-gray-600"
            />
          </div>
          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
