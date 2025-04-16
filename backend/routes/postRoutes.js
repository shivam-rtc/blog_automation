const express = require("express");
const router = express.Router();
const {
  getLatestPosts,
  getTrendingPosts,
  savePost,
  getSinglePost,
} = require("../controllers/postController");

router.get("/", getLatestPosts);
router.get("/trending", getTrendingPosts);
router.get("/:id", getSinglePost);
router.post("/:id/save", savePost);

module.exports = router;
