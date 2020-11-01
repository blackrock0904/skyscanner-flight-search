import { LIKE_FLIGHT, FILTER_FLIGHTS } from './actionTypes'
export const reducer = (state, action) => {
  switch(action.type) {
    case LIKE_FLIGHT:
      return {
        ...state,
        flights: state.flights.map(item => {
          if (item !== action.payload) return item;
          return {
            ...item,
            isLiked: !item.isLiked
          }
        })
      }
    case FILTER_FLIGHTS:
      return {
        ...state,
        filterByLike: !state.filterByLike
      }
    default:
      return state;
  }
}
