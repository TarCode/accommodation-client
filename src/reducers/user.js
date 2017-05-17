import {
  BOOK_ROOM_SUCCESS,
  CANCEL_ROOM,
  GET_CURRENT_ROOM_SUCCESS
} from '../actions'

import { merge } from 'lodash'

export default (state = {
  id: '100',
  name: 'Bill Hix',
  gender: 'male',
  university: 'Stanford',
  img_url: 'https://randomuser.me/api/portraits/thumb/men/31.jpg'
}, action) => {
  switch (action.type) {
    case BOOK_ROOM_SUCCESS:
      return merge({}, state, {
        room: action.room
      })
    case GET_CURRENT_ROOM_SUCCESS:
      return merge({}, state, {
        roomId: action.user.roomId
      })
    case CANCEL_ROOM:
      delete state['roomId']
      return state
    default:
      return state
  }
}
