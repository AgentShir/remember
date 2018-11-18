const mongoose = require("mongoose");
const authFunctions = require("./conrollers/authFunctions");
const userFunctions = require("./conrollers/userFunctions");
require("./models/User");
// import environmental variables from our variables.env file
require("dotenv").config({ path: "variables.env" });

// Connect to DB and handle some errors
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise; // Tell mongoose to use promises
const db = mongoose.connection;
db.on("error", error => console.error(`There was an error: ${error.message}`));
db.once("open", () => {
  console.log("Connection to the database succeeded");
});

//Import our models
require("./models/User");

const app = require("./expressSetup");

app.post("/register", userFunctions.validateRegister, userFunctions.register);
app.get("/login", authFunctions.login);

// Start the Express server
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express server running on port ${server.address().port}`);
});
