import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import Show from "../Show/Show";
import { useSelector } from "react-redux";
import { getallmovies } from "../../featuresRedux/Movies/movieslice";
import MoveCard from "../MoveCard/MoveCard";
import "./MovisListing.scss";

const Movislisting = () => {
  const movies = useSelector(getallmovies); // api moves

  let rendermovies = "";
  rendermovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => <MoveCard key={index} data={movie} />)
    ) : (
      <div className="movise-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movies-container">
          <Slider {...Settings}>{rendermovies}</Slider>
        </div>
      </div>
      <Show />
    </div>
  );
};

export default Movislisting;
