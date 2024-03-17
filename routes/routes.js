const express = require("express");
const router = express.Router();
const path = require("path");
const downloadVideo = require("../controllers/videoController");

router.get("/video", downloadVideo);
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../view", "index.html"));
});
module.exports = router;
