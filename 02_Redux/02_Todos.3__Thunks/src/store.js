import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// const thunk = store => next => action =>
//     typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action);

const devtools = window.devToolsExtension || (() => noop => noop);

const enhancers = [
    applyMiddleware(thunk),
    devtools(),
];

export default createStore(
    rootReducer,
    {},
    compose(...enhancers),
);
