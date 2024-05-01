import React, { useState, useEffect } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import axios, { all } from "axios";

const Partydetails = () => {
  // const [inputList, setinputList] = useState([{}]);
  const [allProperty, setAllProperty] = useState([]);

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
    partytype: "",
    entitytype: "",
    fname: "",
    mname: "",
    lname: "",
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
    executing: "",
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
    let response = await axios.post("/fetchParty", {
      id: e.target.value,
    });
    setUser(response.data[0]);
    setIsClicked(true);
  };

  const handleEdit = async (e) => {
    const id = e.target.id;
    if (id == "edit") {
      let localDataId = JSON.parse(localStorage.getItem("user"))._id;
      let response = await axios.post("/fetchParty", {
        id: localDataId,
      });
      setUser(response.data[0]);
      setIsClicked(true);
    } else if (id == "update") {
      let localDataId = JSON.parse(localStorage.getItem("user"))._id;
      const updateData = await axios.patch("/updateParty", {
        id: localDataId,
        updatedData: user,
      });
      setUser({
        partytype: "",
        entitytype: "",
        fname: "",
        mname: "",
        lname: "",
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
        executing: "",
      });
      setIsClicked(false);
    }
  };

  const PostData = async (values) => {
    try {
      const response = await axios.post("/partydetails", {
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
  //navigate to the rent page
  const rentpage = (e) => {
    navigate("/rent");
  };
  //navigate to the Property page
  const previousPage = (e) => {
    navigate("/property");
  };
  const powerpage = (e) => {
    navigate("/power");
  };
  // };
  return (
    <>
      <div className="container mt-5">
        <label for="validationCustom01" class="form-label display-7 d-block">
          <b>Party Details</b>
        </label>

        <form class="row g-3 mt-2">
          <div className="row g-2">
            <div className="col-md-4 mt-2">
              <label for="numberoutput" class="fw-bold">
                Choose Party
              </label>
              <div class="form-check form-check-inline col-auto">
                <select
                  class="form-select"
                  id="selectnumber"
                  name="selectnumber"
                  onChange={handlePartyEdit}
                >
                  <option>Choose....</option>
                  {allProperty.map((prop) => {
                    return (
                      <option value={prop._id}>
                        {`${prop.fname} ${prop.lname}`}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>{" "}
          <div class="col-md-3 mt-4">
            <label for="partytype" class="form-label">
              Party Type
            </label>
            <select
              name="partytype"
              id="partytype"
              onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value="">Choose...</option>
              <option
                selected={user.partytype == "Licensor/Owner"}
                value="Licensor/Owner"
              >
                Licensor/Owner
              </option>
              <option
                selected={user.partytype == "Licencee/Tenent"}
                value="Licencee/Tenent"
              >
                Licencee/Tenent
              </option>
              <option
                selected={user.partytype == "Power of Attorney Holder"}
                value="Power of Attorney Holder"
                onClick={powerpage}
              >
                Power of Attorney Holder
              </option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>{" "}
          <div class="col-md-3 mt-4">
            <label for="entitytype" class="form-label">
              Party Entity Type
            </label>
            <select
              name="entitytype"
              id="entitytype"
              onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value="">Choose...</option>
              <option
                selected={user.entitytype == "Inividual"}
                value="Inividual"
              >
                Inividual
              </option>
              <option
                selected={user.entitytype == "Proprietorship"}
                value="Proprietorship"
              >
                Proprietorship
              </option>
              <option
                selected={user.entitytype == "Partnership"}
                value="Partnership"
              >
                Partnership
              </option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <p className=""></p>
          <div class="col-md-4">
            <label for="fname" class="form-label">
              First Name
            </label>

            <input
              type="text"
              name="fname"
              id="fname"
              className="form-control"
              required="true"
              value={user.fname}
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
            <label for="lname" class="form-label">
              Last Name
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                name="lname"
                id="lname"
                className="form-control"
                required="true"
                value={user.lname}
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
          <div className="g-3 mt-2">
            <label class="form-check-label ml-raido me-2" for="executing">
              <b>Executing:</b>
            </label>
            <div class="form-check form-check-inline mt-3">
              <input
                class="form-check-input"
                type="radio"
                name="executing"
                id="self"
                value="self"
                required="true"
                checked={user.executing == "self" ? true : false}
                onChange={handleInputes}
              />
              <label class="form-check-label" for="self">
                Self
              </label>
            </div>
            {/* <div class="form-check form-check-inline"> */}
            <div class="form-check form-check-inline mt-3">
              <input
                class="form-check-input"
                type="radio"
                name="executing"
                id="poa"
                value="poa"
                required="true"
                checked={user.executing == "poa" ? true : false}
                onChange={handleInputes}
              />
              <label class="form-check-label" for="poa">
                Through POA
              </label>
            </div>{" "}
            <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="executing"
                id="other"
                value="other"
                required="true"
                checked={user.executing == "other" ? true : false}
                onChange={handleInputes}
              />
              <label class="form-check-label" for="other">
                Other
              </label>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center mt-5 mb-2 pd">
            <button class="btn btn-primary m-1" type="button">
              Cancle
            </button>{" "}
            <button
              class="btn btn-primary m-1"
              type="previous"
              onClick={previousPage}
            >
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
            <button
              class="btn btn-primary m-1"
              type="button"
              onClick={rentpage}
            >
              Next: Rent & Other Terms
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Partydetails;
