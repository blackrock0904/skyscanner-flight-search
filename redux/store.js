import { createStore } from 'redux';
import { reducer } from './reducer';

const initialState = {
  filterByLike: false,
  currentFlight: {},
  showFlightInfo: false,
  flights: []
}
export const store = createStore(reducer, initialState);
