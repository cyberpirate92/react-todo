import React, { Component } from 'react';
import './App.css';
import Body from './Body/Body.js';
import TodoList from './components/TodoList/TodoList';

class App extends Component {

  state = {
    todoList: [{
      done: false,
      text: 'Sample Item #1',
      id: 1
    }, {
      done: false,
      text: 'Sample Item #2',
      id: 2,
    }]
  };

  render() {
    return (
      <div className="App row">
        <div className="AppHeader col-12">
          <span className="display-4">ToDoList</span>
        </div>
        <div className="AppBody col-12">
          <Body>
            <TodoList list={this.state.todoList} />
          </Body>
        </div>
      </div>
    );
  }
}

export default App;
