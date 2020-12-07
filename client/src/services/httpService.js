import http from '../utils/http';

export const getCsrfToken = async () => {
  try {
    const { data } = await http.get('/csrf-token');
    http.defaults.headers['X-CSRF-Token'] = data.data;
  } catch (err) {
    return err.response;
  }
};

export const request = async (method, endpoint, payload = null) => {
  try {
    if (method === 'POST' || method === 'PUT') {
      await getCsrfToken();
    }
    return await http({ method, url: endpoint, data: payload });
  } catch (error) {
    if (error.response) return error.response;
    return { data: { success: false, data: 'Connection error', status: 503 } };
  }
};
