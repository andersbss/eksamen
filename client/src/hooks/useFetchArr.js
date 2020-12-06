import { useState, useEffect } from 'react';
import { request } from '../services/httpService';

// This is temporary. I will make the other one to reutrn array soon.

const useFetch = (method, endpoint, wait = false, payload = null) => {
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
  }, [method, endpoint, payload, wait]);
  return [error, loading, response, isSuccess, reqStatus];
};

export default useFetch;
