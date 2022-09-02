import api_basic from './api/api_basic';

export const emailDupCheckApi = (payload) => {
  return api_basic.post(`/member/emailcheck`, payload);
};
export const nicknameDupCheckApi = (payload) => {
  return api_basic.post(`/member/nicknamecheck`, payload);
};
export const signUpMemberApi = (payload) => {
  return api_basic.post(`/member/signup`, payload);
};
export const signInMemberApi = (payload) => {
  return api_basic.post(`/member/signin`, payload);
};
export const kakaoAuthApi = (payload) => {
  return api_basic.get(`/api/kakao/callback?code=${payload}`)
};
export const googleAuthApi = (payload) => {
  return api_basic.get(`/api/google/callback?code=${payload}`)
};