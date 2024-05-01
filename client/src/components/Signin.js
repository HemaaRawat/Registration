import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

// Connection to Database
const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    district: "",
    email: "",
    password: "",
    Cpassword: "",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  let name, value;
  const handleInputes = (e) => {
    // console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  /* connection to backend */
  const PostData = async (e) => {
    e.preventDefault();

    const { district, email, password, cpassword } = user;

    const res = await fetch("signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        district,
        email,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    localStorage.setItem("registration data", JSON.stringify(data));

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container shadow-lg my-5 font-h">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <img
              src="/Images/signup.png"
              alt="Signin"
              style={{ width: "90%" }}
            />
            <NavLink
              to="/login"
              className="pb-2 w-50 text-black text-center text-decoration-none"
              style={{ fontSize: "1.2rem" }}
            >
              I am already register
            </NavLink>
          </div>
          <div className="col-md-6 p-5 btn-hover">
            <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
            <fieldset disabled>
              <div className="mb-3">
                <label for="disabledText" className="form-label">
                  Document to be Registered
                </label>
                <input
                  type="text"
                  id="disabledText"
                  className="form-control fw-bold"
                  placeholder="Leave and Licenses(36A)"
                />
              </div>
            </fieldset>
            <form method="POST">
              <div className="mb-3">
                <label for="district" className="form-label">
                  Select District of Property
                </label>
                <select
                  name="district"
                  id="district"
                  onChange={handleInputes}
                  className="form-select fw-bold"
                >
                  <option>--select--</option>
                  <option value="Akola">Akola</option>
                  <option value={"Amaravati"}>Amaravati</option>
                  <option value={"Aurangabad"}>Aurangabad</option>
                  <option value={"Beed"}>Beed</option>
                  <option value={"Bhandara"}>Bhandara</option>
                  <option value={"Buldhana"}>Buldhana</option>
                  <option value={"Chandrapur"}>Chandrapur</option>
                  <option value={"Dhule"}>Dhule</option>
                  <option value={"Gadchiroli"}>Gadchiroli</option>
                  <option value={"Gondia"}>Gondia</option>
                  <option value={"Hingoli"}>Hingoli</option>
                  <option value={"Jalgaon"}>Jalgaon</option>
                  <option value={"Jalna"}>Jalna</option>
                  <option value={"Kolhapur"}>Kolhapur</option>
                  <option value={"Latur"}>Latur</option>
                  <option value={"Mumbai"}>Mumbai</option>
                  <option value={"Mumbai Sub-urban District"}>
                    Mumbai Sub-urban District
                  </option>
                  <option value={"Nagar"}>Nagar</option>
                  <option value={"Nagpur"}>Nagpur</option>
                  <option value={"Nanded"}>Nanded</option>
                  <option value={"Nandurbar"}>Nandurbar</option>
                  <option value={"Nashik"}>Nashik</option>
                  <option value={"Palghar"}>Palghar</option>
                  <option value={"Parbhani"}>Parbhani</option>
                  <option value={"Pune"}>Pune</option>
                  <option value={"Raigad"}>Raigad</option>
                  <option value={"Ratnagiri"}>Ratnagiri</option>
                  <option value={"Sangli"}>Sangli</option>
                  <option value={"Satara"}>Satara</option>
                  <option value={"Sindhudurga"}>Sindhudurga</option>
                  <option value={"Solapur"}>Solapur</option>
                  <option value={"Thane"}>Thane</option>
                  <option value={"Usmanabad"}>Usmanabad</option>
                  <option value={"Vardha"}>Vardha</option>
                  <option value={"Washim"}>Washim</option>
                  <option value={"Yavatmal"}>Yavatmal</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  autoComplete="off"
                  required="true"
                  value={user.email}
                  onChange={handleInputes}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Create Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  autoComplete="off"
                  required="true"
                  value={user.password}
                  onChange={handleInputes}
                />
              </div>
              <div className="mb-3">
                <label For="cpassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  className="form-control"
                  autoComplete="off"
                  required="true"
                  value={user.cpassword}
                  onChange={handleInputes}
                />{" "}
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="btn btn-primary ms-2 px-4 btn-hover"
                  value="Register"
                  onClick={PostData}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
