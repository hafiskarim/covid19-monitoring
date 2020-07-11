import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar__wrapper">
        <div className="navbar__wrapper-flex">
          <div className="navbar__wrapper-flex-item">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar__wrapper-flex-item">
            <Link to="/cases-country">Cases by Country</Link>
          </div>
          <div className="navbar__wrapper-flex-item">
            <Link to="/form-rapidtest">Form Rapid Test</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
