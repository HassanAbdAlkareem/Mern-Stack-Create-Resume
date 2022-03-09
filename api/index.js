const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

// middle ware
dotenv.config();
app.use(express.json());
app.use(cors());

// my routes
const routerResume = require("./routes/Resume");

mongoose
  .connect(process.env.URL_MONGO)
  .then(() => console.log("db is runinng"))
  .catch((error) => console.log("Some thing is wrong" + error));
//

// my end point
app.use("/api/resume", routerResume);

//
app.listen(5000, () => {
  console.log("server is runing");
});
