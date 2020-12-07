import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Loader from '../components/animations/Loader';

const AdminRoute = ({ children, ...rest }) => {
  const { loggedIn, userLoading, isAdmin } = useUserContext();

  return !userLoading ? (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn && isAdmin ? (
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
    <></>
  );
};

export default AdminRoute;
