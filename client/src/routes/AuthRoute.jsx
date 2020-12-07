import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const AuthRoute = ({ children, ...rest }) => {
  const { loggedIn, loading, user } = useUserContext();
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

AuthRoute.propTypes = {
  children: PropTypes.node,
};

export default AuthRoute;
