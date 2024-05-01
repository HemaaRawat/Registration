const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from the server router js");
});

// -----  using async - Await -----

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const { district, email, password, cpassword } = req.body; // get data form user
  //check validation
  if (!district || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Please filled the filed" });
  }

  try {
    //check if a user is registered or not
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not Match" });
    } else {
      //if not exist then get data
      const user = new User({ district, email, password, cpassword });

      //save it in the new collection
      const userRegister = await user.save();
      // await user.save();

      res.status(201).json({ message: "user register Successfuly" });

      if (userRegister) {
        res.status(201).json({ message: "user register Successfuly" });
      } else {
        res.status(500).json({ error: "Failed to register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// -------- login code ---------

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({message: "Login Successfuly"});

  try {
    // let token;
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({ error: "Invalid details" });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // token = await userLogin.generateAuthToken();
      // console.log(token);

      // res.cookie("jwtoken", token, {
      //   expires: new Date(Date.now() + 25892000000),
      //   httpOnly: true,
      // });

      if (!isMatch) {
        res.status(400).json({ error: "User error" });
      } else {
        res.json({ _id : userLogin._id,message: "user Signin Successfully" });
      }
    } else {
      res.json({ message: "Invalid Credientials" });
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
