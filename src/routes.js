import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store/create-store'
import Template from './template'
import Nav from './ui/nav'
const store = configureStore()

export const Routes = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav Link={Link}/>
        <Route path="/" component={Template}/>
      </div>
    </Router>
  </Provider>
)
