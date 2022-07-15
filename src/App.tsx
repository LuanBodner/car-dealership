import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { CarList } from 'views/CarList'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={CarList} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
