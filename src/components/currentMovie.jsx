export const CurrentMovie = ({ movie, index, currentIndex }) => {
  return (
    <div key={index} className="currentMovie" style={{}}>
      <img src={movie.poster} alt="movies poster" width="130px" />
      <br />
      <p>
        ⭐️ <strong>{movie.imdbIDRating}</strong>
      </p>
      <h5>
        {currentIndex + index + 1}. {movie.title}
      </h5>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
    </div>
  );
};
