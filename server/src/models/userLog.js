import mongoose, { Schema } from 'mongoose';
import { userLogSchema } from '../schemas/userLog';

const Joigoose = require('joigoose')(mongoose);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const UserLogSchema = new Schema(Joigoose.convert(userLogSchema), options);

const UserLog = mongoose.model('UserLog', UserLogSchema);

export default UserLog;
