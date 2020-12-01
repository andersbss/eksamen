import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import mongoose, { Schema } from 'mongoose';
import { USER_FIRSTNAME, USER_LASTNAME, USER_EMAIL, USER_PASSWORD, USER_ROLES } from '../constants/dataRules';

const UserSchema = new Schema(
  {
    firstName: USER_FIRSTNAME,
    lastName: USER_LASTNAME,
    email: USER_EMAIL,
    role: USER_ROLES,
    password: { ...USER_PASSWORD, select: false },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

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
