import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
//export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  import { useLayoutEffect, useState } from "react"
  import { useNavigate } from "react-router-dom";
export  const Todo = ({newNotification, task, deleteTodo, editTodo, toggleComplete}) => {
      const navigate = useNavigate()
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
      return <section>
          <h3>Products</h3>
          {products.length === 0 && <span>Agrega Productos</span>}
          <ul>
              {
                  products.map((product) => <li key={product.id}>
                      {product.name}: <br />
                      {product.description} <b>{product.quantity}</b> 
                      <button onClick={()=>{navigate("/edit", {state: product})}}>Editar</button>
                      <button onClick={()=>{
                          setDialog(true)
                          setProductDelete(product)
                      }}>Eliminar</button>
                  </li>)
              }
          </ul>
          <dialog open={dialog}>
              <h3>¿Deseas eliminar el producto?</h3>
              <div>
                  <span>{productDelete.name}</span> 
                  <small>{productDelete.quantity}</small>
              </div>
              <button onClick={()=>{setDialog(false); setProductDelete({})}}>cancelar</button>
              <button onClick={async()=>{
                  const response = await fetch("/api/products-delete", {
                      method: "DELETE",
                      headers: {
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                          id: productDelete.id
                      })
                  }).catch((error) => console.error("Error:", error))
                  const status = await response.json()
                  if(status.deleted){
                      setProducts([])
                      getProducts()
                      newNotification(status.message)
                      setDialog(false)
                  }
              }}>Eliminar</button>
          </dialog>
      </section>
  }
