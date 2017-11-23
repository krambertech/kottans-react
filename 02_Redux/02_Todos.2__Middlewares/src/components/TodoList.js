import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <div className="base">
                {
                    this.props.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onToggle={() => this.props.toggleTodo(todo.id)}
                        />
                    )
                }
            </div>
        );
    }
}

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);

        case 'SHOW_NEW':
            return todos.filter(todo => !todo.completed);

        default:
            return todos;
    }
}

export default connect(
    state => ({
        todos: getVisibleTodos(state.todos, state.filter)
    }),
    { toggleTodo }
)(TodoList);
