import api_basic from './api/api_basic';
import api_auth from "./api/api_auth";

export const getDetailApi = (payload) => {
    return api_basic.get(`/api/post/${payload.postid}?position=${payload.position}`);
  };

  export const putModifyWriteApi = (payload) => {
    return api_auth.put(`/auth/post`, payload);
  };

  
  