const express = require("express");
const router = express.Router();
const {
  createpage4Data,
  getAllpage4Data,
} = require("../controller/page4-controller");
// http://localhost:5000/api/v1/page4 => get, post
router.route("/page4").get(getAllpage4Data).post(createpage4Data);
// router.route("/page4/:id").delete(deletePage1Data);
module.exports = router;