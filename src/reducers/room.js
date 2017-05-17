import {
  GET_ROOM,
  GET_ROOM_SUCCESS
} from '../actions'

import { merge } from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ROOM:
      return merge({}, {
        loading: true
      })
    case GET_ROOM_SUCCESS:
      return merge({}, {
        room: action.room,
        roommates: action.roommates
      })
    default:
      return state
  }
}
