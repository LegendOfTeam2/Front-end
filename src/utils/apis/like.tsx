import api_auth from './api/api_auth';

export const addLikeApi = (payload : any ) => {
  return api_auth.get(`/auth/post/${payload.postId}/like/${payload.position}`);
};
export const getMakerLikePostApi = () => {
  return api_auth.get(`/auth/makerlikepost`);
};
export const getSingerLikePostApi = () => {
  return api_auth.get(`/auth/singerlikepost`);
};
