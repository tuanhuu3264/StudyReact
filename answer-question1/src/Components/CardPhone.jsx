import React from 'react'

function CardPhone({phoneBooks,phoneFormat}) {
  const {name,phone}=phoneBooks;
  return (
    <div className="w-96 h-20 bg-gray-400 flex justify-between font-bold rounded-2xl mt-2">
     <p className="m-5">{name}</p>
     <p className="m-5">{phoneFormat(phone)}</p>
    </div>
  )
}

export default CardPhone
