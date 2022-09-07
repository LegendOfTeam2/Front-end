import { api_media, api_media_auth } from './api/api_media';

export const uploadImageApi = (payload) => {
  return api_media.post(`/upload`, payload);
};
export const uploadAudioApi = (payload) => {
  return api_media_auth.post(`/auth/upload/media`, payload);
};
