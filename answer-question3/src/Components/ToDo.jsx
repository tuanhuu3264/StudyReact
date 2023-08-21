import React from 'react';

function ToDo({ item, deleteAToDo, updateCompletionStatus,mode }) {
  const { id, act, completed } = item;

  const handleClick = () => {
    deleteAToDo(id);
  };

  const handleCheckboxChange = () => {
    updateCompletionStatus(id, !completed);
  };

  return (
    <div className='w-96 h-14 rounded-lg bg-gray-500 flex justify-between mt-2 align-middle'>
      <p>
        <input
          type='checkbox'
          checked={completed}
          className='mr-3'
          onChange={handleCheckboxChange}
        />{' '}
        {act}
      </p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default ToDo;
