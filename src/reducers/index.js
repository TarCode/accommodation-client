import { combineReducers } from 'redux'
import rooms from './rooms'
import bookroom from './bookroom'
import user from './user'
import room from './room'

export default combineReducers({
  user,
  rooms,
  room,
  bookroom
})
