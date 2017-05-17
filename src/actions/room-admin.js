// Temp action file for adding mock room (for demonstration)

export const ADD_ROOM = "ADD_ROOM"
export const ADD_ROOM_SUCCESS = "ADD_ROOM_SUCCESS"
export const ADD_ROOM_ERROR = "ADD_ROOM_ERROR"

export const addRoom = (room) => {
  return dispatch => {
    dispatch({ type: ADD_ROOM })
    fetch(`http://localhost:3001/rooms/add`, {
      // credentials: 'include',
      mode: 'cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(room)
      // headers: {
        // authorization: `Bearer ${ getLocalToken() }`
      // }
    })
    .then(response => response.json())
    .then(json => {
      window.alert("Added room!")
      window.location.reload()
      dispatch({ type: ADD_ROOM_SUCCESS })
    })
  }
}
