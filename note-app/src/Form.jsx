import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [formData, setFormData] = useState({
    heading: "",
    detail: "",
  });

  const [task, setTask] = useState([]);

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function submitHandler(dets) {
    dets.preventDefault();

    const newTask = {
      heading: formData.heading,
      detail: formData.detail,
    };

    setTask((prev) => [...prev, newTask]);

    setFormData({ heading: "", detail: "" });
  }
  return (
    <div className="flex justify-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 p-10 w-[30vw]"
      >
        <input
          required
          name="heading"
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2  border-2 rounded-2xl font-medium"
          value={formData.heading}
          onChange={changeHandler}
        />
        <textarea
          required
          name="detail"
          type="text"
          placeholder="Enter Details"
          className="px-5 py-2 h-20 border-2 rounded-2xl font-medium"
          value={formData.detail}
          onChange={changeHandler}
        />

        <button className="bg-white text-black px-5 py-2 rounded-2xl font-medium">
          Add Note
        </button>
      </form>
      {task.map((elem, index) => (
        <Card key={index} elem={elem} />
      ))}
    </div>
  );
};

export default Form;
