import { articleService, userLogService, userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';
import ErrorHandler from '../utils/errorHandler.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  // Fix with auth later

  const { user, article } = req.body;

  if (!(await userService.getUserById(user))) return next(new ErrorHandler('User not found', 404));
  if (!(await articleService.getArticleById(article))) return next(new ErrorHandler('Article not found', 404));

  const userActivity = await userLogService.createUserLog(req.body);
  response(res, 201, true, userActivity);
});

export const getCountByArticle = catchAsyncErrors(async (req, res, next) => {
  const articles = await userLogService.getCountByArticle();
  response(res, 200, true, articles);
});
