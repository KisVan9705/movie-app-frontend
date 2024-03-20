import React from "react";
import Gallery from "../components/gallery";
import Slider from "../components/slider";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";
import TopTenMovie from "../components/topTenMovie";

function Home() {
  return (
    <>
      <MyNavbar></MyNavbar>
      {isAuthenticated ? (
        <div>
          {" "}
          <Slider></Slider>
          <TopTenMovie></TopTenMovie>
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
