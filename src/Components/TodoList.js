
import React from 'react'


export default function TodoList({todos,setInputText}) {

    

    return (
        <div>
            <h4>Todos</h4>
            <div className='checkboxes'>
                <ul>
                    {/* {todos.length} */}
                    {/* map is like a foreach in php */}
                    {todos.map((todo)=>(
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.complete} />{todo.name}
                            <button className="trash-btn"><i className="fas fa-trash"></i></button>
                            <button className="tick-btn"><i className="fas fa-check"></i></button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}
