// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// const express = require("express");
// const app = express();
// app.use(express.json()); //to understand json to your app
// const useRoute = require("./router/auth");
// app.use("/api/users/", useRoute);

const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require('./model/userSchema');

//cors error
app.use(
  cors({
    origin: "http://localhost:5000",
  })
);

// we link the router files to make our route easy
app.use(require("./router/auth"));
app.use(require("./router/usersRoute"));
app.use(require("./router/userDetailsRoute"));
app.use(require("./router/identifierRoute"));
app.use(require("./router/rentRoute"));

const PORT = process.env.PORT; //to secure port

app.use("/about", (req, res) => {
  res.send("About");
});

app.use("/login", (req, res) => {
  res.send("Log-In");
});
app.use("/signup", (req, res) => {
  res.send("Signup");
});
app.use("/property", (req, res) => {
  res.send("Property");
});
app.use("/partydetails", (req, res) => {
  res.send("party");
});
app.use("/identifier", (req, res) => {
  res.send("Identifier");
});
app.use("/rent", (req, res) => {
  res.send("Rent");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
