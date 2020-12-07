import { useState, useEffect } from 'react';
import useDidMount from './didMount';

const useForm = (callBack, validate, params) => {
  const [errors, setErrors] = useState([]);
  const [hasErrors, setHasErrors] = useState(true);
  const [inputs, setInputs] = useState({});
  const [readySubmit, setReadySubmit] = useState(false);
  const [response, setResponse] = useState(null);
  const didMount = useDidMount();

  useEffect(() => {
    const execute = async () => {
      const res = await callBack(...params, inputs);
      setResponse(res);
    };
    if (Object.keys(errors).length === 0 && readySubmit) {
      execute();
      setReadySubmit(false);
    }
  }, [callBack, errors, inputs, params, readySubmit]);

  useEffect(() => {
    setErrors(validate(inputs));
  }, [inputs, validate]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && !didMount) setHasErrors(false);
  }, [errors, didMount]);

  const handleChange = (e) => {
    e.persist();
    setReadySubmit(false);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReadySubmit(true);
  };

  return { inputs, errors, hasErrors, handleChange, handleSubmit, response };
};

export default useForm;
