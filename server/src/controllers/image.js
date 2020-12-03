import path from 'path';
import { imageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import response from '../utils/response.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorHandler('An image must be picked before uploading', 400));
  }
  const image = await imageService.uploadImage(req.file);
  response(res, 201, true, image);
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const image = await imageService.getImageById(req.params.id);
  if (!image) {
    return next(new ErrorHandler('Image not found', 404));
  }

  res.set({
    'Content-Type': image.file_mimetype,
  });
  res.sendFile(path.join(__dirname, '..', image.file_path));
});
