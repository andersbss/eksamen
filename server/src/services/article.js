import Article from '../models/article.js';
import { ApiFilter } from '../utils/apiFilter.js';
import ErrorHandler from '../utils/errorHandler.js';

export const getArticleById = (id, withPopulation) => {
  if (withPopulation) return Article.findById(id).populate(['category', 'author']);
  return Article.findById(id);
};

export const getPublicArticleById = (id, withPopulation) => {
  if (withPopulation) return Article.findOne({ _id: id, public: true }).populate(['category', 'author']);
  return Article.findOne({ _id: id, public: true });
};

export const getAllArticles = async (queryStr, isPublic) => {
  const { limit, page } = queryStr;
  const filter = new ApiFilter(Article.find(), isPublic ? { ...queryStr, public: true } : queryStr)
    .filter()
    .searchByQuery();

  const articles = await filter.query;
  const paginated = await filter.pagination().query.populate('category');

  return {
    totalArticles: articles.length,
    totalPages: Math.ceil(articles.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginated,
  };
};

export const createArticle = (article) => Article.create(article);

export const updateArticle = (id, article) => {
  const updateOptions = {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  };

  return Article.findByIdAndUpdate(id, article, updateOptions);
};

export const removeArticle = async (id) => {
  const article = await getArticleById(id);
  article.remove();
};
