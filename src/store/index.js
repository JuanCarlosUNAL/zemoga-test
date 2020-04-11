// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagasRoot from './sagas';

const sagasMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(sagasMiddleware),
));

sagasMiddleware.run(sagasRoot);

export default store;
