import api_basic from './api/api_basic';

export const searchApi = (keyword, position) => {
  return api_basic.get(`/allpost/search?searchtext=${keyword}&category=${position}`);
};