import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRoom, bookRoom, cancelRoom } from '../../actions'

class Room extends Component {
  componentDidMount() {
    this.props.getRoom(this.props.match.params.id)
  }
  render() {
    const { user, roommates, bookRoom, cancelRoom, room, loading } = this.props
    return (
      <div className="row">
        {
          loading ?
          <p>Loading</p> :
          (
            room && <div className='card'>
                <div className='card-image'>
                  <img alt="img" src={room.img_url}/>
                </div>
                <div className='card-content'>
                  <span className='card-title'>{
                    room.name
                  }</span>
                  <b>Size: </b>{room.size}<br/>
                  <b>Views:</b><br/>
                  {
                    room.views.map((v, i) => (
                      <p key={i}>{v}</p>
                    ))
                  }
                  <b>Amenities: </b>
                  {
                    room.amenities.map(a => (
                      <p key={a}>{a}</p>
                    ))
                  }
                  <b>Roommates: </b>
                  {
                    roommates && roommates.length > 0 ?
                    roommates.map(rm => (
                      <img alt={rm.name} className='circle avatar' src={rm.img_url} key={rm.id}/>
                    )) :
                    <p>No roommates yet</p>
                  }
                </div>
                <div className='card-action'>
                  {
                    user.roomId === room._id ?
                    <a onClick={() => {
                      cancelRoom(user, room._id)
                    }} href="#">Cancel</a> :
                    <a onClick={() => {
                      bookRoom(room._id, user)
                    }} href="#">Book</a>
                  }
                </div>
              </div>
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { room, roommates, loading } = state.room
  const { user } = state
  return {
    user,
    room,
    roommates,
    loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRoom: bindActionCreators(getRoom, dispatch),
    bookRoom: bindActionCreators(bookRoom, dispatch),
    cancelRoom: bindActionCreators(cancelRoom, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
