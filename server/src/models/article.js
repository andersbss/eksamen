import mongoose, { Schema } from 'mongoose';
import { articleSchema } from '../schemas/article';

const Joigoose = require('joigoose')(mongoose);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const ArticleSchema = new Schema(Joigoose.convert(articleSchema), options);

ArticleSchema.index({ title: 'index' });

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
