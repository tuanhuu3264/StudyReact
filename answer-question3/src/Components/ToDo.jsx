import React from 'react';

function ToDo({ item, handleDeleteToDo, handleUpdateCompletionStatus}) {
  const { act, completed } = item;
  return (
    <div className='w-96 h-14 rounded-lg bg-gray-500 flex justify-between mt-2 align-center p-2'>
      <p>
        <input
          type='checkbox'
          checked={completed}
          className='mr-3'
          onChange={handleUpdateCompletionStatus}
        />
        {act}
      </p>
      <button onClick={handleDeleteToDo} className=" w-14 h-8 bg-blue-800 text-center text-white rounded-md">Delete</button>
    </div>
  );
}

export default ToDo;
