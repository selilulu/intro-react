import React from 'react'

export default function TodoList() {

    const someTodos=['Go for groceries','Check out that book','Prepare a dish for today']

    return (
        <div>
            <h4>Todos</h4>
            <div id='checkboxes'>
                
                <ul>
                    {someTodos.map((todo)=>(
                    <li><input type="checkbox" />{todo}</li>
                    ))}
                </ul>
    
            </div>
        </div>
    )
}
