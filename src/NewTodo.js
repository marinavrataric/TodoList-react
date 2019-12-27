import React, { Component } from 'react'

class NewTodo extends Component {
    constructor() {
        super()
        this.state = {
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            content: ''
        })
        document.querySelector('.inputTodoTxt').value !== '' && this.props.addTodo(this.state)        
        document.querySelector('.inputTodoTxt').value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="inputTodoTxt"
                        type="text"
                        placeholder="Write a todo..."
                        onChange={this.handleChange}>
                    </input>
                </form>
            </div>
        )
    }
}

export default NewTodo