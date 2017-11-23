import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodoAsync } from '../actions';

import './AddTodo.css';

const ENTER_KEY = 13;

class AddTodo extends Component {
    state = {
        text: ""
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            this.props.addTodo(this.state.text);
            this.setState({ text: "" });
        }
    }

    render() {
        return (
            <div className="AddTodo">
                <input
                    className="AddTodo__input"
                    type="text"
                    placeholder="What needs to be done?"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}

export default connect(null, { addTodo: addTodoAsync })(AddTodo);
