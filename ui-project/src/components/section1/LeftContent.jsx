import React from 'react'
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between ">
      <div>
        <h3 className="text-5xl font-bold mb-5 leading-[1.1]">
          Prospective <br />
          <span className='text-gray-600'>customer</span> <br />
          segmentation
        </h3>
        <p className="text-xl font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          voluptatum neque ullam eos atque assumenda necessitatibus commodi
          architecto. Eaque, deleniti!
        </p>
      </div>
      <div className="text-8xl">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
}

export default LeftContent
