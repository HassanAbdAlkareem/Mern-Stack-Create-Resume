const Resume = require("../models/Resume");
const router = require("express").Router();

router.post("/:id", async (req, res) => {
  console.log(req.body);
  try {
    const resume = new Resume({
      userId: req.params.id,
      ...req.body,
    });
    await resume.save();
    res.status(200).send(resume);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findOne({ userId: req.params.id }).sort({
      _id: -1,
    });
    res.status(200).send(resume);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//
module.exports = router;
