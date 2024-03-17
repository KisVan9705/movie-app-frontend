import React from "react";

function Registration(props) {
  function renderLogin(params) {
    props.handleClick();
  }
  return (
    <div className='container'>
      <h1>Create Your IMDb Account</h1>
      <form action='#' method='post'>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' id='password' required />
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
