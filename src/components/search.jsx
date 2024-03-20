import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { MovieSearchItem } from "./MovieSearchItem";
import { Container } from "react-bootstrap";

function Search() {
  const [data, setData] = useState(null); // State to store fetched data
  const [searchParams] = useSearchParams();

  let searchText = searchParams.get("searchText");

  useEffect(() => {
    fetchData(searchText);
  }, [searchParams.get("searchText")]); // Empty dependency array [] means useEffect runs only once after mount

  const fetchData = async (searchText) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/search?title=" + searchText
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
        <div className='search-Container'>
          {data ? (
            data.map((movie, index) => (
              <div className='inside-search-Container' key={index}>
                <MovieSearchItem movie={movie} index={index}></MovieSearchItem>
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
