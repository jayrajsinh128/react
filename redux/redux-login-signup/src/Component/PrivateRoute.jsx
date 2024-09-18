import React from 'react'
import { useSelector } from 'react-redux'

function PrivateRoute() {
    const value = useSelector((s)=>s)
  return (
    value.isLogin == true ? children : <Navigate></Navigate>
  )
}

export default PrivateRoute