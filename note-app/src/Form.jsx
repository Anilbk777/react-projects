import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center'>
      <form className="flex flex-col gap-5 p-10 w-[30vw]">
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2  border-2 rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter Details"
          className="px-5 py-2 h-20 border-2 rounded-2xl"
              />
              
              <button className='bg-white text-black px-5 py-2 rounded-2xl font-semibold'>
                  Add Note
              </button>
      </form>
    </div>
  );
}

export default Form
