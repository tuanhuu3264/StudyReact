import React, { useState } from 'react';
import ToDo from './Components/ToDo';
import clsx from 'clsx';

function App() {
  const [newId, setNewId] = useState(3);
  const [ListToDo, setListToDo] = useState([
    { id: 1, act: 'adadad', completed: false },
    { id: 2, act: 'bbbb', completed: true }
  ]);
  const [mode,setMode]=useState('All');
  const [newToDo, setNewToDo] = useState('');
  const [listToDisplay, setListToDisplay] = useState(ListToDo);

  const AddToDo = (e) => {
    e.preventDefault(); 
    setNewId(newId + 1);
    const updatedList = [...ListToDo, { id: newId, act: newToDo, completed: false }];
    setListToDo(updatedList);
    setNewToDo('');
    setListToDisplay(updatedList);
  };

  const deleteAToDo = (deleteId) => {
    const updatedList = ListToDo.filter((item) => item.id !== deleteId);
    setListToDo(updatedList);
    setListToDisplay(updatedList);
  };

  const updateCompletionStatus = (itemId, newStatus) => {
    const updatedList = ListToDo.map((item) =>
      item.id === itemId ? { ...item, completed: newStatus } : item
    );
    setMode('All');
    setListToDo(updatedList);
    setListToDisplay(updatedList);
  };

  const deleteAll = () => {
    setListToDo([]);
    setListToDisplay([]);
  };

  const AllDisplay = () => {
    setMode('All');
    setListToDisplay(ListToDo);
  };

  const ActiveDisplay = () => {
    setMode('Active');
    const activeList = ListToDo.filter((item) => !item.completed);
    setListToDisplay(activeList);
  };

  const CompletedDisplay = () => {
    setMode('Completed');
    const completedList = ListToDo.filter((item) => item.completed);
    setListToDisplay(completedList);
  };

  return (
    <>
      <div className="flex mb-4">
        <button
          onClick={AllDisplay}
          className={clsx(
            'w-48 h-10 flex text-center justify-center text-sm',
            mode === 'All' ? 'border-b-violet-700 border-b-2' : ''
          )}
        >
          All
        </button>
        <button
          onClick={ActiveDisplay}
          className={clsx(
            'w-48 h-10 flex text-center justify-center text-sm',
            mode === 'Active' ? 'border-b-violet-700 border-b-2' : ''
          )}
        >
          Active
        </button>
        <button
          onClick={CompletedDisplay}
          className={clsx(
            'w-48 h-10 flex text-center justify-center text-sm',
            mode === 'Completed' ? 'border-b-violet-700 border-b-2' : ''
          )}
        >
          Completed
        </button>
      </div>
      <form onSubmit={AddToDo}>
        <input
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          className="w-96 h-8 rounded-md border-2 border-black mr-3"
        />
        <input type="submit" value="Add" className="w-20 h-8 rounded-md bg-blue-800 text-white"/>
      </form>
      <div className="App">
        {listToDisplay.map((item) => (
          <ToDo 
            mode={mode}
            key={item.id}
            item={item}
            deleteAToDo={deleteAToDo}
            updateCompletionStatus={updateCompletionStatus}
          />
        ))}
      </div>
      <button onClick={deleteAll} className="w-32 h-8 rounded-xl bg-red-700 text-white mt-3 ml-56">Delete All</button>
    </>
  );
}

export default App;
