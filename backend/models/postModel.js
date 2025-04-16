const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    content: String,
    image: String,
    tags: [String],
    readTime: Number,
    views: { type: Number, default: 0 },
    savedBy: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
