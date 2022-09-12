import api_basic from './api/api_basic';

// export const getUploadPostApi = (page) => {
//   return api_basic.get(`/mypage/makerpost?page=${page}`);
// };

export const getProfilPostApi = (nickname) => {
  return api_basic.get(`/profile/${nickname}`);
};

export const getUploadPostApi = (nickname) => {
  return api_basic.get(`/post/upload/${nickname}`);
};

export const getLikePostApi = (nickname) => {
  return api_basic.get(`/post/like/${nickname}`);
};

export const getPlayListPostApi = (nickname) => {
  return api_basic.get(`/post/playlist/${nickname}`);
};

