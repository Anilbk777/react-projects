import React, { useState } from 'react'

const Comp3 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
          <h1 onClick={()=>setShow(true)}>Hello how are you ?</h1>
          {show && <p>Hello world</p>}
    </div>
  )
}

export default Comp3
