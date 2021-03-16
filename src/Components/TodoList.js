import React from 'react';
import Todo from './Todo';


function TodoList({todos,setTodos}) {
    //const TodoList =()=>{} it can also be written like this instead of old syntax

    
    return (
        <div>
            <h4>Todos</h4>
            <div className='todo-container'>
                <ul className="todo-list">
                    {/* map is like a foreach in php */}
                    {todos.map((todo)=>(
                        <Todo
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        key={todo.id}
                        text={todo.text}

                        />

                       
                    ))} 
                </ul>

            </div>
        </div>
    )
}
export default TodoList;
