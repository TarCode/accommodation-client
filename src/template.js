import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCurrentRoom } from './actions'
import { Route } from 'react-router-dom'
import Rooms from './ui/rooms'
import Room from './ui/room'

class Template extends React.Component {
  componentDidMount() {
    const { user } = this.props
    this.props.getCurrentRoom(user.id)
  }
  render() {
    return (
      <div>
        <Route exact path="/" component={Rooms}/>
        <Route exact path="/:id" component={Room}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state
  return {
    user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentRoom: bindActionCreators(getCurrentRoom, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)
