import React from "react";
import Gallery from "../components/gallery";
import Slider from "../components/slider";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";

import TopTenMovies from "../components/topTenMovies";

function ManageUsers() {
  return (
    <>
      <MyNavbar></MyNavbar>
      {isAuthenticated ? (
        <div className="dashboardContainer">
          <p>Users</p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Article Name</th>
                <th scope="col">Author</th>
                <th scope="col">Shares</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bootstrap 4 CDN and Starter Template</td>
                <td>Cristina</td>
                <td>2.846</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    <i class="far fa-eye"></i>
                  </button>
                  <button type="button" class="btn btn-success">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button type="button" class="btn btn-danger">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Bootstrap Grid 4 Tutorial and Examples</td>
                <td>Cristina</td>
                <td>3.417</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    <i class="far fa-eye"></i>
                  </button>
                  <button type="button" class="btn btn-success">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button type="button" class="btn btn-danger">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bootstrap Flexbox Tutorial and Examples</td>
                <td>Cristina</td>
                <td>1.234</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    <i class="far fa-eye"></i>
                  </button>
                  <button type="button" class="btn btn-success">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button type="button" class="btn btn-danger">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
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
