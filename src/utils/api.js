import axios from 'axios';
import { setCookie } from './cookie';

const SERVER_IP = process.env.REACT_APP_REST_API_IP;

export const api_auth = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});

api_auth.interceptors.request.use(
  function (config) {
    config.headers['authorization'] = `Bearer ${window.sessionStorage.getItem(
      'authorization'
    )}`;
    config.headers['refresh-token'] = `${window.sessionStorage.getItem(
      'refresh-token'
    )}`;
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

api_auth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (error.response.data.message === 'TokenExpiredError') {
        const originRequest = config;
        const refreshToken = window.sessionStorage.getItem('refresh-token');
        const response = await axios.post(`http://${SERVER_IP}`, {
          refreshToken,
        });
        setCookie(
          'authorization',
          response.headers['authorization'].split(' ')[1]
        );
        window.sessionStorage.setItem(
          'refresh-token',
          response.headers['refresh-token']
        );
        return api_auth(originRequest);
      }
    }
    return Promise.reject(error);
  }
);

export const api = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});

export const api_media = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'multipart/form-data',
  },
});
