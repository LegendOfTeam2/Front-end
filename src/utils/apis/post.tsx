import api_auth from './api/api_auth';
import api_basic from './api/api_basic';

<<<<<<< HEAD
export const addPostApi = (payload : any ) => {
=======
export const addPostApi = (payload: any) => {
>>>>>>> 50cf115756a63d71840c014f469f9d0f50c80a0e
  return api_auth.post(`/auth/post`, payload);
};
export const getFollowerListApi = () => {
  return api_auth.get(`/auth/followerlist`);
};
<<<<<<< HEAD
export const getBestSongApi = (payload : any ) => {
  return api_basic.get(`/api/bestsong`, payload);
};
export const getRecentMakerApi = (payload : any ) => {
  return api_basic.get(`/api/recentmaker`, payload);
};
export const getRecentSingerApi = (payload) => {
  return api_basic.get(`/api/recentsinger`, payload);
};
export const getBestMakerApi = (payload) => {
  return api_basic.get(`/api/bestmaker`, payload);
};
export const getBestSingerApi = (payload) => {
  return api_basic.get(`/api/bestsinger`, payload);
};
export const getPowerArtistApi = (payload) => {
  return api_basic.get(`/api/powerartist`, payload);
};
export const getDetailApi = (payload) => {
=======
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
>>>>>>> 50cf115756a63d71840c014f469f9d0f50c80a0e
  return api_basic.get(
    `/api/post/${payload.postId}?position=${payload.position}`
  );
};
<<<<<<< HEAD
export const putModifyWriteApi = (payload) => {
  return api_auth.put(`/auth/post`, payload);
};
export const deleteDetailApi = (postId, position) => {
  return api_auth.delete(`/auth/post/${postId}?position=${position}`);
};
=======
export const putModifyWriteApi = (payload: any) => {
  return api_auth.put(`/auth/post`, payload);
};
export const deleteDetailApi = (postId: any, position: any) => {
  return api_auth.delete(`/auth/post/${postId}?position=${position}`);
};
>>>>>>> 50cf115756a63d71840c014f469f9d0f50c80a0e
