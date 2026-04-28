import React from 'react'

const Component1 = () => {

     const typedValue = (val) => {
       console.log(val);
     };
  return (
      <div >
        <div>
          <input
            onChange={(events) => {
              typedValue(events.target.value);
            }}
            className="border border-black-800 rounded-md px-4 py-2 focus:outline-none focus:border-white-800 m-5"
            type="text"
            placeholder="Enter Your Name"
          />
        </div>
      </div>
  );
}

export default Component1
