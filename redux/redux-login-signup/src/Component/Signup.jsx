import React, { useState } from 'react'

function Signup() {
    const [state,setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e)=>{
        setState({...state,[e.target.name] : e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`https://mock-server-app2-dll0.onrender.com/user`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(state)
        }).then((res)=>res.json())
        .then((Res)=>console.log(Res))
        .catch((err)=>console.log(err))
    }
    
  return (
    <div>
        <h1>Signnu</h1>
        <form onSubmit={handleSubmit}>
             <input type="text" placeholder='Email' name='email'  onChange={handleChange}/>
             <input type="text" placeholder='Password' name='password'onChange={handleChange}  />
             <input type="submit" />
        </form>
    </div>
  )
}

export default Signup