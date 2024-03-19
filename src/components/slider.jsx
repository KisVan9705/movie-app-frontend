import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieSliderItem from "./MovieSliderItem"; 
import MovieList from "./MovieList"; 

const Slider = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const urlApi = "http://localhost:8080/search?country=USA&number=5";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urlApi);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleListItemClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ display: "flex" }}>
      <MovieSliderItem
        movie={data[currentIndex]}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
      <MovieList
        data={data}
        currentIndex={currentIndex}
        handleListItemClick={handleListItemClick}
      />
    </div>
  );
};

export default Slider;
