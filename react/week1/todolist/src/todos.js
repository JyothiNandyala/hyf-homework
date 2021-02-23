import React from 'react';

const TodoItems = (props) => {
    return (
        <h2>
            {props.activity},{props.duration}
        </h2>
    )
}

const RenderedTodos = (props) => {
    return (
        <ol>
            <h1 className="todo-header">Todo List</h1>
          
                {props.todos.map(todo => {
                return  <li> <TodoItems activity={todo.activity} duration={todo.duration} key={todo.id} />
                 </li>
            })}
           
        </ol>
    )
}

export default RenderedTodos