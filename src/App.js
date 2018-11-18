import React, { Component } from 'react';

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
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Hello world</h1>
        
      </div>
    );
  }
}

export default App;
