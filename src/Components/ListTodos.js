import React from "react";
import SingleTodos from "./SingleTodos";
 const ListTodos=({todos})=> { 



return(<div>{todos.length===0 ? (<p>Listelenecek bir todo yok</p>)
:
      (<>{
        todos.map(todo=>( <SingleTodos todo={todo} /> ) 
        
        
         )
          }
     </>)
         }</div>
        



 ) }

 
 export default ListTodos;