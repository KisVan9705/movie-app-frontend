import React from "react";
import Gallery from "../components/gallery";
import Slider from "../components/slider";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";

import TopTenMovies from "../components/topTenMovies";

function ManageMovies() {
  const [data, setData] = useState(null); // State to store fetched data
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array [] means useEffect runs only once after mount

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/movie/search");
      setData(response.data.movies);
      console.log(response.data.movies);
    } catch (error) {
      setData(undefined);
      console.error("Error fetching data:", error);
      // Handle errors (optional: display error message to user)
    }
  };

  return (
    <>
      <MyNavbar></MyNavbar>
      {isAuthenticated ? (
        <div className="dashboardContainer">
          <p>Users</p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Rating</th>
                <th scope="col">Director</th>
                <th scope="col">Language</th>
                <th scope="col">Country</th>
                <th scope="col">Actors</th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((movie, index) => (
                  <tr>
                    <th scope="row">{index + 1}. </th>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.year}</td>
                    <td>{movie.imdbID}</td>
                    <td>{movie.director}</td>
                    <td>{movie.language}</td>
                    <td>{movie.country}</td>
                    <td>{movie.actors}</td>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Sign In please</div>
      )}
      <ImdbFooter></ImdbFooter>
    </>
  );
}

export default ManageMovies;
