import React,{}from 'react';
import { v4 as uuidv4 } from 'uuid';


//get the todos and setTodos as props
function Form({todos,setTodos,setInputText,inputText,text,setDropdowns}) {
    //get the inputs
    const inputTextHandler=(e)=>{
     setInputText(e.target.value);
 
    }
    const buttonHandler=(e)=>{
     e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:uuidv4()}]);
        //below its to reset the input inside the state after one is inputted
        setInputText("");   
    }
    // function selectHandler(e){
    //     setInputText(e.target.value);
    // }  

    const dropdownHandler =(e)=>{
        setDropdowns(e.target.value);

    }
    return (
        <>
        <form>
            <input  
            type="text" 
            onChange={inputTextHandler} 
            value={inputText} 
            placeholder="Type here a new todo..."/>

            <button className="inputButton" type="submit" onClick={buttonHandler}>
                  <i className="fas fa-plus"></i>
            </button>
        <div className="select">
            <select onChange={dropdownHandler} name="todos" className="filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>

        </>
    )
}


export default Form;