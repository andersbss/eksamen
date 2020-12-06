import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import Error from '../../components/errors/Error';
import LoginForm from '../../components/forms/LoginForm';
import { useUserContext } from '../../context/UserContext';
import LoginLayout from '../../layouts/LoginLayout';
import { request } from '../../services/httpService';

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { setUser } = useUserContext();

  const handleLogin = async (e, email, password) => {
    e.preventDefault();

    try {
      setLoading(true);
      const {
        data: { success, data },
      } = await request('POST', '/login', { email, password });

      if (success) {
        const { user, token } = data;
        const expire = JSON.parse(window.atob(token.split('.')[1])).exp;
        setUser({ ...user, expire });
        setLoginSuccess(success);
        setLoading(false);
        setTimeout(() => history.push('/hjem'), 2000);
      } else {
        console.log(data);
        setLoading(false);
        setError(data);
      }
    } catch (error) {
      setLoading(false);
      setError({ success: false, data: 'Unexpected error occurred' });
    }
  };

  return (
    <>
      <Jumbotron headerText="Logg inn" top="70" bottom="0" />
      <LoginLayout>
        <LoginForm
          handleLogin={handleLogin}
          loading={loading}
          error={!!error}
          loggedIn={loginSuccess}
        />
        <NavLink exact to="/registrere">
          Ikke registrert? Registrer deg her!
        </NavLink>
        {error && <Error error={error} />}
      </LoginLayout>
    </>
  );
};

export default Login;
