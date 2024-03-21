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
                <iframe
                  width="700px"
                  height="500px"
                  src={data.trailer}
                ></iframe>
              </div>
              <div className="singleMovieRight">
                <p>
                  <b>Year :</b> {data.year}
                </p>
                <p>
                  <b> Released Date :</b>
                  {data.releasedDated}
                </p>
                <p>
                  <b>RunTime :</b> {data.runtime}{" "}
                </p>
                <p>
                  <b>Director :</b> {data.director}
                </p>
                <p>
                  <b>Award :</b> {data.award}
                </p>
                <p>
                  <b>Director :</b> {data.director}
                </p>
                <p>
                  <b>Actors :</b> {data.actors}
                </p>
                <p>
                  <b>Genre :</b> {data.genre}
                </p>
                <p>
                  <b>Country :</b> {data.country}
                </p>
                <p>
                  <b>Languages :</b>
                  {data.language}
                </p>
                <p>
                  <b>Rating :</b> {data.imdbIDRating}
                </p>
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
