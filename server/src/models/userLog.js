import mongoose, { Schema } from 'mongoose';
import { userLogSchema } from '../schemas/userLog';

const Joigoose = require('joigoose')(mongoose);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const UserLogSchema = new Schema(Joigoose.convert(userLogSchema), options);

UserLogSchema.virtual('articles', {
  ref: 'UserLog',
  localField: '_id',
  foreignField: 'article',
  justOne: false,
});

const UserLog = mongoose.model('UserLog', UserLogSchema);

export default UserLog;
