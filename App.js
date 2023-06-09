import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault() //this will let the output stay and not refresh on submit
    if (isNaN(number) || number < 0) {
      setOutput('Error: Please enter a valid positive number');
    } else {
      setOutput(text.repeat(number));
    }
  };
  //left the react logo here on purpose to leave my own mark
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
        <br />
        <label>
          Number of repetitions:
          <input
            type="text"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>{output}</p>
      </header>
    </div>
  );
}

export default App;
