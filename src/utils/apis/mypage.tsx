import api_auth from './api/api_auth';
import api_basic from './api/api_basic';

export const getProfileInfoApi = (nickname : any) => {
  return api_basic.get(`/profile/${nickname}`);
};
export const getUploadPostApi = (nickname : any) => {
  return api_basic.get(`/post/upload/${nickname}`);
};
export const getLikePostApi = (nickname : any) => {
  return api_basic.get(`/post/like/${nickname}`);
};
export const getPlayListPostApi = (nickname : any) => {
  return api_basic.get(`/post/playlist/${nickname}`);
};
export const putProfileApi = (payload : any) => {
  return api_auth.put(`/auth/profile`, payload);
};
