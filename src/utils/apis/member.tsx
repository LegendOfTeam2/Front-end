import api_basic from './api/api_basic';
import api_auth from './api/api_auth';

export const emailDupCheckApi = (payload: any) => {
  return api_basic.post(`/member/emailcheck`, payload);
};
export const nicknameDupCheckApi = (payload: any) => {
  return api_basic.post(`/member/nicknamecheck`, payload);
};
export const signUpMemberApi = (payload: any) => {
  return api_basic.post(`/member/signup`, payload);
};
export const signInMemberApi = (payload: any) => {
  return api_basic.post(`/member/signin`, payload);
};
export const signOutMemberApi = (payload: any) => {
  return api_auth.post(`/auth/member/signout`, payload);
};
export const kakaoAuthApi = (payload: any) => {
  return api_basic.get(`/api/kakao/callback?code=${payload}`);
};
export const googleAuthApi = (payload: any) => {
  return api_basic.get(`/api/google/callback?code=${payload}`);
};
export const getMyImageApi = (payload: any) => {
  return api_auth.post(`/auth/myimage`, payload);
};
