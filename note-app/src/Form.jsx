import React from "react";
import Card from "./Card";
const Form = () => {

    function submitHandler(dets) {
        dets.preventDefault()
        console.log("form submission prevented!")
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
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2  border-2 rounded-2xl font-medium"
        />
        <textarea
          type="text"
          placeholder="Enter Details"
          className="px-5 py-2 h-20 border-2 rounded-2xl font-medium"
        />

        <button className="bg-white text-black px-5 py-2 rounded-2xl font-medium">
          Add Note
        </button>
      </form>
      <Card />
    </div>
  );
};

export default Form;
