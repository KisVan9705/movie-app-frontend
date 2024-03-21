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
        <div>
          {" "}
          <Slider></Slider>
          <TopTenMovies
            genre={"Action"}
            title={"Top 10 on IMDb this week"}
            colorType={"yellow"}
          ></TopTenMovies>
          <TopTenMovies
            genre={"Drama"}
            title={"Top 10 Box Office Movies"}
            colorType={"green"}
          ></TopTenMovies>
          {/* <Gallery></Gallery> */}
        </div>
      ) : (
        <div>Sign In please</div>
      )}
      <ImdbFooter></ImdbFooter>
    </>
  );
}

export default ManageMovies;
