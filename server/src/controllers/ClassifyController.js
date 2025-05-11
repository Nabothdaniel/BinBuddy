import axios from 'axios';
import fs from 'fs';

const Classify = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const imagePath = req.file.path;
    const image = fs.readFileSync(imagePath, { encoding: "base64" });

    // Log image properties for debugging
    const imageStats = fs.statSync(imagePath);
    console.log('Image uploaded:', {
      path: imagePath,
      size: imageStats.size,
      encoding: "base64"
    });

    const response = await axios({
      method: "POST",
      url: "https://serverless.roboflow.com/ai-waste-povs/3",
      params: {
        api_key: process.env.RF_API_KEY,
      },
      data: image,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Log API response for further inspection
    console.log('API Response:', response.data);

    // Optionally delete the file after classification
    fs.unlinkSync(imagePath);

    // Check if predictions exist and handle accordingly
    if (response.data.predictions && response.data.predictions.length > 0) {
      const classification = response.data.predictions[0]?.class || '🗑️ Unknown';
      res.status(200).json({ classification });
      console.log('Classification result:', classification);
    } else {
      // If no predictions, return a message indicating the model couldn't classify the image
      res.status(500).json({ error: "No classification result. The model couldn't classify this image." });
      console.log('No classification result. Model returned empty predictions.');
    }

  } catch (error) {
    console.error('Error classifying image:', error.message);
    res.status(500).json({ error: "Failed to classify image" });
  }
};

export { Classify };
