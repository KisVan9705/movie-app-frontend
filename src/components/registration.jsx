import { useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 489e3c2c7a4421c60c7bf5cf8ab4b4e973d1bd1a

function Registration(props) {
  const apiUrl = "http://localhost:8080/signup";
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const navigate = useNavigate();

<<<<<<< HEAD
  const registerUser = (event) => {
    event.preventDefault();
=======
  function renderLogin(params) {
    props.handleClick();
  }
  const registerUser = (event) => {
    event.preventDefault();

>>>>>>> 489e3c2c7a4421c60c7bf5cf8ab4b4e973d1bd1a
    const postData = {
      username: username,
      email: email,
      password: password,
      confirmedPassword: confirmedPassword,
    };
    console.log(postData);
    // Send form data to the server
    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log("Response data:", response.data);
        localStorage.setItem("token", response.data.token);
<<<<<<< HEAD
        navigate("/");
=======
>>>>>>> 489e3c2c7a4421c60c7bf5cf8ab4b4e973d1bd1a
        //we have to redirect the user to home page after successful registration
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
<<<<<<< HEAD
=======
  // Initialize state for form inputs

  // Event handler to update form state when input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("handle Change called", formData);
  };
>>>>>>> 489e3c2c7a4421c60c7bf5cf8ab4b4e973d1bd1a

  return (
    <div className="container">
      <h1>Create Your IMDb Account</h1>
      <form onSubmit={registerUser}>
<<<<<<< HEAD
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='username'
            id='name'
=======
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="username"
            id="name"
>>>>>>> 489e3c2c7a4421c60c7bf5cf8ab4b4e973d1bd1a
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
<<<<<<< HEAD
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
=======
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
>>>>>>> 489e3c2c7a4421c60c7bf5cf8ab4b4e973d1bd1a
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
<<<<<<< HEAD
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
=======
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
>>>>>>> 489e3c2c7a4421c60c7bf5cf8ab4b4e973d1bd1a
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
<<<<<<< HEAD
        <div className='form-group'>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input
            type='password'
            name='confirmedPassword'
            id='confirm-password'
=======
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="confirmedPassword"
            id="confirm-password"
>>>>>>> 489e3c2c7a4421c60c7bf5cf8ab4b4e973d1bd1a
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            required
          />
        </div>
<<<<<<< HEAD
        <button type='submit'>Register</button>
=======
        <button type="submit">Register</button>
>>>>>>> 489e3c2c7a4421c60c7bf5cf8ab4b4e973d1bd1a
        <br />
        <Link to='/login'>Login</Link>
      </form>
    </div>
  );
}

export default Registration;
