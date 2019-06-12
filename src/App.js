import React, { Component } from 'react';
import './App.css';
import Body from './Body/Body.js';
import TodoList from './components/TodoList/TodoList';
import { readFromLocalStorage } from './utils';
import { LOCAL_STORAGE_KEY, DEFAULT_TODO_LIST } from './constants';
class App extends Component {

    constructor(props) {
        super(props);
        let itemsInStorage = readFromLocalStorage(LOCAL_STORAGE_KEY);
        this.state = {
            todoList: itemsInStorage ? itemsInStorage : DEFAULT_TODO_LIST,
        }
    }

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
