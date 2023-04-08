
import './App.css'
import Signup from './components/signup'
import Login from './components/login'
import UserProvider from './components/context/UserContext'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addblog from './components/Addblog'
import UserRoute from './components/privateRoute/UserRoute'
// import Viewblog from './components/viewblog'
import ViewAuthorblog from './components/ViewAuthorblog'
import Editblog from './components/Editblog'
import LandingPage from './components/LandingPage'
import Sortblog from './components/Sortblog'
import SingleCard from './components/SingleCard'



// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const { setloggedinuser } = useContext(UserContext)


  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/login' element={<Login />} />
          <Route path='/addblog' element={<UserRoute><Addblog /></UserRoute>} />
          {/* <Route path='/viewblog' element={<Viewblog />} /> */}
          <Route path='/viewauthorblog' element={<UserRoute><ViewAuthorblog /> </UserRoute>} />
          <Route path='/editblog' element={<Editblog />} />
          <Route path='/sortblog/:category' element={<Sortblog />} />
          <Route path='/singleblog/:id' element={<SingleCard />} />



        </Routes>


      </BrowserRouter>
    </UserProvider>
  )

}



export default App
