import {
  BOOK_ROOM,
  BOOK_ROOM_SUCCESS,
  BOOK_ROOM_ERROR,

  GET_ROOMS,
  GET_ROOMS_SUCCESS
} from '../actions'

import { merge } from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return merge({}, {
        loading: true
      })
    case GET_ROOMS_SUCCESS:
      return merge({}, {
        rooms: action.rooms
      })
    case BOOK_ROOM:
      return merge({}, {
        loading: true
      })
    case BOOK_ROOM_SUCCESS:
      return merge({}, state)
    case BOOK_ROOM_ERROR:
      return merge({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
