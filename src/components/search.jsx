import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../utils/authentication";
import MyNavbar from "../components/navbar";
import ImdbFooter from "../components/footer";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [data, setData] = useState(null); // State to store fetched data
  const [searchParams] = useSearchParams();

  const searchText = searchParams.get("searchText");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/search?title=" + searchText
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors (optional: display error message to user)
      }
    };

    fetchData();
  }, []); // Empty dependency array [] means useEffect runs only once after mount

  return (
    <>
      <MyNavbar></MyNavbar>
      {isAuthenticated() ? (
        <div className='mycontainer'>
          {data ? (
            data.map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.year}</p>
                <p>{item.rated}</p>
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
