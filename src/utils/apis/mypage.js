import api_basic from './api/api_basic';

export const getUploadPostApi = (page) => {
  return api_basic.get(`/mypage/makerpost?page=${page}`);
};