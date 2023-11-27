import React from 'react'
//export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  import { useLayoutEffect, useState } from "react"
export  const Todo = () => {
      
      const [products, setProducts] = useState([]);
      async function getProducts(){
          const response = await fetch("/api/products-get");
          const productsApi = await response.json();
          setProducts(productsApi)
      }
      useLayoutEffect(()=>{
          getProducts()
      },[])
      return <section>
          <h3 className='label'>Productos</h3>
          {products.length === 0}
          <ul>
              {
                  products.map((product) => <li key={product.id}>
                      {product.name}: <br />
                      {product.description} <b>{product.quantity}</b> 
                  </li>)
              }
          </ul>
      </section>
  }

