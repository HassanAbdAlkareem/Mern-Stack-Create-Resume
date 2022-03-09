const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// middle ware
dotenv.config();
app.use(express.json());
app.use(cors(corsOptions));

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
app.listen(process.env.PORT || 5000, () => {
  console.log("server runing on port");
});
