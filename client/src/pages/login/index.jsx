import React, { useState } from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import Error from '../../components/errors/Error';
import LoginForm from '../../components/forms/LoginForm';
import LoginLayout from '../../layouts/LoginLayout';
import { request } from '../../services/httpService';

const Login = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleLogin = async (e, email, password) => {
    e.preventDefault();

    try {
      setLoading(true);
      const {
        data: { success, data },
      } = await request('POST', '/login', { email, password });

      if (success) {
        if (success) {
          console.log('logged inn');
          const { user, token } = data;
          const expire = JSON.parse(window.atob(token.split('.')[1])).exp;
          // setUser({ ...user, expire });
        } else setError(data);
      }
    } catch (error) {
      setLoading(false);
      setError({ success: false, data: 'Unexpected error occurred' });
    } finally {
      setLoading(false);
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
