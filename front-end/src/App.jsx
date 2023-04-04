
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/signup'
import Login from './components/login'
import UserProvider from './components/context/UserContext'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addblog from './components/addblog'
import UserRoute from './components/privateRoute/UserRoute'
import Viewblog from './components/viewblog'
import ViewAuthorblog from './components/ViewAuthorblog'

// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addblog' element={<UserRoute><Addblog /></UserRoute>} />
          <Route path='/viewblog' element={<Viewblog />} />
          <Route path='/viewauthorblog' element={<ViewAuthorblog />} />


        </Routes>


      </BrowserRouter>
    </UserProvider>
  )

}



export default App
