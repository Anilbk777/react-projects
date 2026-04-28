import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  function submitHandler(dets) {
    dets.preventDefault();

    const newTask = {
      title,
      details,
    };
    setTask((prev) => [...prev, newTask]);
    console.log(task);
    setTitle("");
    setDetails("");
  }
  return (
    <div className="flex justify-center">
      <form
        onSubmit={(event) => {
          submitHandler(event);
        }}
        className="flex flex-col gap-5 p-10 w-[30vw]"
      >
              <input
                  required
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2  border-2 rounded-2xl font-medium"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
              <textarea
                  required
          type="text"
          placeholder="Enter Details"
          className="px-5 py-2 h-20 border-2 rounded-2xl font-medium"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white text-black px-5 py-2 rounded-2xl font-medium">
          Add Note
        </button>
      </form>
      {task &&
        task.map((elem, index) => {
          return <Card key={index} elem={elem} />;
        })}
    </div>
  );
};

export default Form;
