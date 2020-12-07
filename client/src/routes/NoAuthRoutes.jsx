import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const NoAuthRoute = ({ children, ...rest }) => {
  const { loggedIn, loading, user } = useUserContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !loggedIn && !loading ? (
          <>{children}</>
        ) : (
          <Redirect
            to={{
              pathname: '/todos',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

NoAuthRoute.propTypes = {
  children: PropTypes.node,
};

export default NoAuthRoute;
