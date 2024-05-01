const mongoose = require('mongoose');

//Database connection
// mongoose

const DB = process.env.DATABASE; //to make password secure
mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  });
  
  const connection = mongoose.connection;
  connection.on("error", (err) => console.log(err));
  connection.on("connected", () => console.log("Mongoose Connection Succesful"));