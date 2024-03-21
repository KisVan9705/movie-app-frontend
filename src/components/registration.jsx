import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Registration(props) {
  const apiUrl = "http://localhost:8080/user/signup";
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();
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
        localStorage.setItem("role", response.data.role);
        navigate("/");
        //we have to redirect the user to home page after successful registration
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="mycontainer">
      <h1>Create Your IMDb Account</h1>
      <form onSubmit={registerUser}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="username"
            id="name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="confirmedPassword"
            id="confirm-password"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <br />
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Registration;
