import { LIKE_FLIGHT, FILTER_FLIGHTS, SHOW_INFO, LOAD_TO_STATE, START_FETCH } from './actionTypes';

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

export const loadToState = (data) => ({
  type: LOAD_TO_STATE,
  payload: data
})

export const startFeth = () => {
  return { type: START_FETCH}
}
