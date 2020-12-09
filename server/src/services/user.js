import User from '../models/user.js';

export const createUser = async (user) => User.create(user);

export const getUserById = async (id, excludeId) => {
  if (excludeId) return User.findById(id, { _id: 0 });
  return User.findById(id);
};

export const getUserByEmail = async (email, includePassword) => {
  if (includePassword) return User.findOne({ email }).select('+password');
  return User.findOne({ email });
};
