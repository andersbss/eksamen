import mongoose, { Schema } from 'mongoose';
import { categorySchema } from '../schemas/category';

const Joigoose = require('joigoose')(mongoose);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const CategorySchema = new Schema(Joigoose.convert(categorySchema), options);

const Category = mongoose.model('Category', CategorySchema);

export default Category;
