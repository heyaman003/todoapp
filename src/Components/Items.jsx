import React from 'react'
import Todolist from './Todolist'

const Items = ({todos,toggleTodo,deletTodo}) => {
  return (
       <ul className="list">
       {todos.length===0&&'no Todos'}
       {todos.map(todo=>{
         return <Todolist {...todo} key={todo.id} toggleTodo={toggleTodo} deletTodo={deletTodo}/>
       })}
       
     </ul>
  )
}

export default Items
