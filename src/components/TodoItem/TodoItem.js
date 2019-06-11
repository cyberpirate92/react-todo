import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        return (
            <div className={this.props.done === true ? 'TodoItem Done col-12' : 'TodoItem col-12'}>
                <div className='form-check inline-block'>
                    <input type="checkbox" className="form-check-input" defaultChecked={this.props.done} onChange={this.props.changeHandler} />
                    <div className="form-check-label">
                        <span>{this.props.text}</span>
                    </div>
                </div>
                <div className="RemoveButton" onClick={this.props.removeHandler}>&times;</div>
            </div>
        );
    }
}

export default TodoItem;