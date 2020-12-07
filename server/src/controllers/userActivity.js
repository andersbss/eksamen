import { userActivityService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';

export const getCountByArticle = catchAsyncErrors(async (req, res, next) => {
  const articles = await userActivityService.getCountByArticle();
  response(res, 200, true, articles);
});
