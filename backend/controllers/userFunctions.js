const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("User");

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody("name");
  pty();
  req.checkBody("email", "You must enter a valid email!").isEmail();
  req.sanitizeBody("email").normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false,
  });
  req.checkBody("password", "Password Cannt be Blank!").notEmpty();
  req
    .checkBody("confirmPassword", "Confirmation Password cannt be blank")
    .notEmpty();
  req
    .checkBody("confirmPassword", "Ooops! Passwords do not match")
    .equals(req.body.password);
  const errors = req.validationErrors();
  if (errors) {
    res.send({ error: errors });
    return;
  }
  next(); // There were no errors
};

exports.register = async (req, res, next) => {
  try {
    const user = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      zip: req.body.zip,
      password: req.body.password,
    });
    const data = await user.save();
    const email = data.email;
    res.send({ message: "Successfully Registered", email });
  } catch (error) {
    console.log(error);
    res.send({ error: error });
  }
};