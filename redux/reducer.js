import { LIKE } from './actionTypes'
export const reducer = (state, action) => {
  switch(action.type) {
    case LIKE:
      return state.map(item => {
        if (item !== action.payload) return item;
        return {
          ...item,
          isLiked: !item.isLiked
        }
      })
    default:
      return state;
  }
}
