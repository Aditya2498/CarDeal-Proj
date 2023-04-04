import React from "react";
import { Link } from "react-router-dom";
import waganor from "../assets/waganor.jfif";
import Navbar from "../components/Navbar";
import tatasafari from "../assets/tatasafari.webp";
import hondacity from "../assets/hondacity.webp";


const PreSelectPage = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="mainscreen">
          <div className="container">
            <div className="cars-list">
              <Link to="/finalPage?model=Encore%20GX&make=Buick&year=2023">
                <figure>
                <img
                  alt="car1"
                  src={hondacity}
                  height="300px"
                  className="mainscreen_content_img img-responsive"
                />
                </figure>
              </Link>
              <Link to="/finalPage?model=Encore%20GX&make=Buick&year=2023">
                <figure>
                <img
                  alt="car2"
                  src={waganor}
                  height="300px"
                  className="mainscreen_content_img img-responsive"
                />
                </figure>
              </Link>
              <Link to="/finalPage?model=Encore%20GX&make=Buick&year=2023">
                <figure>
                <img
                  alt="car3"
                  src={tatasafari}
                  height="300px"
                  className="mainscreen_content_img img-responsive"
                />
                </figure>
              </Link>
            </div>
            <div className="mainscreen_text">
              <Link to="/landing">Proceed further without Model select</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreSelectPage;
