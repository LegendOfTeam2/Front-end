import api_auth from './api/api_auth';

export const addPostApi = (payload) => {
  return api_auth.post(`/auth/post`, payload);
};
