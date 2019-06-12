import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import {writeToLocalStorage} from '../../utils';
import {LOCAL_STORAGE_KEY} from '../../constants';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
        };
        this.addTodoItem = this.addTodoItem.bind(this);
    }

    itemChangeHandler(itemIndex) {
        /** @type {Array} */
        let curState = this.state.list;
        curState[itemIndex].done = !curState[itemIndex].done;
        this.setState({
            list: curState,
        });
        this.saveList(curState);
    }

    itemRemoveHandler(itemIndex) {
        /** @type {Array} */
        let curState = JSON.parse(JSON.stringify(this.state.list));
        curState.splice(itemIndex, 1);
        this.setState({
            list: curState,
        });
        this.saveList(curState);
    }

    addTodoItem(todoText) {
        if (todoText) {
            /** @type {Array} */
            let curState = JSON.parse(JSON.stringify(this.state.list));
            let maxId = (curState.length > 0 && curState.reduce((acc, cur, ) => cur.id > acc.id ? cur : acc).id) || 0;
            curState.push({
                done: false,
                text: todoText,
                id: maxId + 1,
            });
            this.setState({
                list: curState,
            });
            this.saveList(curState);
        }
    }

    addClickHandler = () => {
        /** @type {HTMLInputElement} */
        let textbox = document.querySelector("#todoInput");
        if (textbox && textbox.value) {
            let text = textbox.value.trim();
            if (text) {
                this.addTodoItem(text);
                textbox.value = '';
            }
        }
    }

    removeAllCompleted = () => {
        /** @type {Array} */
        let curState = JSON.parse(JSON.stringify(this.state.list));
        if (curState && curState.length > 0) {
            curState = curState.filter(item => !item.done);
            this.setState({
                list: curState,
            });
            this.saveList(curState);
        }
    }

    onKeyDownHandler = (event) => {
        if (event && event.key === 'Enter') {
            this.addClickHandler();
        }
    }

    saveList = (list) => {
        return writeToLocalStorage(LOCAL_STORAGE_KEY, list);
    }

    render() {
        return (
            <div className="TodoList row">
                <div className="ListSummary col-12 h5">
                    <span>{this.state.list.filter(item => item.done === true).length}/{this.state.list.length} Done</span>
                    <button className="btn btn-warning float-right" disabled={this.state.list && this.state.list.filter(i => i.done === true).length === 0} onClick={this.removeAllCompleted}>clear completed</button>
                </div>
                <div className="ListInput col-12">
                    <div className="input-group">
                        <input className="form-control" type="text" id="todoInput" onKeyDown={this.onKeyDownHandler} placeholder="Add new item..." />
                        <div className="input-group-append">
                            <button className="btn btn-primary" onClick={this.addClickHandler}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-4">
                    {
                        this.state.list.map((item, index) => (
                            <TodoItem key={item.id} done={item.done} text={item.text} changeHandler={() => this.itemChangeHandler(index)} removeHandler={() => this.itemRemoveHandler(index)} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default TodoList;