import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

const logger = store => next => action => {
    console.group(action.type);
    console.info('action', action);

    let result = next(action);

    console.log('next state', store.getState());
    console.groupEnd(action.type);

    return result;
}

export default createStore(
    rootReducer,
    applyMiddleware(logger)
);
