import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        
        this.props.addTodo(this.state.content)
        
        this.setState({
            content: ""
        })
    }
  render() {
      const { content } = this.state
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
            <label>Add a task</label>
            <input type="text" value={content} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}
