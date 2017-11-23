import React, { Component } from 'react';

import './Todo.css';

export default class Todo extends Component {
    render() {
        const { text, completed, onToggle } = this.props;

        return (
            <div
                className={`Todo ${completed && 'Todo--completed'}`}
                onClick={onToggle}
            >
                {text}
            </div>
        );
    }
}
