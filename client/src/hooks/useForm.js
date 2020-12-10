import { useState, useEffect } from 'react';
import useDidMount from './useDidMount';

const useForm = (callBack, validate, params, wait = false) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(true);
  const [inputs, setInputs] = useState({});
  const [readySubmit, setReadySubmit] = useState(false);
  const [response, setResponse] = useState(null);
  const didMount = useDidMount();

  useEffect(() => {
    const execute = async () => {
      if (!wait) {
        setLoading(true);
        const res = await callBack(...params, inputs);
        setResponse(res);
        setLoading(false);
      }
    };
    if (Object.keys(errors).length === 0 && readySubmit) {
      execute();
      setReadySubmit(false);
    }
  }, [callBack, errors, inputs, params, readySubmit, wait]);

  useEffect(() => {
    setErrors(validate(inputs));
  }, [inputs, validate]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && !didMount) setHasErrors(false);
  }, [errors, didMount]);

  const handleChange = (e) => {
    e.persist();
    if (Object.keys(errors).length === 0) setHasErrors((prev) => !prev);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReadySubmit(true);
  };

  return {
    inputs,
    errors,
    hasErrors,
    handleChange,
    handleSubmit,
    loading,
    response,
    setInputs,
  };
};

export default useForm;
