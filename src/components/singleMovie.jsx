import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "./navbar";
import ImdbFooter from "./footer";

export const SingleMovie = () => {
  const [data, setData] = useState(null); // State to store fetched data
  const [searchParams] = useSearchParams();

  let title = searchParams.get("title");

  useEffect(() => {
    fetchData(title);
  }, [searchParams.get(title)]); // Empty dependency array [] means useEffect runs only once after mount

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/singleMovie?title=" + title
      );
      setData(response.data[0]);
      console.log(response.data[0]);
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
        <div>
          {data ? (
            <div className="singleMovie">
              <div className="singleMovieLeft">
              <h2>{data.title}</h2>
              <iframe  width="700px" height="500px"  src={data.trailer}></iframe>
             
              </div>
              <div className="singleMovieRight">

             
                 
              <p>Year : {data.year}</p>
                <p>Released Date :{data.releasedDated}</p>
                <p>RunTime : {data.runtime} </p>
                <p>Director : {data.director}</p>
                <p>Award : {data.award}</p>
                <p>Director : {data.director}</p>
                <p>Actors : {data.actors}</p>
                <p>Genre : {data.genre}</p>
                <p>Country : {data.country}</p>
                <p>Languages :{data.language}</p>
                <p>Rating : {data.imdbIDRating}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>Sign In please</div>
      )}
      <ImdbFooter></ImdbFooter>
    </>
  );
};
