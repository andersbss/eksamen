import UserLog from '../models/userLog.js';

export const createUserLog = (data) => UserLog.create(data);

export const getCountByArticle = async () => {
  const articles = await UserLog.aggregate([
    {
      $group: { _id: '$article', count: { $sum: 1 } },
    },
    {
      $lookup: {
        from: 'articles',
        localField: '_id',
        foreignField: '_id',
        as: 'article',
      },
    },
    { $unwind: '$article' },
    {
      $lookup: {
        from: 'categories',
        localField: 'article.category',
        foreignField: '_id',
        as: 'category',
      },
    },
    {
      $unwind: '$category',
    },
    { $unwind: '$article' },
    {
      $lookup: {
        from: 'authors',
        localField: 'article.author',
        foreignField: '_id',
        as: 'author',
      },
    },
    {
      $unwind: '$author',
    },
  ]);
  return articles;
};

export const getCountByUser = async () => {
  const users = await UserLog.aggregate([]);
  return users;
};
