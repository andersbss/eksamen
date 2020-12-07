import UserActvity from '../models/userActivity.js';

export const getCountByArticle = async () => {
  const articles = await UserActvity.aggregate([
    {
      $group: { _id: '$article', count: { $sum: 1 } },
    },
  ]);
  return articles;
};
