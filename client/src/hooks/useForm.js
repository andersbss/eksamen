import { useState, useEffect } from 'react';

const useForm = (execute, validate) => {
  const [errors, setErrors] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    if (errors.length === 0) execute();
  }, [errors, execute]);

  const handleChange = (e) => {
    e.persist();
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(inputs));
  };

  return [inputs, errors, handleChange, handleSubmit];
};

export default useForm;
