import api_basic from './api/api_basic';

export const searchKeywordApi = (keyword: any , position: any ) => {
  return api_basic.get(`/search?searchText=${keyword}&category=${position}`);
};
