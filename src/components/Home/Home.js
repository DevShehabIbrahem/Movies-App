import React, { useEffect } from "react";
import Movelits from "../MovisListing/MovisListing";
import { useDispatch } from "react-redux";
import {
  fetchacynkmovies,
  fetchacynkseries,
} from "../../featuresRedux/Movies/movieslice";
const Home = () => {
  const movies = "Harry potter";
  const seres = "spider man";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchacynkmovies(movies));
    dispatch(fetchacynkseries(seres));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <Movelits />
    </div>
  );
};

export default Home;
