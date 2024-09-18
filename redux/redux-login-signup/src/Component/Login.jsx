import React, { useState } from 'react'
import { fetchapi } from '../Redux/store'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
    const dispatch = useDispatch()
    const value = useSelector((s)=>s)
    console.log(value)
    const [state,setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e)=>{
        setState({...state,[e.target.name] : e.target.value})
    }
    const handleSubmit = (e)=>{
         e.preventDefault()
        fetchapi(dispatch,state.email)
    }
  return (
    <div>
         <h1>Login</h1>
         <form onSubmit={handleSubmit}>
             <input type="text" placeholder='Email' name='email'  onChange={handleChange}/>
             <input type="text" placeholder='Password' name='password'onChange={handleChange}  />
             <input type="submit"/>
        </form>
    </div>
  )
}

export default Login