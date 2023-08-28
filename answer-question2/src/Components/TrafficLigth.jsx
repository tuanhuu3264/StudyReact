import React, { useState } from 'react';
import clsx from 'clsx';

function TrafficLigth() {
  const lights = ['bg-green-500', 'bg-yellow-500', 'bg-red-500'];
  const [currentLight, setCurrentLight] = useState(0);

  const clickNext = () => {
    setCurrentLight((currentLight + 1) % lights.length);
  };

  return (
    <>
      <button onClick={clickNext} className="w-20 h-8 border-2 rounded-lg  border-black  ">Next</button>
      <div className="flex p-1">
        {lights.map((light, index) => (
          <div
            className={clsx(
              'w-10 h-10 rounded-full border-solid border-2 border-black mt-2 mr-2',
              index === currentLight ? light : 'bg-white-500'
            )}
          ></div>
        ))}
      </div>
    </>
  );
}

export default TrafficLigth;
