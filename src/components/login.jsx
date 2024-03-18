import { useState } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";
import { navigateIfAuthenticated } from "../utils/authentication";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const apiUrl = "http://localhost:8080/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    const postData = {
      email: email,
      password: password,
    };
    // Make POST request to login API
    axios
      .post(apiUrl, postData)
      .then((response) => {
        // Handle successful login response
        console.log("Login successful");
        localStorage.setItem("token", response.data.token);

        navigate("/");

        console.log("Response data:", response.data);
        // TODO: Handle successful login (e.g., store token in local storage)
      })
      .catch((error) => {
        // Handle login error
        console.error("Login error:", error.message);
      });
  };

  return (
    <div className='container'>
      <h1>Welcome Back to IMDb</h1>
      <form onSubmit={loginUser}>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Your password'
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <Link to='/registration'>Not registered yet?</Link>
    </div>
  );
}

export default Login;
