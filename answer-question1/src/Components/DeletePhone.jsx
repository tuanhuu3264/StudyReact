import React from 'react'

function DeletePhone({children, onClick}) {
  return (
    <button className="w-20 h-8 bg-blue-900 text-white text-xl rounded-lg ml-2 mt-2"onClick={onClick}> {children} </button>
  )
}

export default DeletePhone
