const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fullName: { type: String },
    jobTitle: { type: String },
    birthday: { type: String },
    aboutYou: { type: String },
    // picture: { type: String },
    url: { type: String },
    address: {
      country: { type: String },
      city: { type: String },
      closePoint: { type: String },
    },
    skills: { type: [Object] },
    number: { type: Number },
    email: { type: String },
    workBefore: { type: String },
  },
  { timesTamps: true }
);

module.exports = mongoose.model("resume", resumeSchema);
