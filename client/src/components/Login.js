import React, { useState } from "react";
import { message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault(); //to stop default reload

    const res = await axios.post("/signin", {
      email,
      password,
    });
    localStorage.setItem("adminId", res.data._id);
    const isSuccess = res.data.message;
    console.log(isSuccess);
    if (isSuccess == "user Signin Successfully") {
      message.success("Login Successfull");
      navigate("/property");
    } else {
      message.error("Invalid Credentials");
    }
  };
  return (
    <>
      <Navbar />
      <div className="container shadow-lg my-5 font-h">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <img
              src="/Images/login.png"
              alt="Signin"
              style={{ width: "80%" }}
            />
            <NavLink
              to="/signin"
              className="pb-2 w-50 text-black text-center text-decoration-none"
              style={{ fontSize: "1.2rem" }}
            >
              Register a new
            </NavLink>
          </div>
          <div className="col-md-6 p-5 btn-hover">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form>
              <div class="mb-3">
                <label for="token" class="form-label">
                  Enter User ID
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  name="login"
                  id="login"
                  className="btn btn-primary ms-2 px-4 btn-hover"
                  value="Modify"
                  onClick={LoginUser}
                />
              </div>
              {/* <NavLink to="/" className="btn btn-primary ms-2 px-4">
                View Status
              </NavLink> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
