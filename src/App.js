import React, { Component } from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {id: 0, content: 'Buy milk', checked: false},
                {id: 1, content: 'Take out the trash', checked: true} 
            ]
        }
        this.deleteTodo = this.deleteTodo.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    deleteTodo(id) {
        const updatedTodos = this.state.todos.filter( todo => {
            return todo.id !== id
        })
        this.setState({
            todos: updatedTodos
        })
    }

    handleCheck(id) {
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

    addTodo(newTodo) {
        newTodo.id = Math.random()
        newTodo.checked = false
        console.log(newTodo)

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {      
        const todoComponent = this.state.todos.length > 0 ? this.state.todos.map( todo => {
            return <Todos 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodo={this.deleteTodo}
                    handleCheck={this.handleCheck}
                />
        }) : <h3 className="emptyTodoList">No more todos!</h3>

        return (
            <div className="container">
                <h1 className="title">Todo List</h1>
                <NewTodo 
                    todo={this.state.todos} 
                    addTodo={this.addTodo}
                />
                {todoComponent}
            </div>
        )
    }
}

export default App