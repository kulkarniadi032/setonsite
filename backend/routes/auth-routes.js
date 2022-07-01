const express = require("express");
const router = express.Router();
const {
  createRegisterUser,
  createLoginUserData,
} = require("../controller/auth-controller");
router.route("/registerUser").post(createRegisterUser);
router.route("/loginUser").post(createLoginUserData);

module.exports = router;
