import React, { useState, useEffect } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import axios, { all } from "axios";

const Identifier = () => {
  const [allIdentifier, setAllProperty] = useState([]);

  const fetchAllUser = async () => {
    let allUser = await axios.post("/fetchAllUser", {
      adminId: localStorage.getItem("adminId"),
    });
    setAllProperty(allUser.data.allUser);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    whichparty: "",
    Fname: "",
    mname: "",
    Lname: "",
    pannumber: "",
    contnumber: "",
    email: "",
    age: "",
    gender: "",
    buildgname: "",
    flatno: "",
    road: "",
    location: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  });
  const [isClicked, setIsClicked] = useState(false);

  const [userslist, setUserList] = useState([]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  let name, value;
  const handleInputes = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handlePartyEdit = async (e) => {
    console.log(e.target.value);
    let response = await axios.post("/fetchIdentifier", {
      _id: e.target.value,
    });
    setUser(response.data[0]);
    setIsClicked(true);
  };

  const handleEdit = async (e) => {
    const id = e.target.id;
    if (id == "edit") {
      let localDataId = JSON.parse(localStorage.getItem("user"))._id;
      let response = await axios.post("/fetchIdentifier", {
        id: localDataId,
      });
      setUser(response.data[0]);
      setIsClicked(true);
    } else if (id == "update") {
      let localDataId = JSON.parse(localStorage.getItem("user"))._id;
      const updateData = await axios.patch("/updateIdentifier", {
        id: localDataId,
        updatedData: user,
      });
      setUser({
        whichparty: "",
        Fname: "",
        mname: "",
        Lname: "",
        pannumber: "",
        contnumber: "",
        email: "",
        age: "",
        gender: "",
        buildgname: "",
        flatno: "",
        road: "",
        location: "",
        city: "",
        district: "",
        state: "",
        pincode: "",
      });
      setIsClicked(false);
    }
  };

  const PostData = async (values) => {
    try {
      const response = await axios.post("/indetifier", {
        ...user,
        adminId: localStorage.getItem("adminId"),
      });
      console.log(response.data);

      localStorage.setItem("user", JSON.stringify({ ...response.data }));

      // await axios.post("/api/users/property", values);
      //console.log("Data Saved Successfuly");
      message.success("Data Saved Successfuly");
      //navigate("/partydetails");
    } catch (error) {
      console.log("Data Not Saved");
      // message.error("");
    }
  };
  return (
    <>
      <div className="container mt-5">
        {/* <label for="validationCustom01" class="form-label display-7 d-block">
          <b>Party Details</b>
        </label> */}
        <div className="row g-3">
          <div class="col-md-6 mt-2">
            <label for="validationCustom01" class="fw-bold">
              Choose Identifier
            </label>
            <div class="form-check form-check-inline col-auto">
              <select
                class="form-select"
                id="selectnumber"
                name="selectnumber"
                onChange={handlePartyEdit}
              >
                <option>Choose....</option>
                {allIdentifier.map((prop) => {
                  return (
                    <option value={prop._id}>
                      {`${prop.Fname} ${prop.Lname}`}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-3 mt-4">
          <label for="whichparty" class="form-label">
            For Which Party
          </label>
          <select
            name="whichparty"
            id="whichparty"
            onChange={handleInputes}
            className="form-select fw-bold"
          >
            <option value="">Choose...</option>
            {allIdentifier.map((prop) => {
              return (
                <option value={prop._id}>
                  {`${prop.Fname} ${prop.Lname}`}
                </option>
              );
            })}

            <option value="All Party">All Party</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>{" "}
        <form class="row g-3 mt-2">
          <div class="col-md-4">
            <label for="Fname" class="form-label">
              First Name
            </label>

            <input
              type="text"
              name="Fname"
              id="Fname"
              className="form-control"
              required="true"
              value={user.Fname}
              onChange={handleInputes}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="mname" class="form-label">
              Middle Name
            </label>
            <input
              type="text"
              name="mname"
              id="mname"
              className="form-control"
              required="true"
              value={user.mname}
              onChange={handleInputes}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="Lname" class="form-label">
              Last Name
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                name="Lname"
                id="Lname"
                className="form-control"
                required="true"
                value={user.Lname}
                onChange={handleInputes}
              />
              <div class="invalid-feedback">Looks good!</div>
            </div>
          </div>{" "}
          <div class="col-md-4">
            <label for="pannumber" class="form-label">
              Pan Number
            </label>

            <input
              type="text"
              name="pannumber"
              id="pannumber"
              className="form-control"
              required="true"
              value={user.pannumber}
              onChange={handleInputes}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="contnumber" class="form-label">
              Contact Number
            </label>
            <input
              type="text"
              name="contnumber"
              id="contnumber"
              className="form-control"
              required="true"
              value={user.contnumber}
              onChange={handleInputes}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="email" class="form-label">
              Email
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                required="true"
                value={user.email}
                onChange={handleInputes}
              />
              <div class="invalid-feedback">Looks good!</div>
            </div>
          </div>{" "}
          <div className="g-3 mt-2">
            <div className="col-md-3 form-check-inline">
              <label for="age" class="form-label">
                Age
              </label>

              <input
                type="text"
                name="age"
                id="age"
                className="form-control"
                required="true"
                value={user.age}
                onChange={handleInputes}
              />
            </div>
            <label class="form-check-label ml-raido me-2" for="gender">
              <b>Gender</b>
            </label>
            <div class="form-check form-check-inline mt-3">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                required="true"
                checked={user.gender == "male" ? true : false}
                onChange={handleInputes}
              />
              <label class="form-check-label" for="gender">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={user.gender == "female" ? true : false}
                required="true"
                onChange={handleInputes}
              />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
          </div>
          <label for="address" class="form-label display-7 mt-5">
            <b>Address</b>
          </label>
          <div class="col-md-4">
            <label for="buildgname" class="form-label">
              Building Name
            </label>

            <input
              type="text"
              name="buildgname"
              id="buildgname"
              className="form-control"
              required="true"
              value={user.buildgname}
              onChange={handleInputes}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="flatno" class="form-label">
              Flat No. / Floor No.
            </label>
            <input
              type="text"
              name="flatno"
              id="flatno"
              className="form-control"
              required="true"
              value={user.flatno}
              onChange={handleInputes}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="road" class="form-label">
              Road
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                name="road"
                id="road"
                className="form-control"
                required="true"
                value={user.road}
                onChange={handleInputes}
              />
              <div class="invalid-feedback">Looks good!</div>
            </div>
          </div>{" "}
          <div class="col-md-4">
            <label for="location" class="form-label">
              Location
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                name="location"
                id="location"
                className="form-control"
                required="true"
                value={user.location}
                onChange={handleInputes}
              />
              <div class="invalid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="col-md-3">
            <label for="city" class="form-label">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="form-control"
              required="true"
              value={user.city}
              onChange={handleInputes}
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>{" "}
          <div class="col-md-3">
            <label for="district" class="form-label">
              District
            </label>
            <input
              type="text"
              name="district"
              id="district"
              className="form-control"
              required="true"
              value={user.district}
              onChange={handleInputes}
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div class="col-md-2">
            <label for="state" class="form-label">
              State
            </label>
            <select
              name="state"
              id="state"
              onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value="">Choose...</option>
              <option
                selected={user.state == "Maharashtra"}
                value={"Maharashtra"}
              >
                Maharashtra
              </option>
              <option selected={user.state == "UP"} value={"UP"}>
                UP
              </option>
              <option selected={user.state == "MP"} value={"MP"}>
                MP
              </option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>{" "}
          <div class="col-md-2">
            <label for="pincode" class="form-label">
              Pin/Zip Code
            </label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              className="form-control"
              required="true"
              value={user.pincode}
              onChange={handleInputes}
            />
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div class="col-12 d-flex justify-content-center mt-5 mb-2 pd">
            <button class="btn btn-primary m-1" type="cancle">
              Cancle
            </button>{" "}
            <button class="btn btn-primary m-1" type="previous">
              Previous
            </button>{" "}
            <button
              class="btn btn-primary m-1"
              type="button"
              onClick={handleEdit}
              id={isClicked ? "update" : "edit"}
            >
              {isClicked ? "Update" : "Edit"}
            </button>{" "}
            <button class="btn btn-primary m-1" type="delete">
              Delete
            </button>{" "}
            <button
              class="btn btn-primary m-1"
              type="button"
              onClick={PostData}
            >
              Save
            </button>{" "}
            <button class="btn btn-primary m-1" type="button">
              Add: Party Details
            </button>
            <button class="btn btn-primary m-1" type="submit">
              Next: Rent & Other Terms
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Identifier;
