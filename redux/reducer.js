import { LIKE_FLIGHT, FILTER_FLIGHTS, SHOW_INFO } from './actionTypes'

export const reducer = (state, action) => {
  switch(action.type) {
    case LIKE_FLIGHT:
      let target;
      return {
        ...state,
        flights: state.flights.map(item => {
          if (item !== action.payload) {
            return item;
          } else {
            target = {
              ...item,
              isLiked: !item.isLiked
            }
            return target;
          }
        }),
        currentFlight: target  
      }
    case FILTER_FLIGHTS:
      return {
        ...state,
        filterByLike: !state.filterByLike
      }
    case SHOW_INFO:
      return {
        ...state,
        currentFlight: action.payload,
        showFlightInfo: !state.showFlightInfo
      }
    default:
      return state;
  }
}
