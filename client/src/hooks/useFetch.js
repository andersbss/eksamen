import { useState, useEffect } from 'react';
import { request } from '../services/httpService';

const useFetch = (method, endpoint, loadOnMount = true, payload = null) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const {
          data: { success, data },
        } = await request(method, endpoint, payload);
        if (success) setResponse(data);
        else setError(data);
        setIsSuccess(success);
      } catch (error) {
        setError({ success: false, data: 'Unexpected error occurred' });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [method, endpoint, payload, loadOnMount]);
  return { error, loading, response, isSuccess };
};

export default useFetch;
