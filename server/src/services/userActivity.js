import UserActivity from '../models/userActivity.js';

export const createUserActivity = (data) => UserActivity.create(data);

export const getCountByArticle = async () => {
  const articles = await UserActivity.aggregate([
    {
      $group: { _id: '$article', count: { $sum: 1 } },
    },
  ]);
  console.log(articles);
  return articles;
};
