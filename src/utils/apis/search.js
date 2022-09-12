import api_basic from './api/api_basic';

export const searchKeywordApi = (keyword, position, page) => {
  return api_basic.get(`/allpost/search?searchtext=${keyword}&category=${position}&page=${page}`);
};