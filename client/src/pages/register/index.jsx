import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import RegisterForm from '../../components/forms/RegsiterForm';
import RegisterLayout from '../../layouts/RegisterLayout';

const Register = () => {
  const handleRegister = () => {
    // Post logic
  };

  return (
    <>
      <Jumbotron headerText="Registrer" top="70" bottom="0" />
      <RegisterLayout>
        <RegisterForm handleRegister={handleRegister} />
        <NavLink exact to="logginn">
          Har du allerede en konto? Logg inn her!
        </NavLink>
      </RegisterLayout>
    </>
  );
};
export default Register;
