// Packages
import axios from 'axios';

const SERVER_IP = process.env.REACT_APP_REST_API_IP_TEST;

const api_chat = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});

export default api_chat;