import React from 'react'
import clsx from 'clsx'

function Circle1({color}) {
  
  return (
    <div className={clsx("w-10 h-10  rounded-full border-solid border-2 border-black ", color==="yellow"?"bg-yellow-500":"bg-white-500")}> 

    </div>
  
  )
}

export default Circle1
