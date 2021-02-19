import React,{useRef}from 'react';
import { v4 as uuidv4 } from 'uuid';


//get the todos and setTodos as props
export default function Form({todos,setTodos,setInputText}) {
    //get the inputs
    const inputRef=useRef()
    
    function handleButton(e){

        // put the value of the input into the name variable
        const name=inputRef.current.value

        //if there is an empty input we dont add it into the todolist,we just return
        if(name==="")return

        console.log(name)            
        

        // null is just to clearout the value of the input after we submit something
        inputRef.current.value=null

        //...todos gives us the elements inside the todolist
        setTodos([...todos, {name: name, complete: false, id:uuidv4() }])

    }
    function selectHandler(e){
        setInputText(e.target.value);
    }
    return (
        <div className="form">
            <div id="title">
            </div>
            <input ref={inputRef} type="text" placeholder="Type a new todo"/>
            <button type="submit" onClick={handleButton}>+</button>
        <div className="select">
            <select onChange={selectHandler} name="todos" className="filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </div>
    )
}
