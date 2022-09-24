// Packages
import axios from 'axios';

// Utils
import createToken from '../../token';
import { getCookie } from '../../cookie';
import { refreshTokenApi } from '../refresh';

const SERVER_IP = process.env.REACT_APP_REST_API_IP;

const api_auth = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});

api_auth.interceptors.request.use(
  function (config) {
    config.headers['authorization'] = `Bearer ${getCookie('authorization')}`;

    return config;
  },
  function (error) {
    console.err(error);
    return Promise.reject(error);
  }
);

export default api_auth;
