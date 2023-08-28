import React, { useState } from 'react';
import ToDo from './Components/ToDo';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [errorInput, setErrorInput] = useState(false);
  const [mode, setMode] = useState('All');
  const [newToDo, setNewToDo] = useState('');
  const [listToDisplay, setListToDisplay] = useState([]);

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (newToDo.trim().length > 0) {
      const newToDoItem = {
        id: uuidv4(),
        act: newToDo,
        completed: false
      };
      setListToDisplay([...listToDisplay, newToDoItem]);
      setNewToDo('');
      setErrorInput(false);
    } else {
      setErrorInput(true);
    }
  };

  const handleDeleteToDo = (deleteId) => {
    const updatedList = listToDisplay.filter((item) => item.id !== deleteId);
    setListToDisplay(updatedList);
  };

  const handleUpdateCompletionStatus = (itemId, newStatus) => {
    const updatedList = listToDisplay.map((item) =>
      item.id === itemId ? { ...item, completed: newStatus } : item
    );
    setListToDisplay(updatedList);
  };

  const handleDeleteAll = () => {
    setListToDisplay([]);
  };

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
  };

  const filteredList = mode === 'Active'
    ? listToDisplay.filter((item) => !item.completed)
    : mode === 'Completed'
      ? listToDisplay.filter((item) => item.completed)
      : listToDisplay;

  return (
    <>
      <div className="flex mb-4">
        {['All', 'Active', 'Completed'].map((btnMode) => (
          <button
            key={btnMode}
            onClick={() => handleModeChange(btnMode)}
            className={clsx(
              'w-48 h-10 flex text-center justify-center text-sm',
              mode === btnMode ? 'border-b-violet-700 border-b-2' : ''
            )}
          >
            {btnMode}
          </button>
        ))}
      </div>
      <form onSubmit={handleAddToDo} className="flex">
        <div>
        <input
          type="text"
          value={newToDo}
          onChange={(e) => {
            setNewToDo(e.target.value);
            setErrorInput(false); // Reset error on input change
          }}
          className={clsx("w-96 h-8 rounded-md border-2 mr-3",errorInput=== true ? "border-red-600": " border-black")}
        />
        {errorInput && <div className="text-red-600">Error Input</div>}
        </div>
        <input type="submit" value="Add" className="w-20 h-8 rounded-md bg-blue-800 text-white" />
        
      </form>
      <div className="App">
        {filteredList.map((item) => (
          <ToDo
            key={item.id}
            item={item}
            handleDeleteToDo={() => handleDeleteToDo(item.id)}
            handleUpdateCompletionStatus={() => handleUpdateCompletionStatus(item.id, !item.completed)}
          />
        ))}
      </div>
      <button onClick={handleDeleteAll} className="w-32 h-8 rounded-xl bg-red-700 text-white mt-3 ml-56">Delete All</button>
    </>
  );
}

export default App;
