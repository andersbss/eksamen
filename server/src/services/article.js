import Article from '../models/article.js';

export const getArticleById = (id) => Article.findById(id);

export const createArticle = (article) => Article.create(article);

export const getAllArticles = () => Article.find();

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
