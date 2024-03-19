import React from "react";
import Navbar from "../components/navbar";
import Gallery from "../components/gallery";
import { isAuthenticated } from "../utils/authentication";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      {isAuthenticated ? <Gallery></Gallery> : <div>Sign In please</div>}
    </>
  );
}

export default Home;
