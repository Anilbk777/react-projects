import React, { useState } from "react";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    assignTo: "",
    category: "",
  });

  const [tasks, setTasks] = useState([]); // renamed for clarity

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(), // good to have unique id
      taskTitle: formData.taskTitle,
      taskDescription: formData.taskDescription,
      taskDate: formData.taskDate,
      assignTo: formData.assignTo,
      category: formData.category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    setTasks((prev) => [...prev, newTask]);

    // Show updated task immediately
    console.log("New Task Added:", newTask);
    console.log("All Tasks:", [...tasks, newTask]);

    // Reset form
    setFormData({
      taskTitle: "",
      taskDescription: "",
      taskDate: "",
      assignTo: "",
      category: "",
    });
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-2xl p-8 rounded-xl bg-[#1c1c1c]">
        <h1 className="text-center text-3xl font-bold mb-8 text-white">
          Create New Task
        </h1>

        <form onSubmit={formSubmit} className="space-y-6">
          <div>
            <h3 className="text-lg mb-2 text-gray-300">Task Title</h3>
            <input
              required
              name="taskTitle"
              value={formData.taskTitle}
              onChange={changeHandler}
              type="text"
              placeholder="Make a UI design"
              className="bg-gray-700 w-full px-4 py-3 outline-none rounded-lg text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <h3 className="text-lg mb-2 text-gray-300">Description</h3>
            <textarea
              required
              name="taskDescription"
              value={formData.taskDescription}
              onChange={changeHandler}
              placeholder="Detailed description of task (Max 500 words)"
              className="bg-gray-700 w-full px-4 py-3 outline-none rounded-lg text-white placeholder:text-gray-400 resize-none h-28"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg mb-2 text-gray-300">Date</h3>
              <input
                required
                name="taskDate"
                value={formData.taskDate}
                onChange={changeHandler}
                type="date"
                className="bg-gray-700 w-full px-4 py-3 outline-none rounded-lg text-white"
              />
            </div>

            <div>
              <h3 className="text-lg mb-2 text-gray-300">Category</h3>
              <input
                required
                name="category"
                value={formData.category}
                onChange={changeHandler}
                type="text"
                placeholder="Design, Development, etc..."
                className="bg-gray-700 w-full px-4 py-3 outline-none rounded-lg text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-2 text-gray-300">Assign To</h3>
            <input
              required
              name="assignTo"
              value={formData.assignTo}
              onChange={changeHandler}
              type="text"
              placeholder="Employee name"
              className="bg-gray-700 w-full px-4 py-3 outline-none rounded-lg text-white placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-bold text-lg py-3.5 rounded-lg mt-4"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
