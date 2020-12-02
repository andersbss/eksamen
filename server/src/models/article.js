import mongoose, { Schema } from 'mongoose';
import { ARTICLE_CONTENT, ARTICLE_INGRESS, ARTICLE_TITLE } from '../constants/dataRules';

const ArticleSchema = new Schema(
  {
    title: ARTICLE_TITLE,
    ingress: ARTICLE_INGRESS,
    content: ARTICLE_CONTENT,
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'Author',
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    publisher: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Author = mongoose.model('Article', ArticleSchema);

export default Author;
