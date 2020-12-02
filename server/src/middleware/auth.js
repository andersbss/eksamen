import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from './catchAsync.js';
import { userService } from '../services/index.js';

export const authenticate = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookies?.token) token = req.cookies.token;

  console.log(token);
  if (!token) return next(new ErrorHandler('No token', 401));

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) return next(new ErrorHandler('Invalid token', 403));

    const { id } = decoded;
    if (!mongoose.Types.ObjectId.isValid(id)) return next(new ErrorHandler('Invalid token', 403));

    console.log(id);
    const user = await userService.getUserById(id);

    console.log(user);

    if (!user) return next(new ErrorHandler('User not found', 404));

    req.user = user;

    next();
  });
});
