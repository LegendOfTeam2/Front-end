import api_refresh from './api/api_refresh';

export const refreshTokenApi = () => {
  return api_refresh.post(`/member/refreshtoken`);
};
