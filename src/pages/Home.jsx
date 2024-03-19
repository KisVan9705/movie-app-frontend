import React from "react";
import Navbar from "../components/navbar";
import Gallery from "../components/gallery";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";

function Home() {
  return (
    <>
      <MyNavbar></MyNavbar>
      {isAuthenticated ? <Gallery></Gallery> : <div>Sign In please</div>}
      <ImdbFooter></ImdbFooter>
    </>
  );
}

export default Home;
