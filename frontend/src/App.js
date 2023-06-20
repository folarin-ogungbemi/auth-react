import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';
import React from 'react'

import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/SignUp'
import Activate from './containers/Activate'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'
import Layout from './hocs/Layout'

const App = () => {
  return(
    <Router>
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
          <Route path="/activate/:uid/:token" element={<Activate/>}/>
        </Routes>
      </Layout>
    </div>
  </Router>
  )
}

export default App