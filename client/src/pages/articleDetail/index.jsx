import React, { useState, useEffect } from 'react';
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
  const [deleteSuccess, setDeleteSuccess] = useState(true);
  const [deleteError, setDeleteError] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const { loggedIn, isAdmin } = useUserContext();
  const { error, loading, response, isSuccess, reqStatus } = useFetch(
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
        history.push('/fagartikler');
      } else {
        setDeleteSuccess(false);
        setDeleteError(data);
      }
    } catch (error) {
      deleteError({ success: false, data: 'Unexpected error occurred' });
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleEdit = () => {
    history.push(`/redigerartikkel/${id}`);
  };

  useEffect(() => {
    if (response) {
      if (!loggedIn && !response.public) {
        history.push('/fagartikler');
      }
    }
  }, [history, loggedIn, response]);

  return (
    <>
      {reqStatus === 404 ? (
        <NotFound />
      ) : (
        <>
          <Jumbotron headerText={loading ? '...' : response?.title} />
          <ArticleDetailLayout>
            {loading && <Loader />}
            {isSuccess && !loading && (
              <ArticleDetailArticle article={response} />
            )}
            {loggedIn && isAdmin && (
              <DetailArticleToggles
                deleteLoading={deleteLoading}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )}
            {!deleteSuccess && (
              <p>Det oppstod en feil, prøv igjen. ({deleteError})</p>
            )}
            {!isSuccess && !loading && <Error error={error} />}
          </ArticleDetailLayout>
        </>
      )}
    </>
  );
};

export default ArticleDetail;
