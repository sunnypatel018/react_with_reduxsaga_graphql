import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import apiDataReducer from '../reducers/apiDataReducer';
import { actionWatcher } from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(apiDataReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(actionWatcher);

export default store;
