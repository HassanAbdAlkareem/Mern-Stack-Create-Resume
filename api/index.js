const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

// middle ware
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://hassan:hassan1234@hassanrusme.qvcid.mongodb.net/createRuems?retryWrites=true&w=majority"
  )
  .then(() => console.log("db is runinng"))
  .catch((error) => console.log("Some thing is wrong" + error));
//

// my routes
const routerResume = require("./routes/Resume");
const routerUser = require("./routes/User");

// use my routes
app.use("/api/resume", routerResume);
app.use("/api/user", routerUser);

// build server
app.listen(process.env.PORT || 5000, () => {
  console.log("server runing on port");
});
