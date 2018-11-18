const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    //Find the user with the provided email
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      res.status(500).send({ error: "No user found by that email" });
    }

    //Validate the password to make sure it matches with the corresponding hash
    const validate = await user.isValidPassword(req.body.password);
    if (!validate) {
      res.status(500).send({ error: "Incorrect password" });
    }
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      zip: user.zip,
      email: user.email,
    };
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) console.error("There is some error in the token", err);
        else {
          res.json({
            success: true,
            token: `Bearer ${token}`,
          });
        }
      }
    );
  } catch (error) {
    res.send({ error });
  }
};

exports.checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    return res.json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "Token is not valid",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};
