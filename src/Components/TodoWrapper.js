import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
// import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  return (
    <div className="">
    <div className="contenedor grid">
      <div className="TodoWrapper">
        <h1>Lista de productos!</h1>
        <div>
          <TodoForm addTodo={addTodo} />
        </div>
        {/* display todos */}
      </div>

      <div className="TodoWrapper">
        <Todo />
      </div>
      
    </div>
    </div>
  );
};
