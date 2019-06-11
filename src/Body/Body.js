import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="col-12">
                {this.props.children}
            </div>
        );
    }
}

export default Body;