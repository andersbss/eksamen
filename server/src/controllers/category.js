import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';
import { categoryService } from '../services/index.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const category = await categoryService.createCategory(req.body);
  response(req, 201, true, category);
});

export const getAll = catchAsyncErrors(async (req, res, next) => {
  const categories = await categoryService.getAllCategories();
  response(req, 201, true, categories);
});
