import axios from 'axios';

const SERVER_IP = process.env.REACT_APP_REST_API_IP;

const api_refresh = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});

api_refresh.interceptors.request.use(
  function (config : any )  {
    config.headers['refresh-token'] = window.sessionStorage.getItem('refresh-token');

    return config;
  },
  function (error : any) {
    console.error(error);
    return Promise.reject(error);
  }
);

export default api_refresh;