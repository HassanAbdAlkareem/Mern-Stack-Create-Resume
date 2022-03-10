const Resume = require("../models/Resume");
const router = require("express").Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(200).send(resume);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:fullName", async (req, res) => {
  try {
    const resume = await Resume.findOne({ fullName: req.params.fullName });
    res.status(200).send(resume);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//
module.exports = router;
