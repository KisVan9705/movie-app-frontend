import React from "react";
import Navbar from "../components/navbar";
import Gallery from "../components/gallery";
import Slider from "../components/slider";
import { isAuthenticated } from "../utils/authentication";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      {isAuthenticated ? <div> <Slider></Slider><Gallery></Gallery></div> : <div>Sign In please</div>}
    </>
  );
}

export default Home;
