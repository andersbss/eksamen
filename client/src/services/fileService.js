const { default: http } = require('../utils/http');

export const download = async () => {
  try {
    return await http.get('http://localhost:5000/api/v1/userlog/download', {
      responseType: 'octet-stream',
    });
  } catch (error) {
    if (error.response) return error.response;
    return { data: { success: false, data: 'Connection error', status: 503 } };
  }
};
