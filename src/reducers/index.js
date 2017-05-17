import { combineReducers } from 'redux'
import rooms from './rooms'
import user from './user'
import room from './room'

export default combineReducers({
  user,
  rooms,
  room
})
