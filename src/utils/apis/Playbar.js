import api_auth from './api/api_auth';

export const postPlayListApi = (payload) => {
  return api_auth.post(
    `/auth/playlist/${payload.postId}?position=${payload.position}`
  );
};

export const getPlayListApi = () => {
  return api_auth.get(`/auth/playlist`);
};

export const deletePlayListApi = () => {
  return api_auth.delete(`/auth/playlist`);
};
