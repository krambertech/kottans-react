import React, { Component } from 'react';

import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';

import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };

        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    componentDidMount() {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));

        if (savedNotes) {
            this.setState({ notes: savedNotes });
        }
    }

    componentDidUpdate() {
        const notes = JSON.stringify(this.state.notes);

        localStorage.setItem('notes', notes);
    }

    handleNoteDelete(noteId) {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    }

    handleNoteAdd(newNote) {
        this.setState({
            notes: [newNote, ...this.state.notes]
        });
    }

    render() {
        return (
            <div className="app">
                <h2 className="app__header">App</h2>

                <NoteEditor onNoteAdd={this.handleNoteAdd} />

                <NotesGrid
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    }
}
