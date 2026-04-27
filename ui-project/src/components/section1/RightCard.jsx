import React from "react";

const RightCard = ({idx, color, img,tag}) => {
  return (
    <div className=" relative shrink-0 h-full w-70  rounded-4xl  overflow-hidden">
          <img
              className="h-full w-full object-cover"
              src={img }
        alt=""
      />
      <div className="absolute top-0 p-8 flex flex-col justify-between h-full w-full ">
        <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold">
          {idx}
        </h2>
        <div>
          <p className="text-lg leading-normal text-white mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            soluta dolor ullam? Earum, illum sed.
          </p>
          <div className="flex justify-between">
                      <button style={{ backgroundColor:color}} className=" text-white font-medium py-2 px-6 rounded-full">
              {tag}
            </button>
            <button style={{ backgroundColor:color}} className=" text-white font-medium py-2 px-3 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
