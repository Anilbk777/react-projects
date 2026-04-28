import React from 'react'

const Card = () => {
  return (
    <div className="border-l-2">
      <h1 className="text-4xl font-bold m-10">Your Recent Notes</h1>
      <div className="flex flex-wrap gap-5 ml-10">
        <div className="bg-white h-60 w-50 rounded overflow-y-auto">
          <div className="text-1xl text-black p-4 border-b-2 ">
          </div>
          <p className="text-black p-4">
          </p>
        </div>
        <div className="bg-white h-60 w-50 rounded"></div>
        <div className="bg-white h-60 w-50 rounded"></div>
      </div>
    </div>
  );
}

export default Card
