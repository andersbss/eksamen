import mongoose, { Schema } from 'mongoose';
import { IMAGE_FILE_PATH, IMAGE_FILE_MIMETYPE } from '../constants/dataRules';

const ImageSchema = new Schema(
  {
    file_path: IMAGE_FILE_PATH,
    file_mimetype: IMAGE_FILE_MIMETYPE,
  },
  { timestamps: true }
);

const Image = mongoose.model('Image', ImageSchema);

export default Image;
