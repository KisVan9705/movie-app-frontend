import axios from "axios";
import { useState } from "react";

function Registration(props) {
  const apiUrl = "http://localhost:8080/signup";

  function renderLogin(params) {
    props.handleClick();
  }

  // Initialize state for form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Event handler to update form state when input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("handle Change called", formData);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send form data to the server
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log("Response data:", response.data);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className='container'>
      <h1>Create Your IMDb Account</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Username:</label>
          <input
            type='text'
            name='username'
            id='name'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input
            type='password'
            name='confirm-password'
            id='confirm-password'
            required
          />
        </div>
        <button type='submit'>Register</button>
        <br />
        <a onClick={renderLogin}>Login</a>
      </form>
    </div>
  );
}

export default Registration;
