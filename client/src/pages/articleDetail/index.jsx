import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleDetailLayout from '../../layouts/ArticleDetailLayout';
import Error from '../../components/errors/Error';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/animations/Loader';
import NotFound from '../notFound';
import ArticleDetailArticle from '../../components/articles/ArticleDetailArticle';
import DetailArticleToggles from '../../components/toggles/DetailArticleToggles';
import { useUserContext } from '../../context/UserContext';
import { request } from '../../services/httpService';

const ArticleDetail = () => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const { loggedIn, isAdmin } = useUserContext();
  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    `articles/${id}`
  );

  const handleDelete = async () => {
    try {
      setDeleteLoading(true);
      const {
        data: { success, data },
      } = await request('DELETE', `articles/${id}`);

      if (success) {
        setDeleteSuccess(true);
        setTimeout(() => history.push('/fagartikler'));
      } else {
        setDeleteError(data);
      }
    } catch (error) {
      deleteError({ success: false, data: 'Unexpected error occurred' });
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleEdit = () => {
    console.log('edit');
  };

  return (
    <>
      {error === 'Resource not found. Invalid _id' ? (
        <NotFound />
      ) : (
        <>
          <Jumbotron headerText={loading ? '...' : response.title} />
          <ArticleDetailLayout>
            {loading && <Loader />}
            {isSuccess && !loading && (
              <ArticleDetailArticle article={response} />
            )}
            {loggedIn && isAdmin && (
              <DetailArticleToggles
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )}
            {!isSuccess && !loading && <Error error={error} />}
          </ArticleDetailLayout>
        </>
      )}
    </>
  );
};

export default ArticleDetail;
