import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import LoginForm from '../../components/forms/LoginForm';

const Login = () => (
  <>
    <Jumbotron headerText="Logg inn" />

    <LoginForm />
  </>
);

export default Login;
