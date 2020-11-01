import { LIKE_FLIGHT, FILTER_FLIGHTS } from './actionTypes';

export const likeFlight = flightCard => ({
  type: LIKE_FLIGHT,
  payload: flightCard
})

export const filterFlights = () => ({
  type: FILTER_FLIGHTS,
  payload: null
})
