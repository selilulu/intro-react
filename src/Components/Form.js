import React,{useRef}from 'react';
import { v4 as uuidv4 } from 'uuid';


//get the todos and setTodos as props
export default function Form({todos,setTodos}) {
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
    return (
        <div>
            <h1>TODO LIST</h1>
            <input ref={inputRef} type="text" placeholder="Type a new todo"/>
            <button type="submit" onClick={handleButton}>Add Todo</button>
        </div>
    )
}
