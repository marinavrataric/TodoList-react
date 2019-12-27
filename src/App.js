import React, { Component } from 'react'

import NewTodo from './NewTodo'
import Todo from './Todo'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {id: 0, content: 'Clean the dishes', checked: true},
                {id: 1, content: 'Buy milk', checked: false}
            ]
        }
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(newTodo) {
        newTodo.id = Math.random()
        newTodo.checked = false

        const updatedTodos = [...this.state.todos, newTodo]

        this.setState({
            todos: updatedTodos
        })
    }

    handleCheck = (id) => {
        const updatedTodos = this.state.todos.map( todo => {
            if(id === todo.id) {
                todo.checked = !todo.checked
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        })
    }

    deleteTodo = (id) => {
        const updatedTodos = this.state.todos.filter( todo => {
            if(id !== todo.id) {
                return todo
            }
        })
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        const todoComponents = this.state.todos.length > 0 ? this.state.todos.map( todo => {
            return <Todo 
                    todo={todo} 
                    handleCheck={this.handleCheck}
                    deleteTodo={this.deleteTodo}
                />
        }) : <h2 className="emptyTodoList">No more todos!</h2>

        return (
            <div className="container">
                <h1 className="title">Todo List</h1>
                <NewTodo addTodo={this.addTodo}/>
                <div className="todoContainer">{todoComponents}</div>
            </div>
        )
    }
}

export default App