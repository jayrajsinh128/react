import React, { useEffect, useState } from 'react';
import { db } from '../firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';  // Reusing the Signup CSS
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [d, setD] = useState([]);
  const UserCollection = collection(db, "users");

  useEffect(() => {
    async function getData() {
      let data = await getDocs(UserCollection);
      let val = data.docs.map((el) => {
        return { id: el.id, ...el.data() };
      });
      setD(val);
    }
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = d.filter((el) => el.email === email && el.pass === pass);

    if (a.length > 0) {
      toast.success("Login Successful");
    } else {
      toast.error("Login Unsuccessful");
    }
  };

  return (
    <div className="signup-container">  {/* Reusing the signup-container class */}
      <div className="form-box">  {/* Adding the form-box for the button box */}
        <div className="button-box">
          <button className="toggle-btn active">Login</button>  {/* Active button */}
          <Link to="/signup" className="toggle-btn">Signup</Link>  {/* Inactive button */}
        </div>
        <form className="signup-form" onSubmit={handleSubmit}> {/* Reusing signup-form class */}
          <input 
            type="text" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input-field"
          />
          <input 
            type="password" 
            placeholder="Enter password" 
            value={pass} 
            onChange={(e) => setPass(e.target.value)} 
            className="input-field" 
          />
          <input type="submit" value="Login" className="submit-btn" />  {/* Reusing submit-btn class */}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
