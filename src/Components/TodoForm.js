import React, {useState} from 'react'
import Input from "./Input";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form  className="TodoForm"
    onSubmit={async(e)=>{
      e.preventDefault()
      const response = await fetch("/api/products-post", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              name,
          })
      }).catch((error) => console.error("Error:", error))
      const status = await response.json()
      
  }}
    
    >
     <Input id="name" label="Nombre" className="todo-input"
      setValue={setName} value={name} required={true} type="text" placeholder="Escribe el nombre"/>
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
