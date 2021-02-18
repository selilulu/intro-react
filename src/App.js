import React,{useState,useEffect} from 'react' 
import TodoList from './Components/TodoList'
import Form from './Components/Form'


//define a localstorage key with any name
const KEY_STORAGE='todoApp'

function App() {
  // const someTodos=['Go for groceries','Check out that book','Prepare a dish for today']
  const [todos,setTodos]=useState([])


  //to load our todos.the dependency is an empty array.we call this function only once and with the empty array it will be called only once.
  useEffect(() => {
    //json.parse() converts the string to an array
    const storedTodos=JSON.parse(localStorage.getItem(KEY_STORAGE))
    if (storedTodos) setTodos(storedTodos)
    
  }, []) 

  //anytime when todos array changes then this function will run 
  //we can save all the changes into the localstorage.setItem(with the key in here)
  useEffect(() => {
    localStorage.setItem(KEY_STORAGE,JSON.stringify(todos))
    
  }, [todos])


  // todos={todos}: allows us to use the {todos} prop inside of TodoList component on the other page 
  return (
  <>
    
    <TodoList  todos={todos}  />
    <Form todos={todos} setTodos={setTodos}/>
  </>
  ) 
    
   
}

export default App;
