import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dispatcher } from 'flux';
import { EventEmitter } from 'events';

import './index.css';

const AppDispatcher = new Dispatcher();

const CHANGE_EVENT = 'change';

/* Store */
let _count = 0;

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getCount() {
        return _count;
    }
});

/* Dispatcher */
AppDispatcher.register(action => {
    if (action.type === 'INCREMENT') {
        _count++;

        CounterStore.emitChange();
    }

    if (action.type === 'DECREMENT') {
        _count--;

        CounterStore.emitChange();
    }
});

/* Actions */
function increment() {
    AppDispatcher.dispatch({
       type: 'INCREMENT'
    });
}

function decrement() {
    AppDispatcher.dispatch({
       type: 'DECREMENT'
    });
}

/* Component */
class Counter extends Component {
    constructor() {
        super();

        this.state = this.getStateFromFlux();
    }

    getStateFromFlux() {
        return {
            count: CounterStore.getCount()
        };
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.updateState);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.updateState);
    }

    updateState = () => {
        this.setState(this.getStateFromFlux());
    }

    render() {
        return (
            <div>
                <button onClick={decrement}>-</button>
                {this.state.count}
                <button onClick={increment}>+</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
