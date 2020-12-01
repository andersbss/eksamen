import User from '../models/user.js';

export const createUser = async (user) => User.create(user);
