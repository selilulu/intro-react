//rcf shortcut for the  component skaleton
import React from 'react';

function Todo({todo,todos,setTodos,text}) {

    const deleteHandler =() => {
        //const deleteHandler =()=>{} can be called like this instead of function deleteHandler (){}
        setTodos(todos.filter((element) => element.id !== todo.id));
 
    }; 
    const completeHandler=()=>{
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item,completed: !item.completed
                };
            }

            return item;
        }))
    }   

       
        
         
        

    return (
        <div className="todo">
            {/*  below we use backticks to include following (? is if todo is completed) then completed (: if not leave empty) */}
            <li className={`todo-item  ${todo.completed ? "completed" : "" }`} key={todo}>
                <input className="checkbox" type="checkbox" defaultChecked={todo.complete} onClick={completeHandler} />
                <i> {todo.text} </i> 
               
                {/* <button className="tick-btn">
                  <i className="fas fa-check"></i>
                </button> */}
                    <button onClick={deleteHandler} className="trash-btn" >
                    <i className="fas fa-trash"></i>
                    </button>
                </li>

            
        </div>
    )
}


export default Todo;



    





