import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MovieSearchItem } from "./MovieSearchItem";
import { Container, Nav } from "react-bootstrap";

function Search() {
  const [data, setData] = useState(null); // State to store fetched data
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // Get history object

  let searchText = searchParams.get("searchText");

  useEffect(() => {
    fetchData(searchText);
  }, [searchParams.get("searchText")]); // Empty dependency array [] means useEffect runs only once after mount

  const fetchData = async (searchText) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/movie/search?title=" + searchText
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setData(undefined);
      console.error("Error fetching data:", error);
      // Handle errors (optional: display error message to user)
    }
  };
  return (
    <>
      <MyNavbar></MyNavbar>
      {isAuthenticated() ? (
        <div className="search-Container">
          <h3>Search Results {searchText ? 'of "' + searchText + '"' : ""}</h3>
          <hr />
          {data ? (
            data.map((movie, index) => (
              <div className="inside-search-Container" key={index}>
                <Nav.Link href={"/movie/?title=" + movie.title}>
                  <MovieSearchItem
                    movie={movie}
                    index={index}
                  ></MovieSearchItem>
                </Nav.Link>
              </div>
            ))
          ) : (
            <p>No Data Available</p>
          )}
        </div>
      ) : (
        <div>Sign In please</div>
      )}
      <ImdbFooter></ImdbFooter>
    </>
  );
}

export default Search;
