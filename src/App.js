import React, {useState} from 'react';
import './App.css';

//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

//https://www.youtube.com/watch?v=pCA4qpQDZD8
function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Zain's ToDo List!!!!</h1>
      </header>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
