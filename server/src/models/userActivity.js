import mongoose, { Schema } from 'mongoose';
import { userActivitySchema } from '../schemas/userActivity';

const Joigoose = require('joigoose')(mongoose);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const UserActivitySchema = new Schema(Joigoose.convert(userActivitySchema), options);

const UserActivity = mongoose.model('UserActivity', UserActivitySchema);

export default UserActivity;
