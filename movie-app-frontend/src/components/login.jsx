import React from "react";

function Login(props) {
  function renderRegistration() {
    props.handleClick();
  }
  return (
    <div className='container'>
      <h1>Welcome Back to IMDb</h1>
      <form action='#' method='post'>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' id='password' required />
        </div>
        <button type='submit'>Login</button>
      </form>
      <a onClick={renderRegistration}>Not registered yet? </a>
    </div>
  );
}

export default Login;
