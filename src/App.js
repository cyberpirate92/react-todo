import React, { Component } from 'react';
import './App.css';
import Body from './Body/Body.js';
import TodoList from './components/TodoList/TodoList';

class App extends Component {

  state = {
    todoList: [{
      done: false,
      text: 'Item #1',
      id: 1
    }, {
      done: false,
      text: 'Item #2',
      id: 2,
    }, {
      done: false,
      text: 'Item #3',
      id: 3,
    }]
  };

  render() {
    return (
      <div className="App">
        <div className="AppHeader">
          ToDoList
        </div>
        <div className="AppBody">
          <Body>
            <TodoList list={this.state.todoList} />
          </Body>
        </div>
      </div>
    );
  }
}

export default App;
