import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Errorpage = () => {
  return (
    <>
      <Navbar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>we are sorry, page not found!</h2>
          <p className="mb-5">
            the page you are looking for might have been removed has its name
            changed or is temporarily unavailable.
          </p>
          <NavLink to="/">Back to homepage</NavLink>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
