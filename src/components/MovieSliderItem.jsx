import React from "react";
import { Nav } from "react-bootstrap";

const MovieSliderItem = ({ movie, handlePrevClick, handleNextClick }) => {
  return movie ? (
    <div className="movieContainer">
      <button id="leftArrow" onClick={handlePrevClick}>{"<"}</button>

     
      <div
        className=""
        style={{
          backgroundImage: `url(${movie.poster})`,
          backgroundSize: "cover",
          width: "100%",
    
        }}
      >
 <Nav.Link href={"/movie/?title=" + movie.title}>

 <div className="movieContent">
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
          </div>
        </div>
 </Nav.Link>
       
      </div>
     
      <button id="rightArrow" onClick={handleNextClick}>{">"}</button>
    </div>
  ) : (
    <p>No movie found</p>
  );
};

export default MovieSliderItem;
