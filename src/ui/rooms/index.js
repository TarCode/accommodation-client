import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRooms, bookRoom, cancelRoom } from '../../actions'
import Room from './room'

class App extends Component {
  componentDidMount() {
    this.props.getRooms()
  }
  render() {
    const { user, err, bookRoom, cancelRoom, rooms, loading } = this.props
    return (
      <div className="row">
        {
          loading ?
          <p>loading...</p> :
          rooms && rooms.map(r => (
            <div key={r._id} className='col s12 m6 l4'>
              <Room err={err} user={user} r={r} bookRoom={bookRoom} cancelRoom={cancelRoom}/>
            </div>
          ))
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { err, rooms, loading } = state.rooms
  const { user } = state
  return {
    user,
    err,
    rooms,
    loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRooms: bindActionCreators(getRooms, dispatch),
    bookRoom: bindActionCreators(bookRoom, dispatch),
    cancelRoom: bindActionCreators(cancelRoom, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
