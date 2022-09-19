import api_auth from './api/api_auth';
import api_basic from './api/api_basic';

export const getProfileInfoApi = (nickname) => {
  return api_basic.get(`/profile/${nickname}`);
};
export const getUploadPostApi = (nickname, page) => {
  return api_basic.get(`/post/upload/${nickname}?page=${page}`);
};
export const getLikePostApi = (nickname, page) => {
  return api_basic.get(`/post/like/${nickname}?page=${page}`);
};
export const getPlayListPostApi = (nickname) => {
  return api_basic.get(`/post/playlist/${nickname}`);
};
export const putProfileApi = (nickname, payload) => {
  return api_auth.put(`/profile/${nickname}`, payload);
};