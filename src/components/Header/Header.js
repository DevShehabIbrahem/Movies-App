import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchacynkmovies,
  fetchacynkseries,
} from "../../featuresRedux/Movies/movieslice";
import user from "../../images/470-4703547_icon-user-icon-hd-png-download.png";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  console.log(term);
  const dispatch = useDispatch();
  const handlesea = (e) => {
    e.preventDefault();
    dispatch(fetchacynkmovies(term));
    dispatch(fetchacynkseries(term));
    setTerm("");
  };
  return (
    <div>
      <div className="header">
        <Link to="/Movies-App/">
          <div className="Logo">Movie App</div>
        </Link>
        <div className="search-bar">
          <form onSubmit={handlesea}>
            <input
              type="text"
              onChange={(e) => {
                setTerm(e.target.value);
              }}
              value={term}
            />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="user-image">
          <img src={user} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
