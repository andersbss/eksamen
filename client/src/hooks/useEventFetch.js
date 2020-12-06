import { useState } from 'react';

const useEventFetch = (callBack, method, endpoint, payload) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reqStatus, setReqStatus] = useState(null);

  const fetch = async () => {
    try {
      setLoading(true);
      const {
        data: { success, data, status },
      } = await callBack(method, endpoint, payload);
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

  return { fetch, loading, error, isSuccess, reqStatus, response };
};

export default useEventFetch;
