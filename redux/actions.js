import { LIKE, CHANGE_MODE } from './actionTypes';
export const likeFlight = flightCard => ({
  type: LIKE,
  payload: flightCard
})

export const changeMode = () => ({
  type: CHANGE_MODE,
  payload: null
})
