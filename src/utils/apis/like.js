import api_auth from './api/api_auth';

export const addLikeApi = (payload) => {
  return api_auth.get(`/auth/post/${payload.postId}/like/${payload.position}`);
};
export const getMakerLikePostApi = (payload) => {
  return api_auth.get(`/auth/makerlikepost`, payload);
};
export const getSingerLikePostApi = (payload) => {
  return api_auth.get(`/auth/singerlikepost`, payload);
};
