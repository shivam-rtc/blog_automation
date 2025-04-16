require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const generateDailyPosts = require("./jobs/dailyCron");
const cors = require("cors");

connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN_URL, // Vite frontend origin
  credentials: true
}));

app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("✅ Automated Tech Blog API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

generateDailyPosts(); // Run once on startup
