const router = require("express").Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
    });
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    user ? res.status(200).send(user) : res.status(404).send("user not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//
module.exports = router;
