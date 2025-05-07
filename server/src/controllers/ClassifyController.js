import axios from 'axios';
import fs from 'fs';
//import path from 'path';

const Classify = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const imagePath = req.file.path;
    const image = fs.readFileSync(imagePath, { encoding: "base64" });

    const response = await axios({
      method: "POST",
      url: "https://serverless.roboflow.com/waste-classification-uwqfy/1",
      params: {
        api_key: process.env.RF_API_KEY,
      },
      data: image,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Optionally delete the file after classification
    fs.unlinkSync(imagePath);

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to classify image" });
  }
};

export { Classify };
