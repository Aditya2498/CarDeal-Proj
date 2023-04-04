import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="in">
          <NavLink to="/">
            <div className="logo">
              <img
                src="https://beta.getcardealstoday.com/static/media/inverse-logo.6607e9c7.svg"
                alt="logo"
                className="img-responsive"
              />
            </div>
          </NavLink>
          <ul className="steps">
            <li>01</li>
            <li>02</li>
            <li>03</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
