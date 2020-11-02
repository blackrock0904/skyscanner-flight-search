import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  filterByLike: false,
  currentFlight: {},
  showFlightInfo: false,
  flights: []
}
export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
