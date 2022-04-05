const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const db = require("./config/db");
db();
const cors = require("cors");
const page1 = require("./routes/page1-routes");
const page2 = require("./routes/page2-routes");
const page4 = require("./routes/page4-routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", page1, page2,page4);
app.listen(process.env.PORT || 5000, () => {
  console.log("server is running");
});
