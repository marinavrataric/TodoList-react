import React, { Component } from 'react'

class NewTodo extends Component {
    constructor() {
        super()
        this.state = {
            content: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
    }

    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleAddTodo(e) {
        e.preventDefault()
        //console.log(this.state)
        this.setState({
            content: ''
        })
        this.props.addTodo(this.state)
    }

    render() {      
        return (
            <div>
                <input
                    type="text"
                    placeholder="Write a todo"
                    className="inputTodoTxt"
                    value={this.state.content}
                    onChange={this.handleChange}>
                </input>

                <button
                    className="addTodoBtn"
                    onClick={this.handleAddTodo}
                >Add</button>
            </div>
        )
    }
}

export default NewTodo