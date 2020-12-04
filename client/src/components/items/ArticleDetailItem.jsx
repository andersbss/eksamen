import React from 'react';

const ArticleDetailItem = ({ article }) => {
  console.log(article);

  return (
    <article>
      <p>{article.title}</p>
    </article>
  );
};

export default ArticleDetailItem;
