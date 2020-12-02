import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { articleService, authorService, categoryService } from '../services/index.js';
import response from '../utils/response.js';

export const createArticle = catchAsyncErrors(async (req, res, next) => {
  const { author, category } = req.body;
  req.body.publisher = req.body.user.id;

  if (!(await authorService.getAuthorById(author))) return next(new ErrorHandler('Author not found', 404));
  if (!(await categoryService.getCategoryById(category))) return next(new ErrorHandler('Category not found', 404));

  const article = await articleService.createArticle(req.body);

  response(res, 201, true, article);
});
