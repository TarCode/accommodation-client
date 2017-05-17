export const GET_ROOM = "GET_ROOM"
export const GET_ROOM_SUCCESS = "GET_ROOM_SUCCESS"
export const GET_ROOM_ERROR = "GET_ROOM_ERROR"

export const BOOK_ROOM = "BOOK_ROOM"
export const BOOK_ROOM_SUCCESS = "BOOK_ROOM_SUCCESS"
export const BOOK_ROOM_ERROR = "BOOK_ROOM_ERROR"

export const CANCEL_ROOM = "CANCEL_ROOM"
export const CANCEL_ROOM_SUCCESS = "CANCEL_ROOM_SUCCESS"
export const CANCEL_ROOM_ERROR = "CANCEL_ROOM_ERROR"


export const getRoom = (roomId) => {
  return dispatch => {
    dispatch({ type: GET_ROOM })
    fetch(`http://localhost:3001/rooms/${roomId}`, {
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
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch({ type: GET_ROOM_SUCCESS, room: json.room, roommates: json.roommates })
    })
  }
}

export const bookRoom = (roomId, student) => {
  return dispatch => {
    dispatch({ type: BOOK_ROOM })
    fetch(`http://localhost:3001/rooms/book`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomId, student: student })
        // credentials: 'include',
        // headers: {
        //   authorization: `Bearer ${ getLocalToken() }`
        // }
      })
      .then(response => response.json())
      .then(json => {
        if(json.err) {
          dispatch({ type: BOOK_ROOM_ERROR, err: json.err })
        } else {
          fetch(`http://localhost:3001/roommates/${student.id}`, {
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
            window.alert("Booked spot in room!")
            dispatch({ type: 'GET_CURRENT_ROOM_SUCCESS', user: json })
            fetch(`http://localhost:3001/rooms/${roomId}`, {
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
            .then(response => {
              return response.json()
            })
            .then(json => {
              dispatch({ type: GET_ROOM_SUCCESS, room: json.room, roommates: json.roommates })
            })
          })
        }
      })
  }
}

export const cancelRoom = (user, roomId) => {
  return dispatch => {
    dispatch({ type: CANCEL_ROOM })
    fetch(`http://localhost:3001/rooms/cancel`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
        // credentials: 'include',
        // headers: {
        //   authorization: `Bearer ${ getLocalToken() }`
        // }
      })
      .then(response => response.json())
      .then(json => {
        if(json.err) {
          dispatch({ type: CANCEL_ROOM_ERROR, err: json.err })
        } else {
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
            console.log('json', json);
            dispatch({ type: 'GET_CURRENT_ROOM_SUCCESS', user: json })
            fetch(`http://localhost:3001/rooms/${roomId}`, {
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
            .then(response => {
              return response.json()
            })
            .then(json => {
              dispatch({ type: GET_ROOM_SUCCESS, room: json.room, roommates: json.roommates })
            })
          })
        }
      })
  }
}
