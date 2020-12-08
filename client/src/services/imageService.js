import http from '../utils/http';
import { getCsrfToken } from './httpService';

const API_UPLOAD_URL = '/images/upload';
const API_DOWNLOAD_URL = '/images/download';

export const upload = async (image) => {
  try {
    await getCsrfToken();
    const data = new FormData();
    data.append('image', image);
    return await http.post(API_UPLOAD_URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.log(err);
    if (error.response) return error.response;
    return { data: { success: false, data: 'Connection error', status: 503 } };
  }
};

export const download = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD_URL}/${id}`, {
      responseType: 'blob',
    });
  } catch (error) {
    if (error.response) return error.response;
    return { data: { success: false, data: 'Connection error', status: 503 } };
  }
};
