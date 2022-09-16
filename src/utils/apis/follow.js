import api_auth from './api/api_auth';

export const followApi = (payload) => {
  return api_auth.post(`/auth/follow/${payload}`);
};