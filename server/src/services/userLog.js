import UserLog from '../models/userLog.js';

const ARTICLE_LOOKUP = [
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
  {
    $project: {
      article: '$_id',
      count: '$count',
      title: '$article.title',
      ingress: '$article.ingress',
      authorFirstName: '$author.firstName',
      authorLastName: '$author.lastName',
      category: '$category.title',
      createdAt: '$article.createdAt',
    },
  },
];

export const createUserLog = (data) => UserLog.create(data);

export const getAllUserLogs = () => UserLog.find();

export const getCountByArticle = async () => {
  const articles = await UserLog.aggregate([
    {
      $group: { _id: '$article', count: { $sum: 1 } },
    },
    ...ARTICLE_LOOKUP,
  ]);
  return articles;
};

export const getTopArticles = async () => {
  const articles = await UserLog.aggregate([
    {
      $group: { _id: '$article', count: { $sum: 1 } },
    },
    {
      $sort: { count: -1 },
    },
    { $limit: 10 },
    ...ARTICLE_LOOKUP,
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
