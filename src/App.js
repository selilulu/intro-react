import React,{useState} from 'react'

import TodoList from './TodoList';
import Todo from './Todo';



function App() {
  //useState returns an array 
  //todo is=all of our todos setTodos is= function that allows us to update our todos
  const[todos, setTodos]=useState(['HO','HA','HE'])
  return (
    <>
      <TodoList todoPromps={todos}/>
      <input type="text" placeholder="Type a new todo"/>
      <button type="submit">Add Todo</button>

      <h4>Todos</h4>
      <ul>
      <li><input type="checkbox"/>  first todo</li>
      <li><input type="checkbox"/>  second todo</li>
      </ul>
      <div> 0 todo left</div>
  

  </>
  ) 
    
  
}

export default App;
