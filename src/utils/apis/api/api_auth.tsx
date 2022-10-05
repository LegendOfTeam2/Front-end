// Packages
import axios from 'axios';

// Utils
import { getCookie } from '../../cookie';

const SERVER_IP = process.env.REACT_APP_REST_API_IP;

const api_auth = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});

api_auth.interceptors.request.use(
  function (config : any) {
    config.headers['authorization'] = `Bearer ${getCookie('authorization')}`;

    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

export default api_auth;