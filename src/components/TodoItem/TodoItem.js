import React, {Component} from 'react';
class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done: this.props.done || false,
            text: this.props.text || '',
        }
    }

    render() {
        return (
            <div className={'TodoItem' + this.state.done ? ' Done' : ''}>
                <input type="checkbox" defaultChecked={this.state.done} onChange={this.props.changeHandler} />
                {this.state.text}
            </div>
        );
    }
}

export default TodoItem;