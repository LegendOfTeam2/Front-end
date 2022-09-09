import api_basic from './api/api_basic';

export const searchSingerApi = (payload) => {
  return api_basic.post(`/search/singer`, payload);
};
export const searchMakerApi = (payload) => {
  return api_basic.post(`/search/maker`, payload);
};