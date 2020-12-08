import mongoose, { Schema } from 'mongoose';
import { articleSchema } from '../schemas/article';

mongoose.set('useFindAndModify', false);

const Joigoose = require('joigoose')(mongoose);

const options = { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } };

const ArticleSchema = new Schema(
  {
    ...Joigoose.convert(articleSchema),
    publisher: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    readTime: {
      type: Number,
    },
  },
  options
);

ArticleSchema.index({ title: 'text' });

ArticleSchema.statics.calcReadTime = async function () {
  const time = await this.aggregate([
    { $sort: { createdAt: -1 } },
    { $project: { words: { $split: ['$content', ' '] }, qty: 1 } },
  ]);

  await this.findOneAndUpdate(
    { _id: time[0]._id },
    { $set: { readTime: Math.round((time[0].words.length / 200 + Number.EPSILON) * 100) / 100 } }
  );
};

ArticleSchema.post('save', async function () {
  await this.constructor.calcReadTime();
});

ArticleSchema.virtual('userlogs', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'article',
  justOne: false,
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
