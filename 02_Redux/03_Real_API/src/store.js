import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

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
