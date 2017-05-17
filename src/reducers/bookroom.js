import {
  BOOK_ROOM,
  BOOK_ROOM_SUCCESS,
  BOOK_ROOM_ERROR
} from '../actions'

import { merge } from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case BOOK_ROOM:
      return merge({}, {
        loading: true
      })
    case BOOK_ROOM_SUCCESS:
      return merge({}, {
        roomId: action.roomId
      })
    case BOOK_ROOM_ERROR:
      return merge({}, {
        err: action.err
      })
    default:
      return state
  }
}
