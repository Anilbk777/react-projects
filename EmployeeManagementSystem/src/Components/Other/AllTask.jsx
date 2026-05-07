import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log("hey", authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded-md h-60 ">
      <div className="bg-blue-500 mb-3  py-2 px-4 flex justify-between rounded-md">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed Task</h5>
        <h5 className="w-1/5">Failed Task</h5>
      </div>
      <div id="alltask" className="h-[80%] overflow-auto">
        {authData.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-red-400 mb-3  py-2 px-4 flex justify-between rounded-md"
            >
              <h2 className="w-1/5">{elem.firstName}</h2>
              <h3 className="w-1/5">Task</h3>
              <h5 className="w-1/5">Status</h5>
              <h5 className="w-1/5">Status</h5>
              <h5 className="w-1/5">Status</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
