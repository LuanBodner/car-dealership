import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CarEdit } from 'views/CarEdit/CarEdit'
import { CarList } from 'views/CarList/CarList'
import CarRegistration from 'views/CarRegistration/CarRegistration'
import './App.css'

function App() {
  return (
    <>
      <ToastContainer position='bottom-right' theme='colored' autoClose={3000} />
      <Router>
        <Switch>
          <Route path='/create-car' component={CarRegistration} />
          <Route path='/edit-car/:id' component={CarEdit} />
          <Route path='/' component={CarList} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </>
  )
}

export default App
