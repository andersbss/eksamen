import options from 'dotenv/lib/env-options';
import response from './response';

export const sendToken = (user, res) => {
  const token = user.getToken();

  const opts = {
    expires: new Date(Date.now() + process.env.EXPIRE_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: true,
  };

  if (process.env.NODE_ENV === 'production') options.secure = true;

  const data = {
    token,
    user: {
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  };
  response(res.cookie('token', token, opts), 201, true, data);
};
