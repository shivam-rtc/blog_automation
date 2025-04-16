const axios = require("axios");
const FormData = require("form-data");

exports.generateImage = async (prompt) => {
  try {
    const form = new FormData();
    form.append("prompt", prompt);
    form.append("aspect_ratio", "16:9");
    form.append("output_format", "png"); // ✅ valid format


    const response = await axios.post(
      "https://api.stability.ai/v2beta/stable-image/generate/core",
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    return response.data.image;
  } catch (error) {
    console.error("🛑 Image generation failed:", error.response?.data || error.message);
    return null;
  }
};
