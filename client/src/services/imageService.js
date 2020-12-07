import http from '../utils/http';
import { getCsrfToken } from './httpService';

const API_UPLOAD_URL = '/images/upload';
const API_DOWNLOAD_URL = '/images/download';

export const upload = async (image) => {
  try {
    await getCsrfToken();
    const data = new FormData();
    data.append('image', image);
    return await http.post(`${API_UPLOAD_URL}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const download = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD_URL}/${id}`, {
      responseType: 'blob',
    });
  } catch (err) {
    return err.response;
  }
};
