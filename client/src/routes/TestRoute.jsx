import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from '../components/animations/Loader';
import { useUserContext } from '../context/UserContext';

const TestRoute = ({ children, ...rest }) => {
  const { loggedIn, loading, isAdmin } = useUserContext();

  return !loading ? (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn && isAdmin && !loading ? (
          <>{children}</>
        ) : (
          <Redirect
            to={{
              pathname: '/logginn',
              state: { from: location },
            }}
          />
        )
      }
    />
  ) : (
    <Loader />
  );
};

export default TestRoute;
