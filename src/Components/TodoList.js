
import React from 'react'


export default function TodoList({todos}) {

    

    return (
        <div>
            <h4>Todos</h4>
            <div id='checkboxes'>
                <ul>
                    {todos.length}
                    {/* map is like a foreach in php */}
                    {todos.map((todo)=>(
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.complete} />{todo.name}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}
