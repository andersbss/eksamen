import { useState, useEffect } from 'react';

const useForm = (callBack, validate, params) => {
  const [errors, setErrors] = useState([]);
  const [inputs, setInputs] = useState({});
  const [readySubmit, setReadySubmit] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const execute = async () => {
      const res = await callBack(...params, inputs);
      setResponse(res);
      setReadySubmit(false);
    };
    if (Object.keys(errors).length === 0 && readySubmit) execute();
  }, [callBack, errors, inputs, params, readySubmit]);

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

  return { inputs, errors, handleChange, handleSubmit, response };
};

export default useForm;
