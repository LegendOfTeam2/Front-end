// Packages
import axios from 'axios';

const SERVER_IP = process.env.REACT_APP_REST_API_IP;

const api_media = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'multipart/form-data',
  },
});

export default api_media