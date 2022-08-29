// Packages
import axios from 'axios';

// Utils
import { setCookie } from '../../cookie';
import createToken from '../../token';

const SERVER_IP = process.env.REACT_APP_REST_API_IP;

const api_auth = axios.create({
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
        const res = await axios.post(`http://${SERVER_IP}`, {
          refreshToken,
        });

        createToken(
          res.headers['authorization'].split(' ')[1],
          res.headers['refresh-token']
        );

        return api_auth(originRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default api_auth;
