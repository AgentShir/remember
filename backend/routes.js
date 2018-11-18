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

router.get(
  "api/getUserInfo",
  authFunctions.checkToken,
  userFunctions.getUserInfo
);

module.exports = router;
