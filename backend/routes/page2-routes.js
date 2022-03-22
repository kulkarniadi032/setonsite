const express = require("express");
const router = express.Router();
const {
  createPage2Data,
  getAllPage2Data,
} = require("../controller/page2-controller");
// http://localhost:5000/api/v1/page2 => get, post
router.route("/page2").get(getAllPage2Data).post(createPage2Data);
// router.route("/page2/:id").delete(deletePage1Data);
module.exports = router;
