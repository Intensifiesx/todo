import React from "react";

//Import components
import Todo from "./Todo.js";

function TodoList({todos, setTodos}) {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo 
          text={todo.text} 
          todos={todos}
          todo={todo}
          key={todo.id} 
          setTodos={setTodos}/>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
