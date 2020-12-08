import { articleService, userLogService, userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';
import ErrorHandler from '../utils/errorHandler.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const { article } = req.body;

  if (!(await articleService.getArticleById(article))) return next(new ErrorHandler('Article not found', 404));

  if (req.body.user) return next(new ErrorHandler('Invalid user', 400));

  if (!req.loggedIn) {
    const userActivity = await userLogService.createUserLog(req.body);
    response(res, 201, true, userActivity);
  } else {
    const userActivity = await userLogService.createUserLog({ ...req.body, user: req.user.id });
    response(res, 201, true, userActivity);
  }
});

export const getCountByArticle = catchAsyncErrors(async (req, res, next) => {
  const articles = await userLogService.getCountByArticle();
  response(res, 200, true, articles);
});

export const getCountByUser = catchAsyncErrors(async (req, res, next) => {
  const users = await userLogService.getCountByUser();
  response(res, 200, true, users);
});

export const getTopArticles = catchAsyncErrors(async (req, res, next) => {
  const articles = await userLogService.getTopArticles();
  response(res, 200, true, articles);
});

export const getAllCsv = catchAsyncErrors(async (req, res, next) => {
  const csvLog = await userLogService.getAllUserLogsCsv();

  if (!csvLog) return next(new ErrorHandler('User Logs not found', 404));

  res.set('Content-Type', 'application/octet-stream');
  res.send(Buffer.from(csvLog));
});
