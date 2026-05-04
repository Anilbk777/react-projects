import React from "react";
import AcceptedTask from "./AcceptedTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="flex gap-5 overflow-x-auto flex-nowrap  h-[55%]  mt-10 py-5">
      <NewTask/>
      <CompletedTask/>
      <AcceptedTask />
      <FailedTask/>
      
    </div>
  );
};

export default TaskList;
