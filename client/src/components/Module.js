import React from "react";
import Navbar from "./Navbar";

const Module = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col md-6">
            <img src="/images/module.png" alt="Module" className="w-75 mt-5" />
          </div>
          <div className="col-md-6">
            <h1 className="display-6 mb-2">About Module</h1>
            <hr className="w-50" />
            <p className="lead mb-4">
              <p>Citizen can,</p>
              <ul>
                <li>Prepare the agreement</li>
                <li>View the draft</li>
                <li>Modify if required</li>
                <li>Execute (sign) it</li>
                <li> Submit it for registration</li>
                <li>Get it registered</li>
                <li> Get the status of registration through SMS</li>
              </ul>
            </p>
            <p className="lead mb-4">
              All these activities can be performed from anywhere anytime,
              without going physically to Sub Registrar Office.
            </p>
            <button className="btn btn-primary rounded-pill px-4 py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Module;
