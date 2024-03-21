import React, { useState, useEffect } from "react";
import axios from "axios";
import { CurrentMovie } from "./currentMovie";

const TopTenMovies = ({ genre, title, colorType }) => {
  const uriApi = "http://localhost:8080/movie/search?genre=" + genre + "&number=10";
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalVisible = 7;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(uriApi);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [uriApi]);

  const handleBackClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? movies.length - 1 : prevIndex - 1
      );
    }
  };

  const handleForwardClick = () => {
    if (totalVisible - currentIndex > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const visibleMovies = movies.slice(currentIndex, currentIndex + totalVisible);

  return (
    <div className="mainMovieContainer">
      <hr className="separator" />
      <h2 className={colorType}>{title}</h2>
      <div className="topTenMoviesContainer">
        <button
          onClick={handleBackClick}
          id="left-arrow"
          style={{
            visibility: currentIndex > 0 ? "visible" : "hidden",
          }}
        >
          &#60;
        </button>

        <div className="moviesWrapper">
          {visibleMovies.map((movie, index) => (
            <CurrentMovie
              movie={movie}
              index={index}
              currentIndex={currentIndex}
            ></CurrentMovie>
          ))}
        </div>

        <button
          onClick={handleForwardClick}
          id="right-arrow"
          style={{
            visibility:
              currentIndex < movies.length - totalVisible
                ? "visible"
                : "hidden",
          }}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default TopTenMovies;
