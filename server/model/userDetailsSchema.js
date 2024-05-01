const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Property schema
const userDetailsSchema = new mongoose.Schema({
  partytype: {
    type: String,
    required: true,
  },  
  entitytype: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  mname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  pannumber: {
    type: String,
    required: true,
  },
  contnumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  buildgname: {
    type: String,
    required: true,
  },
  flatno: {
    type: String,
    required: true,
  },
  road: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  executing: {
    type: String,
    required: true,
  },
  adminId : {
    type : mongoose.Types.ObjectId,
    ref : "registrations",
    required : [true, "Please provide AdminId"]
  }
});

//collection creation
const partydetails = mongoose.model("partyDetails", userDetailsSchema);
module.exports = partydetails;
