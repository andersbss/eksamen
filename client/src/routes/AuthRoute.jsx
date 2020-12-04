import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const AuthRoute = ({
  redirectPath,
  loginRequired,
  adminRequired,
  children,
  ...rest
}) => {
  const { loggedIn, loading, isAdmin } = useUserContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn && !loading ? (
          <>{children}</>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
