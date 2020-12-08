import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const SuperAdminRoute = ({ children, ...rest }) => {
  const { loggedIn, userLoading, isSuperAdmin } = useUserContext();

  return !userLoading ? (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn && isSuperAdmin ? (
          <>{children}</>
        ) : (
          <Redirect
            to={{
              pathname: '/notFound',
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

export default SuperAdminRoute;
