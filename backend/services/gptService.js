const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.generateArticle = async (topic) => {
  const prompt = `Write a 400-word tech blog article on: "${topic}". Make it human, engaging, and trending.`;

  const response = await openai.chat.completions.create({
    // model: "gpt-4-turbo",
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
};
