import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import Error from '../../components/errors/Error';
import LoginForm from '../../components/forms/LoginForm';
import { useUserContext } from '../../context/UserContext';
import LoginLayout from '../../layouts/LoginLayout';
import { request } from '../../services/httpService';

const Login = () => {
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
        setLoading(false);
        history.push('/hjem');
      } else {
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
        <LoginForm handleLogin={handleLogin} loading={loading} />
        {error && <Error error={error} />}
      </LoginLayout>
    </>
  );
};

export default Login;
