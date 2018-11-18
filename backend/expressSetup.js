const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const routes = require("./routes");

// Configure the express server middleware
const app = express();

// Take the raw requests and turn them into properties that are usable in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Expose data validation methods
app.use(expressValidator());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", routes);

module.exports = app;
