import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';

export const me = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.getUserById(req.user.id, true);
  if (!user) return next(new ErrorHandler('Could not find user', 404));
  response(res, 200, true, user);
});
