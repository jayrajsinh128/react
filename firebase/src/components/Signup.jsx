import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/Firebase';
import { useNavigate, Link } from 'react-router-dom';  // Import Link from react-router-dom
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';  // Importing CSS file

function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const UserCollection = collection(db, "users");
  const [d, setD] = useState([]);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let a = d.filter((el) => el.email === email);

    let obj = {
      email,
      pass
    };

    if (a.length > 0) {
      toast.error("User already registered");
    } else {
      await addDoc(UserCollection, obj);
      toast.success("User Signup Successfully");

      // Adding a delay before navigating to home
      setTimeout(() => {
        navigate("/");
      }, 1500);  // Delay of 1.5 seconds to allow the toast to be visible
    }
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <div className="button-box">
          <Link to="/" className="toggle-btn">Login</Link>
          <Link to="/signup" className="toggle-btn active">Signup</Link>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Email Address" 
            onChange={(e) => setEmail(e.target.value)} 
            className="input-field"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPass(e.target.value)} 
            className="input-field"
            required
          />
          <input type="submit" value="Signup" className="submit-btn" />
          <p className="redirect-text">
            Already have an account? <Link to="/" className="login-link">Login</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
