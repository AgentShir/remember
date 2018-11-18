const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const routes = require("./routes");
const cors = require("cors");

// Configure the express server middleware
const app = express();

// Take the raw requests and turn them into properties that are usable in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Expose data validation methods
app.use(expressValidator());

// Allow cors
app.use(cors());

app.use("/", routes);

module.exports = app;
