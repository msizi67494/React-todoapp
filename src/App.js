import React, { Component } from 'react'
import Todos from './todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "buy some milk"
      },
      {
        id: 2,
        content: "code a todo list"
      },
    ]
  }

  // delete todo function 
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todos) => {
      return todos.id !== id
    })

    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]

    this.setState({
      todos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="App container">
        
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
