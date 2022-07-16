import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { CarList } from 'views/CarList/CarList'
import CarRegistration from 'views/CarRegistration'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/create-car' component={CarRegistration} />
        <Route path='/' component={CarList} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
