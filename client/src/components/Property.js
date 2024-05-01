import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Insidenavbar from "./Insidenavbar";
import axios from "axios";

const Property = () => {
  const navigate = useNavigate();

  // const callPropertyPage = async () => {
  //   try {
  //     const res = fetch("/property", {
  //       method: "GET",
  //       headers: {
  //         Accept: "appllication/json",
  //         "Content-Type": "appllication/json",
  //       },
  //       credentials: "include", //help to reach the cookie to the proper database.
  //     });
  //     console.log(res);
  //     const data = await res.json();
  //     console.log(data);

  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     navigate("/login");
  //   }
  // };
  // useEffect(() => {
  //   callPropertyPage();
  // }, []);

  //getting form user
  const [user, setUser] = useState({
    takula: "",
    village: "",
    limittype: "",
    limitname: "",
    unit: "",
    type: "",
    area: "",
    areatype: "",
    propertyarea: "",
    bldgname: "",
    flatno: "",
    road: "",
    location: "",
    city: "",
    state: "",
    zipcode: "",
  });

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

  //To post Property data to the Server
  const PostData = async (values) => {
    try {
      const response = await axios.post("/property", user);
      console.log(response);

      localStorage.setItem("user", JSON.stringify({ ...response.data }));

      // await axios.post("/api/users/property", values);
      //console.log("Data Saved Successfuly");
      window.alert("Data Saved Successfuly");
      //navigate("/partydetails");
    } catch (error) {
      console.log("Data Not Saved");
      // message.error("");
    }
  };

  //Negivate to the next page
  const partpage = (e) => {
    navigate("/chooseparty");
  };

  return (
    <>
      <Insidenavbar />
      <div className="container mt-5">
        <form className="row g-3 needs-validation" method="GET">
          <label for="validationCustom01" class="form-label display-7">
            <b>Property Details</b>
          </label>
          <div class="col-md-3">
            <label for="takula" class="form-label">
              Takula
            </label>
            <select
              name="takula"
              id="takula"
              onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value="">Choose...</option>
              <option value="Ambaranath">Ambaranath</option>
              <option value="Badalapur">Badalapur</option>
              <option value="Bhivandi">Bhivandi</option>
              <option value="Kalyan">Kalyan</option>
              <option value="Murabad">Murabad</option>
              <option value="Shahapur">Shahapur</option>
              <option value="Thane">Thane</option>
              <option value="Ulhasanagar">Ulhasanagar</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>{" "}
          <div class="col-md-3">
            <label for="village" class="form-label">
              Village
            </label>
            <select
              name="village"
              id="village"
              onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value="">Choose...</option>
              <option value="Adavali-bhutavali">Adavali-bhutavali</option>
              <option value="Agasan">Agasan</option>
              <option value="Bale">Bale</option>
              <option value="Balkum">Balkum</option>
              <option value="Bamali">Bamali</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>{" "}
          <div class="col-md-3">
            <label for="limittype" class="form-label">
              Local Limit Type
            </label>
            <select
              name="limittype"
              id="limittype"
              onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value="">Choose...</option>
              <option value="Thane">Thane</option>
              <option value="Navi-Mumbai">Navi-Mumbai</option>
              <option value="Mira-Bhayander">Mira-Bhayander</option>
              <option value="Bhivandi-nijamapur">Bhivandi-nijamapur</option>
              <option value="Ulhasanagar">Ulhasanagar</option>
              <option value="Kalyan-Dombivli">Kalyan-Dombivli</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-3">
            <label for="limitname" class="form-label">
              Local Limit Name
            </label>
            <select
              name="limitname"
              id="limitname"
              onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value="">Choose...</option>
              <option value="Survey Number">Survey Number</option>
              <option value="C.T.S Number">C.T.S Number</option>
              <option value="Plot Number">Plot Number</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-3">
            <label for="unit" class="form-label">
              Type of Unit
            </label>
            <select
              name="unit"
              id="unit"
              onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value={""}>Select..</option>
              <option value={"Flat"}>Flat</option>
              <option value={"Shop"}>Shop</option>
              <option value={"Apparment"}>Apparment</option>
              <option value={"Villa"}>Villa</option>
              <option value={"Plot"}>Plot</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-3">
            <label for="type" class="form-label">
              Type
            </label>
            <select
              name="type"
              id="type"
              onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option>Select..</option>
              <option value={"Residential"}>Residential</option>
              <option value={"Commercial"}>Commercial</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-3">
            <label for="area" class="form-label">
              Area in Sq Ft
            </label>
            <input
              type="number"
              name="area"
              id="area"
              className="form-control"
              required="true"
              value={user.area}
              onChange={handleInputes}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-3">
            <label for="areatype" class="form-label">
              Area Type
            </label>
            <select
              name="areatype"
              id="areatype"
              onChange={handleInputes}
              className="form-select fw-bold"
              required="true"
            >
              <option>Select..</option>
              <option value={"Built Up Area"}>Built Up Area</option>
              <option value={"Carpet Area"}>Carpet Area</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>{" "}
          <div class="col-md-2">
            <label for="propertyarea" class="form-label">
              Property in Area
            </label>
            <select
              name="propertyarea"
              id="propertyarea"
              onChange={handleInputes}
              className="form-select fw-bold"
              required="true"
            >
              <option value={""}>Choose..</option>
              <option value={"Urban"}>Urban</option>
              <option value={"Rural"}>Rural</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          {/* ------ Property Address ------- */}
          <label for="propertyadd" class="form-label display-7 mt-5">
            <b>Property Address</b>
          </label>
          <div class="col-md-4">
            <label for="bldgname" class="form-label">
              Building Name
            </label>

            <input
              type="text"
              name="bldgname"
              id="bldgname"
              className="form-control"
              required="true"
              value={user.bldgname}
              onChange={handleInputes}
            />
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
            </div>
          </div>
          <div class="col-md-4">
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
          </div>
          <div class="col-md-3">
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
              <option value={"Maharashtra"}>Maharashtra</option>
              <option value={"UP"}>UP</option>
              <option value={"MP"}>MP</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>{" "}
          <div class="col-md-2">
            <label for="zipcode" class="form-label">
              Pin/Zip Code
            </label>

            <input
              type="text"
              name="zipcode"
              id="zipcode"
              className="form-control"
              required="true"
              value={user.zipcode}
              onChange={handleInputes}
            />
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div class="col-12 d-flex justify-content-center mt-5 mb-3">
            <button class="btn btn-primary m-1" type="cancle">
              Cancle
            </button>{" "}
            <button
              class="btn btn-primary m-1"
              type="button"
              onChange={PostData}
            >
              Save
            </button>{" "}
     
            <button class="btn btn-primary m-1" type="button" onClick={partpage}>
              Next: Party Details
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Property;
