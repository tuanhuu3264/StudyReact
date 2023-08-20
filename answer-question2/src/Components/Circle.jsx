import React from 'react'
import clsx from 'clsx'

function Circle({color}) {
  
  return (
    <div className={clsx("w-10 h-10  rounded-full border-solid border-2 border-black ", color==="green"?"bg-green-500":"bg-white-500")}> 
    </div>
  
  )
}

export default Circle
