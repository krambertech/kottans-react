import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './Counter';

import './index.css';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return state + 1;
        }

        case 'DECREMENT': {
            return state - 1;
        }

        default: {
            return state;
        }
    }
}

const store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
);
