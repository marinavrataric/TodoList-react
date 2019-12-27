import React from 'react'

function Todos(props) {

    const checkedText = {
        textDecoration : 'line-through',
        fontStyle : 'italic',
        color : 'gray'
    }

    const notCheckedText = {
        textDecoration : 'none',
        fontStyle : 'normal',
        color : 'black'
    }

    return (
        <div className="todolist">
            <input 
                className="checkbox" 
                type='checkbox' 
                checked={props.todo.checked}
                onChange={() => props.handleCheck(props.todo.id)}>
            </input>

            <h3 
                className="showTodo"
                style={props.todo.checked ? checkedText : notCheckedText}
            >{props.todo.content}</h3>

            <button 
                className="deleteBtn" 
                onClick={() => props.deleteTodo(props.todo.id)}
            >X</button>
        </div>
    )
}

export default Todos