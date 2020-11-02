import { LIKE_FLIGHT, FILTER_FLIGHTS, SHOW_INFO, LOAD_TO_STATE } from './actionTypes'
import { getDate } from '../scripts/getDate';
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
    case LOAD_TO_STATE:
      return {
        ...state,
        flights: action.payload.Quotes.map(quote => {
          return {
            id: String(quote.QuoteId),
            departureCity: 'Moscow',
            arriveCity: 'New York',
            departurePort: 'VKO',
            arrivePort: 'JFK',
            departureDate: getDate(new Date(quote.OutboundLeg.DepartureDate)),
            departureTime: '09:00',
            arriveTime: '20:50',
            company: action.payload.Carriers.find(item => item.CarrierId == quote.OutboundLeg.CarrierIds[0]).Name || 'undefined',
            price: quote.MinPrice,
            isLiked: false
          }
        })
      }
    default:
      return state;
  }
}
