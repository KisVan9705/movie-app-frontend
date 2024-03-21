import React from "react";
import Gallery from "../components/gallery";
import Slider from "../components/slider";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";

import TopTenMovies from "../components/topTenMovies";

function ManageMovies() {
  return (
    <>
      <MyNavbar></MyNavbar>
      {isAuthenticated ? (
        <div>do the same logic as users</div>
      ) : (
        <div>Sign In please</div>
      )}
      <ImdbFooter></ImdbFooter>
    </>
  );
}

export default ManageMovies;
