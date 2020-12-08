import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import response from '../utils/response.js';
import { categoryService } from '../services/index.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const { title } = req.body;

  if (await categoryService.getCategoryByTitle(title)) return next(new ErrorHandler('Category already exist', 400));

  const category = await categoryService.createCategory(req.body);
  response(res, 201, true, category);
});

export const getAll = catchAsyncErrors(async (req, res, next) => {
  const categories = await categoryService.getAllCategories();
  response(res, 200, true, categories);
});
