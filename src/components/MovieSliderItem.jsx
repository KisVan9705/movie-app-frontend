import React from "react";

const MovieSliderItem = ({ movie, handlePrevClick, handleNextClick }) => {
  return movie ? (
    <div className="movieContainer">
      <button onClick={handlePrevClick}>{"<"}</button>
      <div
        className=""
        style={{
          backgroundImage: `url(${movie.poster})`,
          backgroundSize: "cover",
          width: "100%",
    
        }}
      >
        <div className="movieContent">
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
          </div>
        </div>
      </div>
      <button onClick={handleNextClick}>{">"}</button>
    </div>
  ) : (
    <p>No movie found</p>
  );
};

export default MovieSliderItem;
