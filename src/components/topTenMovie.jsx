import React, { useState, useEffect } from "react";
import axios from "axios";

const TopTenMovie = () => {
  const uriApi = "http://localhost:8080/search?country=USA&number=10";
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleForwardClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleMovies = movies.slice(currentIndex, currentIndex + 5);

  return (
    <div className="mainMovieContainer">
      <h2 style={{ "margin-left": "35px", "border-left": "5px solid yellow" }}>
        Top 10 on IMDb this week
      </h2>
      <div className="topTenMoviesContainer">
        <button onClick={handleBackClick} id="left-arrow">
          &#60;
        </button>
        <div className="moviesWrapper">
          {visibleMovies.map((movie, index) => (
            <div key={index} className="currentMovie">
              <img src={movie.poster} alt="movies poster" />
              <br />
              <p>
                ⭐️ <strong>{movie.imdbIDRating}</strong>
              </p>
              <h3>
                {currentIndex + index + 1}. {movie.title}
              </h3>
              <p>
                <strong>Genre:</strong> {movie.genre}
              </p>
            </div>
          ))}
        </div>
        <button onClick={handleForwardClick} id="right-arrow">
          &#62;
        </button>
      </div>
    </div>
  );
};

export default TopTenMovie;
