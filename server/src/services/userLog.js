import UserLog from '../models/userLog.js';

export const createUserLog = (data) => UserLog.create(data);

export const getCountByArticle = async () => {
  const articles = await UserLog.aggregate([
    {
      $group: { _id: '$article', count: { $sum: 1 } },
    },
  ]);
  console.log(articles);
  return articles;
};
