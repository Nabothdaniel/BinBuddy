import axios from "axios";

/**
 * Classify uploaded image using Roboflow API (Render-safe)
 */
const Classify = async (req, res) => {
  try {
    // ✅ 1. Ensure an image file exists
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    // ✅ 2. Convert uploaded buffer to base64
    const base64Image = req.file.buffer.toString("base64");

    console.log("📸 Image uploaded:", {
      filename: req.file.originalname,
      size: req.file.size,
      encoding: "base64",
    });

    // ✅ 3. Send base64 image to Roboflow model
    const response = await axios({
      method: "POST",
      url: "https://serverless.roboflow.com/ai-waste-povs/3",
      params: {
        api_key: process.env.RF_API_KEY,
      },
      data: base64Image,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      timeout: 15000, // 15s timeout to avoid long waits
    });

    console.log("🤖 Roboflow Response:", response.data);

    // ✅ 4. Extract classification result
    const predictions = response.data?.predictions || [];
    if (predictions.length > 0) {
      const bestPrediction = predictions[0];
      const classification = bestPrediction?.class || "🗑️ Unknown";
      const confidence = (bestPrediction?.confidence * 100).toFixed(2);

      console.log("✅ Classification result:", classification, `(${confidence}%)`);
      return res.status(200).json({
        classification,
        confidence: `${confidence}%`,
      });
    }

    // ✅ 5. Handle case: no predictions found
    console.log("⚠️ No classification result. Empty predictions array.");
    return res.status(200).json({
      message:
        "No classification result. The model couldn't recognize any known waste items.",
    });
  } catch (error) {
    console.error("❌ Error classifying image:", error.message);

    // ✅ 6. Handle possible axios/network issues clearly
    if (error.response) {
      console.error("Roboflow API Error:", error.response.data);
    }

    return res.status(500).json({
      error: "Failed to classify image",
      details: error.response?.data || error.message,
    });
  }
};

export { Classify };
