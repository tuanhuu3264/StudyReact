import React from 'react'

function SearchPhone({onSubmit, setSearch}) {
  return (<div className="mt-2">
    <form onSubmit={onSubmit}>
        <input type="text" placeholder='Finding text' className="w-80 h-8 border-2 border-gray-600 rounded-xl ml-2 mr-2" onChange={(e) => {setSearch(e.target.value)}}/>
        <input type="submit" value="Finding" className="w-20 h-8 bg-blue-900 text-white text-xl rounded-lg pr-2"/> 

    </form>
    </div>
  )
}

export default SearchPhone
