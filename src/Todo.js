import React from 'react'

function Todo(props) {

    const checkedTextStyle = {
        textDecoration: "line-through",
        fontStyle: "italic",
        color: "rgb(187, 186, 186)"
    }

    return(
        <div className="todolist">
            <input
                type="checkbox"
                className="checkbox"
                checked={props.todo.checked}   
                onClick={() => props.handleCheck(props.todo.id)}>
            </input>

            <h1 
                className="showTodo"
                style={props.todo.checked ? checkedTextStyle : {}}    
            >{props.todo.content}</h1>

            <button 
                className="deleteBtn"
                onClick={() => props.deleteTodo(props.todo.id)}
            >X</button>
        </div>
    )
}

export default Todo