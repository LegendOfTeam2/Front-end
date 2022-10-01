// Packages
import axios from 'axios';

const SERVER_IP = process.env.REACT_APP_REST_API_IP;

const api_basic = axios.create({
  baseURL: `https://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});

export default api_basic;