import React from "react";
import { useState } from "react";



const AddForm= ({todos,setTodos})=> {
  const [text,setText]=useState("")
  const handleSubmit= (event)=> {event.preventDefault()
    const newTodo={
      id:String(new Date().getTime()  ),
      text:text,
      isDone:false,
      date: new Date()}
      
       setTodos=([...todos,newTodo] )
       
       
      }

return(    <form onSubmit={handleSubmit} type="submit"    >
    <div >

    <input  value={text} 
     onChange={(e)=>setText(e.target.value)}/> 
    <button>Ekle</button>
    </div>




  </form>



)}


export default AddForm ;