import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRoom } from '../actions/room-admin'
import { room } from '../roomdata'

const Navbar = ({ Link, user, addRoom }) => (
  <nav>
    <div className="nav-wrapper">
      <Link to='/' className="brand-logo">
      <img className='circle avatar' alt={user.name} src={user.img_url}/>
      {user.name}
    </Link>
      <ul className="right">
        <li><a onClick={() => {
          addRoom(room)
        }} href='#'>Add Mock Room</a></li>
      </ul>
    </div>
  </nav>
)

function mapStateToProps(state) {
  const { user } = state
  return {
    user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addRoom: bindActionCreators(addRoom, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
