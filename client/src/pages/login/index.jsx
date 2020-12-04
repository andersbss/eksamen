import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import LoginForm from '../../components/forms/LoginForm';
import LoginLayout from '../../layouts/LoginLayout';

const Login = () => (
  <>
    <Jumbotron headerText="Logg inn" top="70" bottom="0" />
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  </>
);

export default Login;
