import api_auth from './api/api_auth';
import api_basic from './api/api_basic';

export const addPostApi = (payload) => {
  return api_auth.post(`/auth/post`, payload);
};

export const getMakerLikePostApi = (payload) => {
  return api_auth.get(`/auth/makerlikepost`, payload);
};

export const getSingerLikePostApi = (payload) => {
  return api_auth.get(`/auth/singerlikepost`, payload);
};

export const getFollowerListApi = (payload) => {
  return api_auth.get(`/auth/followerlist`, payload);
};

export const getBestSongApi = (payload) => {
  return api_basic.get(`/api/bestsong`, payload);
};

export const getRecentMakerApi = (payload) => {
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