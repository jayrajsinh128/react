import React, { useState } from 'react'

// import React, { useState } from 'react';

const Logsign = () => {
  const [obj, setObj] = useState({
    email: "",
    password: "",
    username: ""
  });
  const [arr, setArr] = useState([]);
  const [viewPass, setViewPass] = useState(false);
  const [state, setState] = useState("Login");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj({ ...obj, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,12}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    let formErrors = {};
    if (state === "Signup" && obj.username.trim() === "") {
      formErrors.username = "Username is required";
    }
    if (!validateEmail(obj.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!validatePassword(obj.password)) {
      formErrors.password = "Password must be 8-12 characters, include uppercase, lowercase, a number, and a special character";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setArr([...arr, obj]);
      setObj({
        email: "",
        password: "",
        username: ""
      });
      setErrors({});
      alert(state === "Login" ? "Logged in successfully!" : "Account created successfully!");
    }
  };

  return (
    <div>
      {state === "Login" ? (
        <div className="ring">
          <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className='frm'>
              <div className="inputBx">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={obj.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="inputBx">
                <input
                  type={viewPass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={obj.password}
                  onChange={handleChange}/>
                {errors.password && <p className="error">{errors.password}</p>}
                <span onClick={() => setViewPass(!viewPass)} className="material-symbols-outlined eye1"  > {viewPass ? "visibility_off" : "visibility"}  </span>
              </div>
              <div className="inputBx">
                <input type="submit" value="Sign in" />
              </div>
              <div className="links">
                <a href="#">Forgot Password?</a>
                <a onClick={() => setState("Signup")}>Signup</a>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <div className="input-field">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={obj.username}
                onChange={handleChange}
                required
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={obj.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-field">
              <input
                type={viewPass ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={obj.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <span
                onClick={() => setViewPass(!viewPass)}
                className="material-symbols-outlined"
              >
                {viewPass ? "visibility_off" : "visibility"}
              </span>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
            </div>
            <button type="submit">Create Account</button>
            <div className="register" onClick={() => setState("Login")}>
              <p>Already have an account? <a>Login</a></p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Logsign;
