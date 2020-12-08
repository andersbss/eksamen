import mongoose, { Schema } from 'mongoose';
import { articleSchema } from '../schemas/article';

const Joigoose = require('joigoose')(mongoose);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const ArticleSchema = new Schema(
  {
    ...Joigoose.convert(articleSchema),
    readTime: {
      type: Number,
    },
  },
  options
);

ArticleSchema.index({ title: 'text' });

ArticleSchema.virtual('userlogs', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'article',
  justOne: false,
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
