const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

//Property schema
const propertySchema = new mongoose.Schema({
  takula: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  limittype: {
    type: String,
    required: true,
  },
  limitname: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  areatype: {
    type: String,
    required: true,
  },
  propertyarea: {
    type: String,
    required: true,
  },
  bldgname: {
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
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  // token: [
  //   {
  //     tokens: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});

//We are generating Token
// propertySchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     // console.log(token);
//     this.tokens = this.tokens.concat({ token: token });

//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };

//collection creation
const property = mongoose.model("propertyDetails", propertySchema);
module.exports = property;
