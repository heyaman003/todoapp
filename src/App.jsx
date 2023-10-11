import { useState,useEffect } from 'react'
import React from 'react'
import './style.css'
import Form from './Components/Form'
import Items from './Components/Items'

function App() {
  
  const[todos,settodos] =useState(()=>{
    const localValue=localStorage.getItem("ITEMS")
    if(localValue==null) return[]
   return JSON.parse(localValue)
  })
  useEffect(()=>{
  localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])
  function addTodo(title){
    settodos((currentTodos)=>{
      return [...currentTodos,{id:crypto.randomUUID(),
        title,completed:false}]
    })
  }
  function toggleTodo(id,completed){
    settodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return{...todo,completed}
        }
        return todo
      })
    })
  }
  function deletTodo(id){
    settodos(currentTodos=>{
      return currentTodos.filter(todo=> todo.id!==id)
    })
  }
  return (
    <>
     <Form addTodo={addTodo}/>
      <h1 className='header'>to do list</h1>
      <Items todos={todos} toggleTodo={toggleTodo} deletTodo={deletTodo}/>
    </>
  )
}

export default App
