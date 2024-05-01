const jwt = require("jsonwebtoken");
const User = require("../model/propertySchema");

const authenticate = async (req, res, next) => {

//check the token or get token.
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootuser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootuser) {
      throw new Error("User not Found");
    }

    req.token = token;
    req.rootuser = rootuser;
    req.userID = rootuser._id;

    next();

  } catch (err) {
    res.status(401).send("Unathorized: No token provided");
    console.log(err);
  }
};

module.exports = authenticate;
