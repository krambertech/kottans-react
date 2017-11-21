import React, { Component } from 'react';

import './Note.css';

export default class Note extends Component {
    constructor() {
        super();

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const { id, onDelete } = this.props;

        if (onDelete) {
            onDelete(id);
        }
    }

    render() {
        const {
            color,
            children,
        } = this.props;

        return (
            <div className="note" style={{ backgroundColor: color }}>
                <button className="note__delete-icon" onClick={this.handleDelete}> × </button>
                {children}
            </div>
        );
    }
}
