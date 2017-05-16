import { rooms } from '../roomdata'

export const GET_ROOMS = "GET_ROOMS"
export const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS"
export const GET_ROOM_ERROR = "GET_ROOM_ERROR"

export const BOOK_ROOM = "BOOK_ROOM"
export const BOOK_ROOM_SUCCESS = "BOOK_ROOM_SUCCESS"
export const BOOK_ROOM_ERROR = "BOOK_ROOM_ERROR"

export const bookRoom = (roomId) => {
  return dispatch => {
    dispatch({ type: BOOK_ROOM })
    rooms.forEach(r => {
      if(r._id === roomId) {
        if(r.current.length < r.max_roommates) {
          const stud = {
            id: '100',
            name: 'Bill Hix',
            gender: 'male',
            university: 'Stanford',
            img_url: 'https://randomuser.me/api/portraits/thumb/men/31.jpg'
          }
          r.current.push(stud)
          window.alert('Booked student')
          dispatch({ type: GET_ROOMS_SUCCESS, rooms })
        } else {
          window.alert('Fully booked')
        }
      }
    })
  }
}

export const getRooms = () => {
  return dispatch => {
    dispatch({ type: GET_ROOMS })
    // fetch(`https://localhost:3000/rooms`, {
    //   // credentials: 'include',
    //   mode: 'cors',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   // headers: {
    //     // authorization: `Bearer ${ getLocalToken() }`
    //   // }
    // })
    // .then(response => response.json())
    // .then(json => {
    //   dispatch({ type: GET_ROOMS_SUCCESS, rooms: json })
    // })
    dispatch({ type: GET_ROOMS_SUCCESS, rooms })
  }
}
