// const axios = require("axios");

// exports.generateArticle = async (topic) => {
//   const prompt = `Write a 400-word tech blog article on the topic: "${topic}". It should be informative, engaging, and sound human-written.`;

//   try {
//     const response = await axios.post(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         model: "openai/gpt-3.5-turbo",
//         messages: [{ role: "user", content: prompt }],
//       },
//       {
//         headers: {
//           "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log("first to", response.data.choices[0].message.content)

//     return response.data.choices[0].message.content;
//   } catch (error) {
//     console.error("🛑 Article generation failed:", error.response?.data || error.message);
//     return null;
//   }
// };

const axios = require("axios");

exports.generateArticle = async () => {
  const prompt = `
Generate a unique and trending tech blog post that fits today's or the past 3 days' hottest topics.

The post must include:
1. A scary, curiosity-triggering, FOMO-driven title (click-worthy, but not clickbait).
2. A short subtitle that supports the title with clarity and intrigue.
3. A complete, 100% human-like, technically toned article (400–500 words).

Guidelines:
- The title should feel urgent, like “The End of Browsers as We Know Them?” or “Why No One Is Talking About This AI Shift”.
- The article must read like it was written by a thoughtful, tech-savvy human writer.
- Use storytelling, vivid examples, and emotional contrast.
- Format using proper paragraphs, no bullet points.
- Output format should be:

Title: [The Killer Title]
Subtitle: [Emotional + Clear Subtitle]
Content:
[Article body]

Make it powerful and medium.com-ready.
`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content = response.data.choices[0].message.content;
    console.log("contetents:=>", content);
    return content;
  } catch (error) {
    console.error("🛑 Article generation failed:", error.response?.data || error.message);
    return null;
  }
};

