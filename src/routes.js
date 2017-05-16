import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store/create-store'
import App from './App'

const store = configureStore()

export const Routes = () => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>

        <Route exact path="/" component={App}/>
      </div>
    </Router>
  </Provider>
)
