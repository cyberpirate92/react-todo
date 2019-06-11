import React, {Component} from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
        };
        this.itemChangeHandler = this.itemChangeHandler.bind(this);
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
            list: curState
        });
    }

    render() {
        console.log('Rendering TodoList');
        return (
            <div className="TodoList">
                <div>To-Do List {this.state.list.filter(item => item.done === true).length}/{this.state.list.length} Done</div>
                {this.state.list.map((item, index) => (<TodoItem key={item.id} done={item.done} text={item.text} changeHandler={() => this.itemChangeHandler(index)} removeHandler={() => this.itemRemoveHandler(index)} />))}
            </div>
        );
    }
}

export default TodoList;