import React, {useState} from 'react';
import './App.css';

//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [fileredTodos, setFilteredTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Zain's ToDo List!!!!</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
