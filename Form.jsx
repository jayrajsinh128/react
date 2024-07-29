import React from 'react'
import { useState } from 'react'

function Form() {

    const [obj,setObj] = useState({
        email : "",
        password : "",
        username : "" 
     })
     const [arr,setarr] = useState([])
     const [viewPass,setviewPass] = useState(false)
     const [pass,setPass] = useState(null)
     const handleChange = (e)=>{
          let {name,value} = e.target
        setObj({...obj,[name] : value})
     }
     const handleSubmit = (e)=>{
       e.preventDefault()
      setarr([...arr,obj])
      setObj({
        email : "",
        password : "",
        username : ""
      })
     }
     const handleBlur =()=>{
      let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,25}$/; 
    
       console.log(regex.test(obj.password))
          // if(obj.password.length >= 8){
          //   setPass(true)
          // }
          
     }
     const handleFocus = ()=>{
      //  console.log("Focus wala"); 
     }
  return (
    <div>

<div className="wrapper">
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <div className="input-field">
        <input type="text" value={obj.username}  name='username' onChange={handleChange} required />
        <label>Enter your name</label>
      </div>
        <div className="input-field">
        <input type="text" value={obj.email} name='email' onChange={handleChange} required />
        <label>Enter your email</label>
      </div>
      <div className="input-field">
      <input type={viewPass ?  "text" : "password"} className={pass == false ? 'a' : ""} onBlur={handleBlur}  name='password' value={obj.password} onChange={handleChange} required/>
      {pass == false ? <span className='deep'>Password Must be 8 Characters</span> : ""}
         {viewPass==false ? <span onClick={()=>setviewPass(true)} className="material-symbols-outlined" style={{marginLeft:"-24px"}}>
          visibility
            </span> : <span onClick={()=>setviewPass(false)} className="material-symbols-outlined" style={{marginLeft:"-24px"}}>
            visibility_off
            </span>}
        
         <label>Enter your password</label>
      </div>
      <div className="forget">
        <label for="remember">
          <input type="checkbox" id="remember"/>
          <p>Remember me</p>
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit">Log In</button>
      <div className="register">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </form>
  </div>
        
        
        
            </div>
  )
}

export default Form