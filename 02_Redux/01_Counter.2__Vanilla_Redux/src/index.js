import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

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

const render = () => ReactDOM.render(
    <div>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
        {store.getState()}
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
    </div>,
    document.getElementById('root')
);

render();
store.subscribe(render);
