import React from 'react'
import clsx from 'clsx'

function Circle2({color}) {
  
  return (
    <div className={clsx("w-10 h-10  rounded-full border-solid border-2 border-black ", color==="red"?"bg-red-500":"bg-white-500")}> 

    </div>
  
  )
}

export default Circle2
