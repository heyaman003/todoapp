import React from 'react'
import { useState } from 'react'
const Form = ({addTodo}) => {
       const [newItem, setItem] = useState('')
       function handleSubmit(e){
              e.preventDefault()
              if(newItem==='')return
             addTodo(newItem)
              setItem('')
            }
  return (
       <form onSubmit={handleSubmit} className="new-item-form">
       <div className="form-row">
         <label className="lable1" htmlFor="item">
           Add Your New Todos here</label>
           <input value={newItem} onChange={e=>setItem(e.target.value)} type="text" id='item' />  
       </div>
       <button className="btn">add</button>
      </form>
  )
}

export default Form
