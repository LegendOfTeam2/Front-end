import api_basic from './api/api_basic';

export const searchKeywordApi = (keyword, position) => {
  return api_basic.get(`/allpost/search?searchText=${keyword}&category=${position}`);
};
