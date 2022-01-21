import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import { useSelector } from "react-redux";
import MoveCard from "../MoveCard/MoveCard";
import "./show.scss";
import { showmovies } from "../../featuresRedux/Movies/movieslice";
function Show() {
  const show = useSelector(showmovies);

  let rendershow = "";
  rendershow =
    show.Response === "True" ? (
      show.Search.map((movie, index) => <MoveCard data={movie} key={index} />)
    ) : (
      <div>{show.Error}</div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movies-container">
          <Slider {...Settings}>{rendershow}</Slider>
        </div>
      </div>
    </div>
  );
}

export default Show;
