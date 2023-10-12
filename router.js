const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("get request  is working");
});

module.exports = router;
