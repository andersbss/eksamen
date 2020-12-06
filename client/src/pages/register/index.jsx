import React from 'react';
import { NavLink } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import RegisterForm from '../../components/forms/RegsiterForm';
import RegisterLayout from '../../layouts/RegisterLayout';

const Register = () => {
  console.log();

  return (
    <>
      <Jumbotron headerText="Registrer" top="70" bottom="0" />
      <RegisterLayout>
        <RegisterForm />
        <NavLink exact to="logginn">
          Har du allerede en konto? Logg inn her!
        </NavLink>
      </RegisterLayout>
    </>
  );
};
export default Register;
