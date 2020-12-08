import { useState, useEffect } from 'react';
import { request } from '../services/httpService';

const useFetch = (method, endpoint, wait = false, run, payload = null) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reqStatus, setReqStatus] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const {
          data: { success, data, status },
        } = await request(method, endpoint, payload);
        setReqStatus(status);
        if (success) setResponse(data);
        else setError(data);
        setIsSuccess(success);
      } catch (error) {
        setError({ success: false, data: 'Unexpected error occurred' });
      } finally {
        setLoading(false);
      }
    };
    if (!wait) loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, endpoint, wait, run]);
  return { error, loading, response, isSuccess, reqStatus };
};

export default useFetch;
