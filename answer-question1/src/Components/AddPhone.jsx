import React from 'react'

function AddPhone({newPhone, onSubmit,setNewPhone}) {
  return (
    <div className="flex ">
    <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-48 h-8 border-2 border-gray-600 rounded-xl ml-2 mr-2"
          value={newPhone.name}
          onChange={(e) => setNewPhone({ ...newPhone, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone number"
          className="w-48 h-8 border-2 border-gray-600 rounded-xl ml-2 mr-2"
          value={newPhone.phone}
          onChange={(e) => setNewPhone({ ...newPhone, phone: e.target.value })}
        />
        <input type="submit" value="Add" className="w-28 h-8 bg-blue-900 text-white text-xl rounded-lg"/>
      </form>
      </div>
  )
}

export default AddPhone
