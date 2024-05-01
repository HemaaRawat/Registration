import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Module from "./components/Module";
import Download from "./components/Download";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Property from "./components/Property";
import ErrorPage from "./components/Errorpage";
import Partydetails from "./components/Partydetails";
import Identifier from "./components/Identifier";
import Insidenavbar from "./components/Insidenavbar";
import Rent from "./components/Rent";
import Power from "./components/Power";
import ChoosParty from "./components/ChooseParty";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module" element={<Module />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/property" element={<Property />} />
        <Route path="/partydetails" element={<Partydetails />} />
        <Route path="/power" element={<Power />} />
        <Route path="/identifier" element={<Identifier />} />
        <Route path="/module" element={<Module />} />
        <Route path="/download" element={<Download />} />
        <Route path="/insidenavbar" element={<Insidenavbar />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/chooseparty" element={<ChoosParty />} />
        <Route path="*" element={<ErrorPage />} /> {/*Error Page */}
      </Routes>
    </>
  );
};

export default App;
