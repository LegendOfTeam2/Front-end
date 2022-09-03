import api_media from './api/api_media';

export const uploadImageApi = (payload) => {
  return api_media.post(`/upload`, payload);
};