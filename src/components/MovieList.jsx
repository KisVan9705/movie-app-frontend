import React from "react";
import { MovieItem } from "./MovieItem";
const MovieList = ({ data, currentIndex, handleListItemClick }) => {
  return (
    <div>
      <h3>Up next</h3>
      <ul>
        {data.map((movie, index) => (
          <MovieItem
            movie={movie}
            currentIndex={currentIndex}
            index={index}
            handleListItemClick={handleListItemClick}
          ></MovieItem>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
