const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
  },
  { timesTamps: true }
);

module.exports = mongoose.model("User", userSchema);
