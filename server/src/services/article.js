import Article from '../models/article.js';

export const getArticleById = (id, withPopulation) => {
  if (withPopulation) return Article.findById(id).populate(['category', 'author']);
  return Article.findById(id);
};

export const getPublicArticleById = (id, withPopulation) => {
  if (withPopulation) return Article.findOne({ _id: id, public: true }).populate(['category', 'author']);
  return Article.findOne({ _id: id, public: true });
};

export const getAllArticles = () => Article.find().populate('category');

export const getAllPublicArticles = () => Article.find({ public: true }).populate('category');

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
