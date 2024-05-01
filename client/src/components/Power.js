import React from "react";
import Insidenavbar from "./Insidenavbar";

const Power = () => {
  return (
    <>
      <Insidenavbar />
      <div className="container mt-5">
        <label for="validationCustom01" class="form-label display-7 d-block">
          <b>Party Details</b>
        </label>
        {/* <div class="form-check form-check-inline mt-3">
          <input
            class="form-check-input"
            type="radio"
            name="link"
            id="inlineRadio1"
            value="party"
            onClick={"partydetails"}
          />
          <label class="form-check-label" for="inlineRadio1">
            Party
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="link"
            id="inlineRadio2"
            value="idetifier"
            onClick={"identifier"}
          />
          <label class="form-check-label" for="inlineRadio2">
            Identifier/Witness
          </label>
        </div> */}
        <form class="row g-3 mt-2">
          <div className="row g-2">
            <label for="numberoutput" class="">
              Party Number
            </label>
            <div class="col-md-1">
              <input type="" class="form-control" id="numberoutput" />
            </div>
            <div class="form-check form-check-inline col-auto">
              {/* <label class="visually-hidden" for="autoSizingSelect">
              Preference
            </label> */}
              <select
                class="form-select"
                id="selectnumber"
                name="selectnumber"
                // onChange={handleInputes}
              >
                <option selected>1</option>
              </select>
            </div>
          </div>{" "}
          <div class="col-md-3 mt-2">
            <label for="partytype" class="form-label">
              Party Type
            </label>
            <select
              name="partytype"
              id="partytype"
              //   onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value="">Choose...</option>
              <option value="Licensor/Owner">Licensor/Owner</option>
              <option value="Licencee/Tenent">Licencee/Tenent</option>
              <option value="Authorised Signatory">Authorised Signatory</option>
              <option value="Power of Attorney Holder">
                Power of Attorney Holder
              </option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>{" "}
          <div class="col-md-3 mt-2">
            <label for="entitytype" class="form-label">
              Party Entity Type
            </label>
            <select
              name="entitytype"
              id="entitytype"
              //   onChange={handleInputes}
              className="form-select fw-bold"
            >
              <option value="">Choose...</option>
              <option value="Inividual">Inividual</option>
              <option value="Proprietorship">Proprietorship</option>
              <option value="Partnership">Partnership</option>
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
              //   value={user.fname}
              //   onChange={handleInputes}
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
              //   value={user.mname}
              //   onChange={handleInputes}
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
                // value={user.lname}
                // onChange={handleInputes}
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
              //   value={user.pannumber}
              //   onChange={handleInputes}
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
              //   value={user.contnumber}
              //   onChange={handleInputes}
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
                // value={user.email}
                // onChange={handleInputes}
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
                // value={user.age}
                // onChange={handleInputes}
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
                // onChange={handleInputes}
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
                required="true"
                // onChange={handleInputes}
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
              //   value={user.buildgname}
              //   onChange={handleInputes}
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
              //   value={user.flatno}
              //   onChange={handleInputes}
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
                // value={user.road}
                // onChange={handleInputes}
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
                // value={user.location}
                // onChange={handleInputes}
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
              //   value={user.city}
              //   onChange={handleInputes}
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
              //   value={user.district}
              //   onChange={handleInputes}
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
              //   onChange={handleInputes}
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
            <label for="pincode" class="form-label">
              Pin/Zip Code
            </label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              className="form-control"
              required="true"
              //   value={user.pincode}
              //   onChange={handleInputes}
            />
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <p></p>
          <div className="borderbox">
            <div class="col-md-4">
              <label for="formFile" class="form-label">
                Upload POA File
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
          </div>
          {/* <div className="g-3 mt-2">
            <div className="form-check-inline">Executing:</div>
            <div class="form-check form-check-inline mt-3 ml">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions1"
                id="self"
                value="self"
              />
              <label class="form-check-label" for="self">
                Self
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions1"
                id="poa"
                value="poa"
              />
              <label class="form-check-label" for="poa">
                Through POA
              </label>
            </div>{" "}
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions1"
                value="other"
              />
              <label class="form-check-label" for="other">
                Other
              </label>
            </div>
          </div> */}
          <div class="col-12 d-flex justify-content-center mt-5 mb-2 pd">
            <button class="btn btn-primary m-1" type="cancle">
              Cancle
            </button>{" "}
            <button class="btn btn-primary m-1" type="previous">
              Previous
            </button>{" "}
            <button class="btn btn-primary m-1" type="update">
              Update
            </button>{" "}
            <button class="btn btn-primary m-1" type="delete">
              Delete
            </button>{" "}
            <button
              class="btn btn-primary m-1"
              type="save" /*onClick={PostData}*/
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

export default Power;
