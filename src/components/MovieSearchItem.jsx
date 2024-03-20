export const MovieSearchItem = ({ movie, index }) => {
  return (
    <div
      className='movieSearchItem'
      key={movie.id}
      style={{
        cursor: "pointer",
      }}
    >
      <label>{index + 1} . </label>
      <img src={movie.poster} alt=' movie poster' width='90px' />
      <div>
        &nbsp;&nbsp;&nbsp;<span>{movie.title}</span>
        <br />
        &nbsp;&nbsp;&nbsp;<span>{movie.year}</span>
        <br />
        &nbsp;&nbsp;&nbsp;<span>{movie.rated}</span>
      </div>
    </div>
  );
};
