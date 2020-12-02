import mongoose, { Schema } from 'mongoose';
import { CATEGORY_TITLE } from '../constants/dataRules';

const CategorySchema = new Schema({
  title: CATEGORY_TITLE,
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
