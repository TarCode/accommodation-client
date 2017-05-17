import {
  GET_ROOMS,
  GET_ROOMS_SUCCESS
} from '../actions/rooms'

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
    default:
      return state
  }
}
