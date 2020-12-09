import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import LoginForm from '../../components/forms/LoginForm';
import { useUserContext } from '../../context/UserContext';
import LoginLayout from '../../layouts/LoginLayout';
import { request } from '../../services/httpService';
import useForm from '../../hooks/useForm';
import validate from '../../utils/loginFormValidation';

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { setUser } = useUserContext();
  const history = useHistory();
  const form = useForm(request, validate, ['POST', '/login']);

  const {
    handleChange,
    handleSubmit,
    errors,
    hasErrors,
    loading,
    response,
  } = form;

  useEffect(() => {
    if (!response) return;
    const {
      data: { success, data },
    } = response;

    if (success) {
      const { user, token } = data;
      const expire = JSON.parse(window.atob(token.split('.')[1])).exp;
      setUser({ ...user, expire });
      setLoginSuccess(success);
      setTimeout(() => history.push('/hjem'), 1500);
    } else {
      setError(data);
    }
  }, [history, response, setUser]);

  return (
    <>
      <Jumbotron headerText="Logg inn" top="70" bottom="0" />
      <LoginLayout>
        <LoginForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          hasErrors={hasErrors}
          loggedIn={loginSuccess}
          loading={loading}
          error={error}
        />
        <NavLink exact to="/registrere">
          Ikke registrert? Registrer deg her!
        </NavLink>
      </LoginLayout>
    </>
  );
};

export default Login;
