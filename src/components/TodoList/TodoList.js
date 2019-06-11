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
        let currState = this.state.list;
        currState[itemIndex].done = !currState[itemIndex].done;
        this.setState({
            list: currState,
        });
    }

    render() {
        console.log('Rendering TodoList');
        return (
            <div className="TodoList">
                <div>To-Do List {this.state.list.filter(item => item.done === true).length}/{this.state.list.length} Done</div>
                {this.state.list.map((item, index) => (<TodoItem key={index} done={item.done} text={item.text} changeHandler={() => this.itemChangeHandler(index)}/>))}
            </div>
        );
    }
}

export default TodoList;