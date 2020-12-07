import UserActivity from '../models/userActivity.js';

export const getCountByArticle = async () => {
  const articles = await UserActivity.aggregate([
    {
      $group: { _id: '$article', count: { $sum: 1 } },
    },
  ]);
  return articles;
};
