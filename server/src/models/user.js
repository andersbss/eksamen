import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import mongoose, { Schema } from 'mongoose';

import { userSchema } from '../schemas/user';

const Joigoose = require('joigoose')(mongoose, null);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const UserSchema = new Schema(Joigoose.convert(userSchema), options);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
});

UserSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: process.env.JWT_EXPIRES });
};

UserSchema.methods.matchPassword = async function (password) {
  return argon2.verify(this.password, password);
};

UserSchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'publisher',
  justOne: false,
});

const User = mongoose.model('User', UserSchema);

export default User;
