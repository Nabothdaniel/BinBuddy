import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|webp/;
  const ext = file.originalname.toLowerCase();
  allowed.test(ext) ? cb(null, true) : cb(new Error("Only image files allowed"), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // limit to 5 MB
});

export default upload;
