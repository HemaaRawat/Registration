import React, { useState } from "react";
import Insidenavbar from "../components/Insidenavbar";
import Partydetails from "./Partydetails";
import Identifier from "./Identifier";

function ChooseParty() {
  const [page, setPage] = useState("party");
  const handleRadio = (e) => {
    setPage(e.target.value);
  };
  return (
    <>
      <Insidenavbar />
      <div className="container mt-5">
        <div class="form-check form-check-inline mt-3">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onClick={handleRadio}
            value={"party"}
            checked
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Party
          </label>
        </div>
        <div class="form-check form-check-inline mt-3">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onClick={handleRadio}
            value={"idetifier"}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Identifier/Witness
          </label>
        </div>
      </div>
      {page == "party" ? <Partydetails /> : <Identifier />}
    </>
  );
}

export default ChooseParty;
