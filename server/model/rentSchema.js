const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema({
  month: {
    type: Number,
    required: true,
  },
  fromdate: {
    type: Date,
    required: true,
  },
  todate: {
    type: Date,
    required: true,
  },
  deposite: {
    type: Number,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  stmduty: {
    type: Number,
    // required: true,
  },
  regfee: {
    type: Number,
    // required: true,
  },
  feetype: {
    type: String,
    required: true,
  },
  refno: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  amountpaid: {
    type: Number,
    required: true,
  },
  paymentdate: {
    type: Date,
    required: true,
  },
  maintenancecharges: {
    type: String,
    required: true,
  },
  paidby: {
    type: String,
    required: true,
  },
  miscellaneous: {
    type: String,
    required: true,
  },
});

// collection creation
const rentdetails = mongoose.model("rent", rentSchema);
module.exports = rentdetails;
