import mongoose, { Schema } from 'mongoose';
import { contactSchema } from '../schemas/contact';

const Joigoose = require('joigoose')(mongoose);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const ContactSchema = new Schema(Joigoose.convert(contactSchema), options);

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
