import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { userService } from '../services/index.js';
import { sendToken } from '../utils/jwt.js';
import response from '../utils/response.js';

export const register = catchAsyncErrors(async (req, res) => {
  const user = await userService.createUser(req.body);
  sendToken(user, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userService.getUserByEmail(email, true);

  if (!user) return next(new ErrorHandler('User not found', 404));

  if (!(await user.matchPassword(password))) return next(new ErrorHandler('User not found', 404));

  sendToken(user, res);
});

export const logout = catchAsyncErrors(async (req, res) => {
  res.cookie('token', 'none', { expires: new Date(Date.now()), httpOnly: true });
  response(res, 200, true, 'Logged out');
});
