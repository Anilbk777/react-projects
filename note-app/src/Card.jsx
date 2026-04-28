import React from 'react'

const Card = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold m-10">Your Recent Notes</h1>
      <div className="flex flex-wrap gap-5 ml-10">
        <div className="bg-white h-52 w-40 rounded"></div>
        <div className="bg-white h-52 w-40 rounded"></div>
        <div className="bg-white h-52 w-40 rounded"></div>
      </div>
    </div>
  );
}

export default Card
