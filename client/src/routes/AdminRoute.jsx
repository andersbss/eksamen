import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

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

export default AdminRoute;
