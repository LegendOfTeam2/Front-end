import api_auth from './api/api_auth';
import api_basic from './api/api_basic';

export const addPostApi = (payload: any) => {
  return api_auth.post(`/auth/post`, payload);
};
export const getFollowerListApi = () => {
  return api_auth.get(`/auth/followerlist`);
};
export const getBestSongApi = () => {
  return api_basic.get(`/api/bestsong`);
};
export const getRecentMakerApi = () => {
  return api_basic.get(`/api/recentmaker`);
};
export const getRecentSingerApi = () => {
  return api_basic.get(`/api/recentsinger`);
};
export const getBestMakerApi = () => {
  return api_basic.get(`/api/bestmaker`);
};
export const getBestSingerApi = () => {
  return api_basic.get(`/api/bestsinger`);
};
export const getPowerArtistApi = () => {
  return api_basic.get(`/api/powerartist`);
};
export const getDetailApi = (payload: any) => {
  return api_basic.get(
    `/api/post/${payload.postId}?position=${payload.position}`
  );
};
export const putModifyWriteApi = (payload: any) => {
  return api_auth.put(`/auth/post`, payload);
};
export const deleteDetailApi = (postId: any, position: any) => {
  return api_auth.delete(`/auth/post/${postId}?position=${position}`);
};