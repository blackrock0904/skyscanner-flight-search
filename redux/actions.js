import { LIKE_FLIGHT, FILTER_FLIGHTS, SHOW_INFO } from './actionTypes';

export const likeFlight = flightCard => ({
  type: LIKE_FLIGHT,
  payload: flightCard
})

export const filterFlights = () => ({
  type: FILTER_FLIGHTS,
  payload: null
})

export const showInfo = (item) => ({
  type: SHOW_INFO,
  payload: item
})
