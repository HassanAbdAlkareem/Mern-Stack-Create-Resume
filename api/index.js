const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

// middle ware
app.use(cors());
dotenv.config();
app.use(express.json());

// my routes
const routerResume = require("./routes/Resume");

mongoose
  .connect(
    "mongodb+srv://hassan:hassan1234@hassanrusme.qvcid.mongodb.net/createRuems?retryWrites=true&w=majority"
  )
  .then(() => console.log("db is runinng"))
  .catch((error) => console.log("Some thing is wrong" + error));
//

// my end point
app.use("/api/resume", routerResume);

//
app.listen(process.env.PORT || 5000, () => {
  console.log("server runing on port");
});
