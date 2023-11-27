import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { useLayoutEffect } from "react"

export const TodoWrapper = () => {
  const [products, setProducts] = useState([]);
      const [dialog, setDialog] = useState(false)
      const [productDelete, setProductDelete] = useState({})
      async function getProducts(){
          const response = await fetch("/api/products-get");
          const productsApi = await response.json();
          setProducts(productsApi)
      }
      useLayoutEffect(()=>{
          getProducts()
      },[])
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      hola
      <h3>Products</h3>
          {products.length === 0 && <span>Agrega Productos</span>}
          <ul>
              {
                  products.map((product) => <li key={product.id}>
                      {product.name}: <br />
                      {product.description} <b>{product.quantity}</b> 
                      {/* <button onClick={()=>{navigate("/edit", {state: product})}}>Editar</button> */}
                      <button onClick={()=>{
                          setDialog(true)
                          setProductDelete(product)
                      }}>Eliminar</button>
                  </li>)
              }
          </ul>
    </div>
  );
};
