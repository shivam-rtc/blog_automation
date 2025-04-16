const cron = require("node-cron");
const Post = require("../models/postModel");
const { generateArticle } = require("../services/articleService");
const { generateImage } = require("../services/imageService");

// Full topic pool
const allTopics = [
  "AI Tools", "Meta Updates", "Tech News", "Open Source", "Cloud Trends",
  "Cybersecurity", "Machine Learning", "Productivity", "Big Tech News", "Startup Trends"
];

// Randomize 5 topics daily
function getDailyTopics(count = 5) {
  const shuffled = allTopics.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const generateDailyPosts = async () => {
  const todayTopics = getDailyTopics(5); // ✅ Only 5 per day

  for (const topic of todayTopics) {
    const raw = await generateArticle(topic);
    if (!raw) continue;

    // ✅ Parse Title, Subtitle, Content
    const titleMatch = raw.match(/Title:\s*(.*)/i);
    const subtitleMatch = raw.match(/Subtitle:\s*(.*)/i);
    const contentMatch = raw.match(/Content:\s*([\s\S]*)/i);

    const title = titleMatch ? titleMatch[1].trim() : `Latest on ${topic}`;
    const subtitle = subtitleMatch ? subtitleMatch[1].trim() : "";
    const content = contentMatch ? contentMatch[1].trim() : raw;

    const words = content.split(/\s+/).length;
    const readTime = Math.ceil(words / 200)

    const image = await generateImage(`Tech blog post: ${title}`);

    const post = new Post({
      title,
      subtitle,
      content,
      image: image || "https://via.placeholder.com/800x400",
      tags: [topic.toLowerCase()],
      readTime,
    });

    await post.save();
    console.log(`✅ Posted: ${title}`);
  }
};

// Run every day at 6 AM
cron.schedule("0 6 * * *", generateDailyPosts);

module.exports = generateDailyPosts;


























// const cron = require("node-cron");
// const { generateArticle } = require("../services/gptService");
// const Post = require("../models/postModel");

// const topics = ["AI Tools", "JavaScript", "Cloud Trends", "Meta AI", "Open Source"];

// const dailyBlogJob = async () => {
//   for (const topic of topics) {
//     const content = await generateArticle(topic);
//     const newPost = new Post({
//       title: `Latest on ${topic}`,
//       content,
//       image: `https://source.unsplash.com/featured/?${topic}`,
//       tags: [topic.toLowerCase()],
//     });
//     await newPost.save();
//     console.log(`✅ Posted article on: ${topic}`);
//   }
// };

// cron.schedule("0 6 * * *", dailyBlogJob);

// module.exports = dailyBlogJob;