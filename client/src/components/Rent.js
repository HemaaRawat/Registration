import React, { useState, useEffect } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import Insidenavbar from "./Insidenavbar";
import axios, { all } from "axios";

const Rent = () => {
  //current date
  const [fromdate, setFromdate] = useState([]);
  // let date = new date();
  // let noofmonth;
  // //adding 11 month to current date
  // const todate = date.setMonth(date.getMonth() + noofmonth);
  // console.log(date.toLocaleDateString());

  const [allProperty, setAllProperty] = useState([]);

  const fetchAllUser = async () => {
    let allUser = await axios.get("/fetchAllUser");
    setAllProperty(allUser.data.allUser);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    month: "",
    fromdate: "",
    todate: "",
    deposite: "",
    rent: "",
    stmduty: "",
    regfee: "",
    feetype: "",
    refno: "",
    amount: "",
    amountpaid: "",
    paymentdate: "",
    maintenancecharges: "",
    paidby: "",
    miscellaneous: "",
  });
  const [isClicked, setIsClicked] = useState(false);

  const [userslist, setUserList] = useState([]);
  const [areaValue1, setAreaValue1] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  let name, value;
  const handleInputes = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    if (name == "maintenancecharges") {
      setAreaValue1(e.target.value);
    }
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //converty string to date
  const changeDate = (e) => {
    let date = new Date(e.target.value);

    console.log(date);
    let noofmonth = 11;
    let todate = new Date(
      date.setMonth(date.getMonth() + noofmonth)
    ).toLocaleDateString();
    console.log(todate);
    setUser({
      ...user,
      fromdate: e.target.value,
      todate: todate.split("/").join("-"),
    });
    console.log(date);
  };

  const handleEdit = async (e) => {
    const id = e.target.id;
    if (id === "edit") {
      let localDataId = JSON.parse(localStorage.getItem("user"))._id;
      let response = await axios.post("/fetchParty", {
        id: localDataId,
      });
      console.log(response.data[0]);
      setUser(response.data[0]);
      setIsClicked(true);
    } else if (id == "update") {
      let localDataId = JSON.parse(localStorage.getItem("user"))._id;
      const updateData = await axios.patch("/updateParty", {
        id: localDataId,
        updatedData: user,
      });
      setUser({
        month: "",
        fromdate: "",
        todate: "",
        deposite: "",
        rent: "",
        stmduty: "",
        regfee: "",
        feetype: "",
        refno: "",
        amount: "",
        amountpaid: "",
        paymentdate: "",
        maintenancecharges: "",
        paidby: "",
        miscellaneous: "",
      });
      setIsClicked(false);
    }
  };

  const PostData = async (values) => {
    try {
      const response = await axios.post("/rent", user);
      console.log(response);

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

  const previousPage = (e) => {
    navigate("/partydetails");
  };
  return (
    <>
      <Insidenavbar />
      <div className="container mt-5 mb-4">
        <form className="row g-3">
          <div class="col-md-4">
            <label for="month" class="form-label">
              License Period(Month)
            </label>

            <input
              type="text"
              name="month"
              id="month"
              className="form-control"
              required="true"
              value={user.month}
              onChange={handleInputes}
            />
          </div>{" "}
          <div class="col-md-4">
            <label for="fromdate" class="form-label">
              From
            </label>

            <input
              type="date"
              name="fromdate"
              id="fromdate"
              className="form-control"
              required="true"
              value={user.fromdate}
              onChange={changeDate}
            />
          </div>
          <div class="col-md-4">
            <label for="todate" class="form-label">
              To
            </label>

            <input
              type="text"
              name="todate"
              id="todate"
              className="form-control"
              required="true"
              value={user.todate}
              onChange={handleInputes}
            />
          </div>
          <div class="col-md-4">
            <label for="deposite" class="form-label">
              Deposite
            </label>

            <input
              type="number"
              name="deposite"
              id="deposite"
              className="form-control"
              required="true"
              value={user.deposite}
              onChange={handleInputes}
            />
          </div>
          <div class="col-md-4">
            <label for="rent" class="form-label">
              Rent
            </label>

            <input
              type="number"
              name="rent"
              id="rent"
              className="form-control"
              required="true"
              value={user.rent}
              onChange={handleInputes}
            />
          </div>
          <p></p>
          {/* Registrtion Fees and Stamp Duty */}
          <div className="mb-3 container w-60 mt-5 border border-dark">
            <div class="mb-3 row mt-3">
              <label for="stamduty" class="col-sm-3 col-form-label">
                Stamp Duty:
              </label>
              <div class="col-sm-5">
                <input
                  type="number"
                  className="form-control"
                  id="stamduty"
                  value="300"
                  onChange={handleInputes}
                  disabled
                />
              </div>
            </div>
            <div class="mb-3 row mt-3">
              <label for="regfee" class="col-sm-3 col-form-label">
                Registration Fee:
              </label>
              <div class="col-sm-5">
                <input
                  type="number"
                  class="form-control"
                  id="regfee"
                  value="1000"
                  onChange={handleInputes}
                  disabled
                />
              </div>
            </div>
          </div>
          <p></p>
          <span className="fw-bold">
            Payment Details of Stamp Duty & Registration Fee:
          </span>
          <div className="container border border-dark mt-3">
            <div class="row mt-3">
              <span for="feetype" class="col-sm-2 col-form-label">
                Fee Type:
              </span>
              <div class="col-md-4">
                <select
                  name="feetype"
                  id="feetype"
                  className="form-select"
                  onChange={handleInputes}
                >
                  <option value="">Choose..</option>
                  <option value="Stamp Duty">Stamp Duty</option>
                  <option value="Registration Fees">Registration Fees</option>
                  <option value="Registration Fees & Stamp Duty">
                    Registration Fees & Stamp Duty
                  </option>
                </select>
              </div>
              <span for="refno" class="col-sm col-form-label">
                Ref No:
              </span>{" "}
              <div class="col-md-4">
                <input
                  type="number"
                  name="refno"
                  id="refno"
                  className="form-control"
                  required="true"
                  value={user.refno}
                  onChange={handleInputes}
                />
              </div>{" "}
              <p></p>
              <span for="amount" class="col-sm col-form-label">
                Amount:
              </span>{" "}
              <div class="col-md-4">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="form-control"
                  required="true"
                  value={user.amount}
                  onChange={handleInputes}
                />
              </div>{" "}
              <span for="amountpaid" class="col-sm col-form-label">
                Amount to be paid:
              </span>{" "}
              <div class="col-md-4">
                <input
                  type="number"
                  name="amountpaid"
                  id="amountpaid"
                  className="form-control"
                  required="true"
                  value={user.amountpaid}
                  onChange={handleInputes}
                />
              </div>
              <p></p>
              <label for="paymentdate" class="col-sm-3 col-form-label">
                Payment Date:
              </label>{" "}
              <div class="col-md-4">
                <input
                  type="date"
                  name="paymentdate"
                  id="paymentdate"
                  className="form-control"
                  required="true"
                  value={user.paymentdate}
                  onChange={handleInputes}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <button type="button" value="Save" className="me-4">
                Save
              </button>
              <button type="button" value="Add" className="">
                Add New
              </button>
            </div>
          </div>
          <span className="fw-bold">Select Term & Condition:</span>
          <span for="maintenancecharges" class="col-sm-3 col-form-label">
            4: Maintenance Charges:
          </span>
          <div class="col-md-4">
            <select
              name="maintenancecharges"
              id="maintenancecharges"
              className="form-select"
              onChange={handleInputes}
            >
              <option value="">Choose..</option>
              <option value="4.1 That the all outgoings including all rates, taxes, levies, assessment, maintenance charges, non occupancy charges, etc. in respect of the said premises shall be paid by the Licensor/s">
                4.1 - That the all outgoings including all rates, taxes, levies,
                assessment, maintenance charges, non occupancy charges, etc. in
                respect of the said premises shall be paid by the Licensor/s
              </option>
              <option value="4.2 That the Licensee/s herein shall bear and pay all the maintenance charges in respect of the said Licenced Premises, and other outgoings including all rates, taxes, levies, assessment, non occupancy charges, etc. in respect of the said premises shall be paid by the Licensor/s.">
                4.2 - That the Licensee/s herein shall bear and pay all the
                maintenance charges in respect of the said Licenced Premises,
                and other outgoings including all rates, taxes, levies,
                assessment, non occupancy charges, etc. in respect of the said
                premises shall be paid by the Licensor/s.
              </option>
            </select>
            <textarea
              name="maintenancecharges"
              id="maintenancecharges"
              cols="100"
              rows="5"
              className="mt-2"
              value={areaValue1}
            ></textarea>
          </div>
          <span className="fw-bold">Stamp Duty & Registration Fee Paid By</span>
          <div class="col-md-4">
            <select
              name="paidby"
              id="paidby"
              className="form-select"
              onChange={handleInputes}
            >
              <option value="">Choose..</option>
              <option value="Licensee">Licensee(Tenant)</option>
              <option value="Licensor">Licensor(Owner)</option>
              <option value="Licensee & Licensor equally">
                Licensee & Licensor equally
              </option>
            </select>
          </div>
          <span className="fw-bold">
            Miscellaneous ( If any other Terms & Conditions)
          </span>
          <div class="col-md-4">
            <textarea
              name="miscellaneous"
              id="miscellaneous"
              cols="150"
              rows="5"
              onChange={handleInputes}
            />
          </div>
          <div class="col-12 d-flex justify-content-center mt-3">
            <button class="btn btn-primary m-1" type="cancle">
              Cancle
            </button>{" "}
            <button
              class="btn btn-primary m-1"
              type="cancle"
              onClick={previousPage}
            >
              Previous
            </button>{" "}
            <button
              class="btn btn-primary m-1"
              type="button"
              onClick={PostData}
            >
              Save
            </button>{" "}
            <button class="btn btn-primary m-1" type="button">
              View Draft Document
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Rent;
