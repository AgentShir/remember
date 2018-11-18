const express = require("express");
const router = express.Router();

const userFunctions = require("./controllers/userFunctions");
const authFunctions = require("./controllers/authFunctions");

router.post(
  "/api/register",
  userFunctions.validateRegister,
  userFunctions.register
);

router.post("/api/login", authFunctions.login);

router.post("/api/getuser", userFunctions.getUser);

module.exports = router;
