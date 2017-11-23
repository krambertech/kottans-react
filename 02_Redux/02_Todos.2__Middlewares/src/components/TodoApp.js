import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

import './TodoApp.css';

export default class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <div className="TodoApp__container">
                    <h2 className="TodoApp__header">To do</h2>

                    <div className="TodoApp__widget">
                        <AddTodo />
                        <TodoList />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
