import React, { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [line, setLine] = useState('Words: 0');

  useEffect(() => {
    const handleCountWords = () => {
      const trimmedInput = input.trim();
      const wordArray = trimmedInput.split(/\s+/).filter(Boolean);
      setLine('Words: ' + wordArray.length);
    };

    const time = setTimeout(() => {
      handleCountWords();
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, [input]);

  return (
    <div className="App">
      <textarea
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        placeholder="input"
      ></textarea>
      <br />
      {line}
    </div>
  );
}

export default App;
