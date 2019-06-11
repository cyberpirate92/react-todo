import React, {Component} from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
        };
        // this.itemChangeHandler = this.itemChangeHandler.bind(this);
        // this.itemRemoveHandler = this.itemRemoveHandler.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
    }

    itemChangeHandler(itemIndex) {
        /** @type {Array} */
        let curState = this.state.list;
        curState[itemIndex].done = !curState[itemIndex].done;
        this.setState({
            list: curState,
        });
    }

    itemRemoveHandler(itemIndex) {
        /** @type {Array} */
        let curState = JSON.parse(JSON.stringify(this.state.list));
        console.log('Before: ', curState);
        curState.splice(itemIndex, 1);
        console.log('After', curState);
        this.setState({
            list: curState,
        });
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

    render() {
        console.log('Rendering TodoList');
        return (
            <div className="TodoList">
                <div>{this.state.list.filter(item => item.done === true).length}/{this.state.list.length} Done</div>
                <input type="text" id="todoInput" placeholder="Add new item..."/> <button onClick={this.addClickHandler}>Add</button>
                {this.state.list.map((item, index) => (<TodoItem key={item.id} done={item.done} text={item.text} changeHandler={() => this.itemChangeHandler(index)} removeHandler={() => this.itemRemoveHandler(index)} />))}
            </div>
        );
    }
}

export default TodoList;