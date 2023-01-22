import AddForm from "./Components/AddForm";
import ListTodos from "./Components/ListTodos";
import React from "react";
import { useState } from "react";




function App() {
  const [todos,setTodos]=useState ([]);
  return (
    <div><h1>hello</h1>
      
 <AddForm todos= {todos} setTodos= {setTodos}    />
 <ListTodos todos={todos} setTodos={setTodos}  />


    </div>
  );
}

export default App;
