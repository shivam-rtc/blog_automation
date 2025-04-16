const Post = require("../models/postModel");
const { successResponse, errorResponse } = require("../utils/responseHandler");

exports.getLatestPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    successResponse(res, posts);
  } catch (err) {
    errorResponse(res, 500, "Failed to fetch latest posts.");
  }
};

exports.getTrendingPosts = async (req, res) => {
  try {
    const trending = await Post.find().sort({ views: -1 });
    successResponse(res, trending);
  } catch (err) {
    errorResponse(res, 500, "Failed to fetch trending posts.");
  }
};

exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return errorResponse(res, 404, "Post not found");
    post.views++;
    await post.save();
    successResponse(res, post);
  } catch (err) {
    errorResponse(res, 500, "Could not retrieve the post.");
  }
};

exports.savePost = async (req, res) => {
  try {
    const { id } = req.params;
    const ip = req.ip;

    const post = await Post.findById(id);
    if (!post) return errorResponse(res, 404, "Post not found");

    if (!post.savedBy.includes(ip)) {
      post.savedBy.push(ip);
      await post.save();
    }

    successResponse(res, "Post saved for later");
  } catch (err) {
    errorResponse(res, 500, "Failed to save post.");
  }
};
