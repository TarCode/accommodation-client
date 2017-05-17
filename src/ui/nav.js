import React from 'react'
import { connect } from 'react-redux'

const Navbar = ({ Link, user }) => (
  <nav>
    <div className="nav-wrapper">
      <Link to='/' className="brand-logo">
      <img className='circle avatar' alt={user.name} src={user.img_url}/>
      {user.name}
    </Link>
      <ul className="right">
        <li><Link to='/my-room'>My Room</Link></li>
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

export default connect(mapStateToProps)(Navbar)
