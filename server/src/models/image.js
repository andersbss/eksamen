import mongoose, { Schema } from 'mongoose';

const ImageSchema = new Schema(
  {
    file_path: {
      type: String,
      required: true,
    },
    file_mimetype: {
      type: String,
      required: true,
      // min: [1, 'Mime type has to be at least 1 digit long'],
    },
  },
  { timestamps: true }
);

const Image = mongoose.model('Image', ImageSchema);

export default Image;
