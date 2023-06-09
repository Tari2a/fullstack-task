import logo from './logo.svg';
import React, { useState,useCallback } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = useCallback(() => {
    if (inputValue) {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue('');
    }
  }, [inputValue]);

  const handleDeleteTodo = useCallback(
    (index) => {
      setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    },
    []
  );
  //left the react logo here on purpose to leave my own mark
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;