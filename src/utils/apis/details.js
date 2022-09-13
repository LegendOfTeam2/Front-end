import api_basic from './api/api_basic';

export const getDetailApi = (payload) => {
    return api_basic.get(`/api/post/${payload.postid}?position=${payload.position}`);
  };
  
  