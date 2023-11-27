import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

  return (
    <form onSubmit={async(e)=>{
      e.preventDefault()
      const response = await fetch("/api/products-post", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              name,
              description,
              quantity
          })
      }).catch((error) => console.error("Error:", error))
      const status = await response.json()
      if(status.created){
          newNotification(status.message)
          navigate("/")
      }

      console.log("response", response);
  }}>
    <input type="text" setValue={setName} value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Product</button>
  </form>
  )
}
