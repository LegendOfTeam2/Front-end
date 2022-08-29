import api_basic from './api/api_basic';

export const emailDupCheckApi = (payload) => {
  return api_basic.post(`/api/emailcheck`, payload);
};
export const signUpUserApi = (payload) => {
  return api_basic.post(`/api/signup`, payload);
};
export const signInUserApi = (payload) => {
  return api_basic.post(`/api/signin`, payload);
};
export const kakaoAuthApi = (payload) => {
  return api_basic.get(`/api/kakao/callback?code=${payload}`)
};