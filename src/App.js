import React,{useState,useRef,useEffect} from 'react'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_KEY='todoApp.todos'

function App() {
  //useState returns an array 
  //todos is=all of our todos,setTodos is= function that allows us to update our todos
  
  
  // const initialTodos = ["My first todo", "My second todo"];
  // const [todos, setTodos] = useState(initialTodos);
  //this example above is a longer version of what i wrote below

  const[todos, setTodos]=useState([])
  const todoNameRef=useRef()

//LOAD OUR TODOS
useEffect(()=>{
  const storedTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
 if(storedTodos)setTodos(storedTodos)
},[])


//everytime when something changes like adding a new todo,this will run here and save in localstorage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify)
  },[todos])

  function handleAddTodo(e){
    e.preventDefault();
  // const name= todoNameRef.current.value
  // if(name === '')return
  // setTodos(prevTodos => {
  //   return [...prevTodos,{id:uuidv4(),name:name,complete:false }]
  // })
  // todoNameRef.current.value=null  

  } 
  return (
    <>
      <TodoList todos={todos}/>

      <input ref={todoNameRef} type="text" placeholder="Type a new todo"/>
      <button onClick={handleAddTodo} >Add Todo</button>

      <div> 0 todo left</div>
  

  </>
  ) 
    
   
}

export default App;
