import React from 'react';
import { NavLink } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import RegisterForm from '../../components/forms/RegsiterForm';
import useForm from '../../hooks/useForm';
import validate from '../../utils/registerFormValidation';
import RegisterLayout from '../../layouts/RegisterLayout';
import { request } from '../../services/httpService';

const Register = () => {
  const { inputs, handleChange, handleSubmit, response } = useForm(
    request,
    validate,
    ['POST', '/register']
  );

  return (
    <>
      <Jumbotron headerText="Registrer" top="70" bottom="0" />
      <RegisterLayout>
        <RegisterForm handleSubmit={handleSubmit} handleChange={handleChange} />
        <NavLink exact to="logginn">
          Har du allerede en konto? Logg inn her!
        </NavLink>
      </RegisterLayout>
    </>
  );
};
export default Register;
