import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./MovieDitils.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetilsApi,
  getSelectedMovieOrShow,
  removefunction,
} from "../../featuresRedux/Movies/movieslice";

const MovieDEtail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchDetilsApi(imdbID));
    return () => {
      dispatch(removefunction({}));
    };
  }, [dispatch, imdbID]);
  console.log(data);

  return (
    <div className="detils-wrap">
      {Object.keys(data).length === 0 ? (
        <div> LoDing ...</div>
      ) : (
        <>
          <div className="detils-info-left">
            <div className="movie-title">
              <h2>{data.Title}</h2>
            </div>
            <div className="movie-star">
              <span>
                IMDB Rating: <i className="fa fa-star"></i>:{data.imdbRating}
              </span>
              <span>
                IMDB Votes: <i className="fa fa-thumbs-up"></i>:{data.imdbVotes}
              </span>
              <span>
                Runtime: <i className="fa fa-file"></i>:{data.Runtime}
              </span>
              <span>
                Year: <i className="fa fa-calendar"></i>:{data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-bottom">
              <div>
                <span>Director:</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars:</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre:</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Language:</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards:</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="movie-right">
            <img src={data.Poster} alt="Harry" />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDEtail;
