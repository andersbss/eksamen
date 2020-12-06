import { useState, useEffect } from 'react';

const useForm = (callBack, validate) => {
  const [errors, setErrors] = useState([]);
  const [inputs, setInputs] = useState({});
  const [readySubmit, setReadySubmit] = useState(false);

  useEffect(() => {
    const execute = async () => {
      await callBack();
    };
    if (Object.keys(errors).length === 0 && readySubmit) execute();
  }, [errors, callBack, readySubmit]);

  useEffect(() => {
    setErrors(validate(inputs));
  }, [inputs, validate]);

  const handleChange = (e) => {
    e.persist();
    setReadySubmit(false);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReadySubmit(true);
  };

  return [inputs, errors, handleChange, handleSubmit];
};

export default useForm;
