const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

//registration schema
const userSchema = new mongoose.Schema({
  district: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
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

//Hashing the password
userSchema.pre("save", async function (next) {
  console.log("hii form inside");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//We are generating Token
// userSchema.methods.generateAuthToken = async function () {
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
const User = mongoose.model("registrations", userSchema);
module.exports = User;
