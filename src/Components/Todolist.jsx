import React from 'react'

const Todolist = ({completed,id,title,toggleTodo,deletTodo}) => {
  return (
       <li>
       <label >
         <input type="checkbox" 
         checked={completed} 
         onChange={e=>toggleTodo(id,e.target.checked)}
         />
         {title}
       </label>
       <button
        onClick={()=>deletTodo(id)} 
        className="btn btn-danger">
         Delete
       </button>
     </li>
  )
}

export default Todolist
