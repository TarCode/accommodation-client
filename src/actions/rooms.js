export const GET_ROOMS = "GET_ROOMS"
export const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS"
export const GET_ROOMS_ERROR = "GET_ROOMS_ERROR"

export const getRooms = () => {
  return dispatch => {
    dispatch({ type: GET_ROOMS })
    fetch(`http://localhost:3001/rooms`, {
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
      console.log('json', json);
      dispatch({ type: GET_ROOMS_SUCCESS, rooms: json })
    })
  }
}
