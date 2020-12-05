import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { articleService, authorService, categoryService } from '../services/index.js';
import response from '../utils/response.js';
import { articleController } from './index.js';

export const getAll = catchAsyncErrors(async (req, res, next) => {
  const articles = await articleService.getAllArticlesFilter(req.query);
  response(res, 200, true, articles);
});

export const getAllPublic = catchAsyncErrors(async (req, res, next) => {
  const articles = await articleService.getAllPublicArticles();
  response(res, 200, true, articles);
});

export const getById = catchAsyncErrors(async (req, res, next) => {
  if (!req.loggedIn) {
    const publicArticle = await articleService.getPublicArticleById(req.params.id, true);
    if (!publicArticle) return next(new ErrorHandler('Article not found', 404));
    response(res, 200, true, publicArticle);
  } else {
    const article = await articleService.getArticleById(req.params.id, true);
    if (!article) return next(new ErrorHandler('Article not found', 404));
    response(res, 200, true, article);
  }
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const { author, category } = req.body;

  if (!(await authorService.getAuthorById(author))) return next(new ErrorHandler('Author not found', 404));
  if (!(await categoryService.getCategoryById(category))) return next(new ErrorHandler('Category not found', 404));

  const article = await articleService.createArticle(req.body);

  response(res, 201, true, article);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const prevArticle = await articleService.getArticleById(id);
  if (!prevArticle) return next(new ErrorHandler('Article not found', 404));

  const updatedArticle = await articleService.updateArticle(id, req.body);
  response(res, 200, true, updatedArticle);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  if (!id) return next(new ErrorHandler('No article id', 400));

  const article = await articleService.getArticleById(id);
  if (!article) return next(new ErrorHandler('Article not found', 404));

  article.remove();

  response(res, 200, true, article);
});
