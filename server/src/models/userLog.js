import mongoose, { Schema } from 'mongoose';
import { userActivitySchema } from '../schemas/userActivity';

const Joigoose = require('joigoose')(mongoose);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const UserLogSchema = new Schema(Joigoose.convert(userActivitySchema), options);

const UserLog = mongoose.model('UserActivity', UserLogSchema);

export default UserLog;
