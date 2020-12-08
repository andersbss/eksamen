import React from 'react';
import useFetch from '../../hooks/useFetch';
import Jumbotron from '../../components/common/Jumbotron';
import UserVisitsLayout from '../../layouts/UserVisitsLayout';
import Loader from '../../components/animations/Loader';
import UserVisitsList from '../../components/lists/UserVisitsList';

const UserVisits = () => {
  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    'userlog/uservisits'
  );

  return (
    <>
      <Jumbotron headerText="Statistikk" top="70" bottom="0" />
      <UserVisitsLayout>
        {loading && <Loader />}
        {!loading && !error && <UserVisitsList users={response} />}
      </UserVisitsLayout>
    </>
  );
};

export default UserVisits;
