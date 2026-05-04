import React from "react";
import AcceptedTask from "./AcceptedTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex gap-5 overflow-x-auto flex-nowrap  h-[55%]  mt-10 py-5"
    >
      {/* <NewTask />
      <CompletedTask />
      <AcceptedTask />
      <FailedTask /> */}
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) return <NewTask key={idx} />;
        if (elem.active) return <AcceptedTask key={idx} />;
        if (elem.completed) return <CompletedTask key={idx} />;
        if (elem.failed) return <FailedTask key={idx} />;
      })}
    </div>
  );
};

export default TaskList;
