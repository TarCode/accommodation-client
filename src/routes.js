import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import App from './App'

const Router = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>

      <Route exact path="/" component={App}/>
    </div>
  </Router>
)
