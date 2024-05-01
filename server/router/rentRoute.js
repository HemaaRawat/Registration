const express = require("express");
const User = require("../model/rentSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/rent", async (req, res) => {
  console.log(req.body);
  const {
    month,
    fromdate,
    todate,
    deposite,
    rent,
    stmduty,
    regfee,
    feetype,
    refno,
    amount,
    amountpaid,
    paymentdate,
    maintenancecharges,
    paidby,
    miscellaneous,
  } = req.body; // get data form user

  try {
    if (false) {
      //   return res.status(422).json({ error: "Email already Exist" });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: "Password not Match" });
    } else {
      //if not exist then get data
      const user = new User({
        month,
        fromdate,
        todate,
        deposite,
        rent,
        stmduty,
        regfee,
        feetype,
        refno,
        amount,
        amountpaid,
        paymentdate,
        maintenancecharges,
        paidby,
        miscellaneous,
      });

      //save it in the new collection
      const userRegister = await user.save();
      // await user.save();

      res.status(201).json({ _id: user._id, message: "Data Save Successfuly" });

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

router.post("/fetchParty", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const user = await User.find({ _id: id });
  res.status(200).json(user);
});

router.patch("/updateParty", async (req, res) => {
  const { id, updatedData } = req.body;
  console.log(id, updatedData);
  const update = await User.updateOne({ _id: id }, { $set: updatedData });
  res.status(200).json({ msg: "Data updated" });
});

router.get("/fetchAllUser", async (req, res) => {
  const allUser = await User.find({}, { fname: 1, lname: 1 });
  res.status(200).json({ allUser });
});

module.exports = router;
