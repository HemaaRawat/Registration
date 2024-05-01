const express = require("express");
const User = require("../model/identifierSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/indetifier", async (req, res) => {
  console.log(req.body);
  const {
    whichparty,
    Fname,
    mname,
    Lname,
    pannumber,
    contnumber,
    email,
    age,
    gender,
    buildgname,
    flatno,
    road,
    location,
    city,
    district,
    state,
    pincode,
  } = req.body; // get data form user

  try {
    if (false) {
      //   return res.status(422).json({ error: "Email already Exist" });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: "Password not Match" });
    } else {
      //if not exist then get data
      // const user = new User({
      //   whichparty,
      //   fname,
      //   mname,
      //   lname,
      //   pannumber,
      //   contnumber,
      //   email,
      //   age,
      //   gender,
      //   buildgname,
      //   flatno,
      //   road,
      //   location,
      //   city,
      //   district,
      //   state,
      //   pincode,
      // });

      //save it in the new collection
      const userRegister = await User.create(req.body);
      // await user.save();

      res.status(201).json({ _id: User._id, message: "Data Save Successfuly" });

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

router.post("/fetchIdentifier", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const user = await User.find({ _id: id });
  res.status(200).json(user);
});

router.patch("/updateIdentifier", async (req, res) => {
  const { id, updatedData } = req.body;
  console.log(id, updatedData);
  const update = await User.updateOne({ _id: id }, { $set: updatedData });
  res.status(200).json({ msg: "Data updated" });
});

router.post("/fetchAllUser", async (req, res) => {
  const { adminId } = req.body;
  const allUser = await User.find({ adminId }, { Fname: 1, Lname: 1 });
  res.status(200).json({ allUser });
});

module.exports = router;
