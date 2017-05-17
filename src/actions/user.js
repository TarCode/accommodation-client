export const GET_CURRENT_ROOM = "GET_CURRENT_ROOM"
export const GET_CURRENT_ROOM_SUCCESS = "GET_CURRENT_ROOM_SUCCESS"

export const getCurrentRoom = (user) => {
  return dispatch => {
    dispatch({ type: GET_CURRENT_ROOM })
    fetch(`http://localhost:3001/roommates/${user}`, {
      // credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // headers: {
        // authorization: `Bearer ${ getLocalToken() }`
      // }
    })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_CURRENT_ROOM_SUCCESS, user: json })
    })
  }
}
