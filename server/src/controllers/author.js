import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';
import { authorService } from '../services/index.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const category = await authorService.createAuthor(req.body);
  response(res, 201, true, category);
});

export const getAll = catchAsyncErrors(async (req, res, next) => {
  const authors = await authorService.getAllAuthors();
  response(res, 201, true, authors);
});
