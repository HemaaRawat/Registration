import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Insidenavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg font-nav p-3 nav-border">
        <div className="container-fluid">
          <NavLink className="brand" to="#">
            <img src="/images/logo.png" alt="logo" style={{ width: "160px" }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/property">
                  Property Details
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink className="nav-link" to="/chooseparty">
                  Party Details
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink className="nav-link" to="/rent">
                  Rent & Other Terms
                </NavLink>
              </li>{" "}
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/power">
                  Power
                </NavLink>
              </li>{" "} */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  LogOut
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Insidenavbar;
