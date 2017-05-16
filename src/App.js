import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRooms, bookRoom } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.getRooms()
  }
  render() {
    const { bookRoom, rooms, loading } = this.props
    return (
      <div className="row">
        {
          loading ?
          <p>loading...</p> :
          rooms && rooms.map(r => (
            <div key={r._id} className='col s12 m6 l4'>
              <div className='card'>
                <div className='card-image'>
                  <img alt="img" src={r.img_url}/>
                </div>
                <div className='card-content'>
                  <span className='card-title'>{r.name}</span>
                  <b>Size: </b>{r.size}<br/>
                  <b>Views:</b><br/>
                  {
                    r.views.map((v, i) => (
                      <p key={i}>{v}</p>
                    ))
                  }
                  <b>Amenities: </b>
                  {
                    r.amenities.map(a => (
                      <p key={a}>{a}</p>
                    ))
                  }
                  <b>Sleeps: </b>
                  <h4>{r.current.length + '/' + r.max_roommates}</h4>
                  {
                    r.current.map(c => (
                      <img alt={c.name} key={c.id} className='circle avatar' src={c.img_url}/>
                    ))
                  }
                </div>
                <div className='card-action'>
                  <a onClick={() => {
                    bookRoom(r._id)
                  }} href="#">Book</a>
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
  console.log('state', state);
  const { rooms, loading } = state
  return {
    rooms,
    loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRooms: bindActionCreators(getRooms, dispatch),
    bookRoom: bindActionCreators(bookRoom, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
