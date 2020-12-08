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
  const users = await UserLog.aggregate([
    {
      $group: { _id: '$user', count: { $sum: 1 } },
    },
    {
      $lookup: {
        from: 'users',
        localField: '_id',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: '$user' },
    {
      $project: {
        count: '$count',
        email: '$user.email',
        firstName: '$user.firstName',
        lastName: '$user.lastName',
      },
    },
  ]);
  return users;
};

export const getTopArticles = async () => {
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
  ]);
  return articles;
};
