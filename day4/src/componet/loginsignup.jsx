import React from 'react'
import Swal from 'sweetalert2';
import "./loginsignup.css"
import { useState } from 'react';



function Loginsignup() {
    
    const [state,setState] = useState("Signup")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loginEmail,setLEmail] = useState("")
    const [loginpass,setLoginpass] = useState("")
    const [arr,setArr] = useState([])
    
     const handleClick= ()=>{
         let obj = {
             username : name,
             email : email,
             pass : password
         }
         if(obj.email ==""&& obj.pass =="")
         {
          Swal.fire("SweetAlert2 is working!");
        }
          else
            {
              Swal.fire("Sign up In Sucessfully.");

             setArr([...arr,obj]);
         }
         
 
     }
     const handleLoginClick =()=>{
         let data = arr.filter((el)=>{
             return el.email == loginEmail && el.pass == loginpass})
             console.log(data)
         if(data.length>0){
            Swal.fire({
                title: "Login Succesfully...",
                showclassName: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideclassName: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
         }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
         }
     }
 
  return (    
     <div className="form-structor">
      {state == "Signup" ? <div className="signup">
		<h2 className="form-title" id="signup"><span>or</span>Sign up</h2>
		<div className="form-holder">
			<input type="text" className="input" placeholder="Name" onChange={(d)=>setName(d.target.value)} />
			<input type="email" className="input" placeholder="Email" onChange={(d)=>setEmail(d.target.value)} />
			<input type="password" className="input" placeholder="Password" onChange={(d)=>setPassword(d.target.value)} />
		</div>
		<button className="submit-btn" onClick={handleClick}>Sign up</button>
      <span onClick={()=>setState("Login")}>Already have an ACCOUNT</span>
	</div>:
	<div className="login slide-up">
		<div className="center">
			<h2 className="form-title" id="login" onClick={()=>setState("Signup")}><span>or</span>Log in</h2>
			<div className="form-holder">
				<input type="email" className="input" placeholder="Email"  onChange={(e)=>setLEmail(e.target.value)}/>
				<input type="password" className="input" placeholder="Password" onChange={(e)=>setLoginpass(e.target.value)} />
			</div>
			<span className="submit-btn" onClick={handleLoginClick} >Log in</span>
      <p>Create an account</p>
		</div>
	</div>}
</div>
    
    
  )
}

export default Loginsignup  