import multer from 'multer';
import ErrorHandler from '../utils/errorHandler';

function fileFilter(req, file, cb) {
  const filetypes = /\.(jpeg|jpg|png)$/;
  if (!file.originalname.match(filetypes)) {
    return cb(new ErrorHandler('Only .jpeg, .jpg and .png files can be uploaded', 400));
  }
  cb(null, true);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images');
  },
  // Use date as custom value
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 6000000 }, // 6MB file size limit
  fileFilter,
}).single('image');
