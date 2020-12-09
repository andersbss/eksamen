import http from '../utils/http';

const API_DOWNLOAD_URL = '/userlog/download';

export const download = async () => {
  try {
    return await http.get(API_DOWNLOAD_URL, {
      responseType: 'blob',
    });
  } catch (error) {
    if (error.response) return error.response;
    return { data: { success: false, data: 'Connection error', status: 503 } };
  }
};
