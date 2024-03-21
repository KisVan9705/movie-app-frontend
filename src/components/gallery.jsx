import React, { useState, useEffect } from "react";
import axios from "axios";
import { isAuthenticated, signOut } from "../utils/authentication";

function Gallery() {
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/movie/search?country=USA"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors (optional: display error message to user)
      }
    };

    fetchData();
  }, [isAuthenticated]); // Empty dependency array [] means useEffect runs only once after mount

  return (
    <div>
      <h2>Gallery</h2>
      <p className='text-3xl font-bold underline'>Hello world!</p>
      <ul>
        {data ? (
          data.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.year}</p>
              <p>{item.rated}</p>
            </li>
          ))
        ) : (
          <div>Sign In Please</div>
        )}
      </ul>
    </div>
  );
}

export default Gallery;
