import React from "react";
import Navbar from "../components/navbar";
import Gallery from "../components/gallery";
import Slider from "../components/slider";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";


import TopTenMovies from "../components/topTenMovies";


function Home() {
  return (
    <>
      <MyNavbar></MyNavbar>
      {isAuthenticated ? (
        <div>
          {" "}
          <Slider></Slider>
          <TopTenMovies></TopTenMovies>
          {/* <Gallery></Gallery> */}
        </div>
      ) : (
        <div>Sign In please</div>
      )}
      <ImdbFooter></ImdbFooter>
    </>
  );
}

export default Home;
