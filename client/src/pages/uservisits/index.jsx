import React from 'react';
import useFetch from '../../hooks/useFetch';
import Jumbotron from '../../components/common/Jumbotron';
import UserVisitsLayout from '../../layouts/UserVisitsLayout';

const UserVisits = () => {
  const {
    error: userVisitsError,
    loading: userVisitsLoading,
    response: userVisitsResponse,
    isSuccess: isUserVisitsSuccess,
  } = useFetch('GET', 'userlog/uservisits');

  return (
    <>
      <Jumbotron headerText="Statistikk" top="70" bottom="0" />
      <UserVisitsLayout>
        <h2>Article visits</h2>
      </UserVisitsLayout>
    </>
  );
};

export default UserVisits;
