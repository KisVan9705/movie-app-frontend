import axios from "axios";

function Registration(props) {
  const apiUrl = "http://localhost:8080/signup";

  function renderLogin(params) {
    props.handleClick();
  }
  const registerUser = (event) => {
    event.preventDefault();
    /**
     * event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    const postData = {
      username: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(postData);
     */
    const postData = {
      username: "henok3535",
      email: "kishor435@yahoo.com",
      password: "kishoryysy",
    };
    console.log(postData);

    axios
      .post(apiUrl, postData)
      .then((response) => {
        // Handle successful response
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error.message);
      });
  };
  return (
    <div className="container">
      <h1>Create Your IMDb Account</h1>
      <form onSubmit={registerUser}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            required
          />
        </div>
        <button type="submit">Register</button>
        <br />
        <a onClick={renderLogin}>Login</a>
      </form>
    </div>
  );
}

export default Registration;
