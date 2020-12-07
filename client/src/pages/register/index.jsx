import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import RegisterForm from '../../components/forms/RegsiterForm';
import useForm from '../../hooks/useForm';
import validate from '../../utils/registerFormValidation';
import RegisterLayout from '../../layouts/RegisterLayout';
import { useUserContext } from '../../context/UserContext';
import { request } from '../../services/httpService';

const Register = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { setUser } = useUserContext();
  const {
    inputs,
    handleChange,
    handleSubmit,
    errors,
    hasErrors,
    loading,
    response,
  } = useForm(request, validate, ['POST', '/register']);

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
      <Jumbotron headerText="Registrer" top="70" bottom="0" />
      <RegisterLayout>
        <RegisterForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          hasErrors={hasErrors}
          loggedIn={loginSuccess}
          loading={loading}
          error={error}
        />
        <NavLink exact to="logginn">
          Har du allerede en konto? Logg inn her!
        </NavLink>
      </RegisterLayout>
    </>
  );
};
export default Register;
