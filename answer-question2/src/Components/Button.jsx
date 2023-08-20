import React from 'react'

function Button({children,onClick}) {
  return (
    <button onClick={onClick} className="bg-gray-50 border-solid border-black border-2 w-12 flex text-center text-justify rounded">{children}</button>
  )
}

export default Button
