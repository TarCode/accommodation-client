import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { getRooms } from '../../actions/rooms'

class App extends Component {
  componentDidMount() {
    this.props.getRooms()
  }
  render() {
    const { user, rooms, loading } = this.props
    return (
      <div className="row">
        {
          loading ?
          <p>loading...</p> :
          rooms && rooms.map(r => (
            <div key={r._id} className='col s12 m4 l3'>
              <div className={r._id === user.roomId ?
                'card teal darken-2 white-text' :
                'card'
              }>
                <div className='card-image'>
                  <img className="responsive-img" alt="img" src={r.img_url}/>
                </div>
                <div className='card-content'>
                  <span className='card-title'>{
                    r._id === user.roomId ?
                    r.name + '(Selected)' :
                    r.name
                  }</span>
                  <b>Size: </b>{r.size}<br/>
                  <b>Sleeps: </b>{r.max_roommates}
                </div>
                <div className='card-action'>
                  <Link to={'/' + r._id}>View</Link>
                </div>
              </div>
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
    getRooms: bindActionCreators(getRooms, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
