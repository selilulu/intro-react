import React,{useState,useEffect} from 'react' ;
import TodoList from './Components/TodoList';
import Form from './Components/Form';
import './App.css';


//define a localstorage key with any name and set it to your app name(anything)
const KEY_STORAGE='todoApp'

function App() {
  // const someTodos=['Go for groceries','Check out that book','Prepare a dish for today']
  //state stuff
  const [todos,setTodos]=useState([]);
  const [inputText,setInputText]=useState("");
  const [dropDowns,setDropdowns]=useState("All");
  // const [filteredtodos,setFilteredTodos]=useState([]);

//functions
// const filterHandler=()=>{
//   switch(status){
//     case 'completed':
//   setFilteredTodos(todos.filter(todo=> todo.completed ===true));
//   break;
//     case 'uncompleted':
//   setFilteredTodos(todos.filter(todo=> todo.completed ===false));
//   break;
//   default:
//    setFilteredTodos(todos);
//   }
// }

  //to load our todos and retrive them with getItem.
  //the dependency is an empty array(we can call this function only once and by the help of the empty array it will be called only once).
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
  // console.log(localStorage)


  // todos={todos}: allows us to use the {todos} prop inside of TodoList component on the other page 
  return (
  <>
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
    <Form todos={todos} setTodos={setTodos} setInputText={setInputText} setDropdowns={setDropdowns} inputText={inputText}/>
    <TodoList  todos={todos} setTodos={setTodos} />
    </div>

  </> 
  ) ; 
    
   
}

export default App;
