import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
    <Navbar/>
      <div id="home">
        <div className="container">
          <div className="row justify-content-center text-white p-5">
            <h1 className="text-center mt-5 font-h font-sizes">
              {" "}
              Department of Registration & Stamps
            </h1>
            <h3 className="text-center font-h">Government of India.</h3>
          </div>
          <div className="d-flex justify-content-center">
            <NavLink className="btn btn-light m-2" to="/calculetor">
              Stampduty & Registration Fees Calculator
            </NavLink>
            <NavLink className="btn btn-light m-2" to="/calculetor">
              Check SRO For Property Registration
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
