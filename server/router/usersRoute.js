const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/propertySchema");

router.post("/property", async (req, res) => {
  console.log(req.body);
  const {
    takula,
    village,
    limittype,
    limitname,
    unit,
    type,
    area,
    areatype,
    propertyarea,
    bldgname,
    flatno,
    road,
    location,
    city,
    state,
    zipcode,
  } = req.body; // get data form user

  try {
    let token;
    if (false) {
      //   return res.status(422).json({ error: "Email already Exist" });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: "Password not Match" });
    } else {
      //if not exist then get data
      const user = new User({
        takula,
        village,
        limittype,
        limitname,
        unit,
        type,
        area,
        areatype,
        propertyarea,
        bldgname,
        flatno,
        road,
        location,
        city,
        state,
        zipcode,
      });

      //save it in the new collection
      const userRegister = await user.save();
      // await user.save();

      res.status(201).json({ message: "Data Save Successfuly" });

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (userRegister) {
        res.status(201).json({ message: "Data Save Successfuly" });
      } else {
        res.status(500).json({ error: "Failed to Save data" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});
// router.get("/property", authenticate, (req, res) => {
//   console.log("Hello World");
//   res.send(req.rootuser);
// });

module.exports = router;
