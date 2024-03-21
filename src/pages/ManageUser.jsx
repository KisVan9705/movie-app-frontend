import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";
import axios from "axios";

function ManageUsers() {
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array [] means useEffect runs only once after mount

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/user/users");
      setData(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      setData(undefined);
      console.error("Error fetching data:", error);
      // Handle errors (optional: display error message to user)
    }
  };
  return (
    <>
      <MyNavbar></MyNavbar>
      {isAuthenticated ? (
        <div className="dashboardContainer">
          <p>Users</p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}. </th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <select name="role" id="role">
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                      </select>
                    </td>
                    <td>
                      <button type="button" class="btn btn-success">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button type="button" class="btn btn-danger">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Sign In please</div>
      )}
      <ImdbFooter></ImdbFooter>
    </>
  );
}

export default ManageUsers;
