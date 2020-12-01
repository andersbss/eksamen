import { userService } from '../services/index.js';
import { sendToken } from '../utils/jwt.js';

export const register = async (req, res, next) => {
  const user = await userService.createUser(req.body);
  sendToken(user, res);
};
