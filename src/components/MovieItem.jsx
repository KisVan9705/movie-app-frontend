export const MovieItem = ({
  movie,
  currentIndex,
  index,
  handleListItemClick,
}) => {
  return (
    <div
      className="movieItem"
      key={movie.id}
      style={{
        cursor: "pointer",
        fontWeight: currentIndex === index ? "bold" : "normal",
      }}
      onClick={() => handleListItemClick(index)}
    >
      <img src={movie.poster} alt=" movie poster" width="60px" />
      <span>{movie.title}</span>
    </div>
  );
};
