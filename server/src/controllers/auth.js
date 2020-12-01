import { userService } from '../services/index.js';
import { sendToken } from '../utils/jwt.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const register = async (req, res, next) => {
  const user = await userService.createUser(req.body);
  sendToken(user, res);
};

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userService.getUserByEmail(email, true);

  if (!user) return next(new ErrorHandler('User not found', 404));

  if (!(await user.matchPassword(password))) return next(new ErrorHandler('User not found', 404));

  sendToken(user, res);
});
