import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../Components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'

function Mainrout() {
  return (
    <div>
        <Routes>
          {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
    </div>
  )
}

export default Mainrout