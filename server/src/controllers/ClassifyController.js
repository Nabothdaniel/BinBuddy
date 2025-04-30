import upload from '../middlewares/multer.js';
import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

export const Classify = [
  upload.single('image'),
  async (req, res) => {
    try {
      const imageBytes = fs.readFileSync(req.file.path, { encoding: 'base64' });

      const response = await axios.post(
        'https://api.clarifai.com/v2/models/general-image-recognition/outputs',
        {
          inputs: [
            {
              data: {
                image: {
                  base64: imageBytes,
                },
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Key ${process.env.CLARIFAI_PAT}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const topItem = response.data.outputs[0].data.concepts[0].name;

      const mapToCategory = (item) => {
        if (/bottle|can|plastic|cardboard|metal/i.test(item)) return 'recyclable';
        if (/banana|food|apple|organic/i.test(item)) return 'compostable';
        return 'landfill';
      };

      res.json({
        item: topItem,
        category: mapToCategory(topItem),
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Classification failed' });
    }
  },
];
