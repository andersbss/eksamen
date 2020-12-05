import http from '../utils/http';

export const request = async (method, endpoint, payload = null) => {
  try {
    return await http({ method, url: endpoint, data: payload });
  } catch (error) {
    if (error.response) return error.response;
    return { data: { success: false, data: 'Connection error' } };
  }
};
