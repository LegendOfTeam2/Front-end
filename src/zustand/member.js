// Zustand
import create from 'zustand';

// Utils
import createToken from '../utils/token';
import { removeCookie } from '../utils/cookie';
import {
  emailDupCheckApi,
  nicknameDupCheckApi,
  signUpMemberApi,
  signInMemberApi,
  signOutMemberApi,
  kakaoAuthApi,
  googleAuthApi,
  getMyImageApi
} from '../utils/apis/member';

const useMemberStore = create((set) => ({
  is_login: false,
  changeLoginStatus: (state) => {
    set({ is_login: state });
  },
  emailDupCheck: async (payload) => {
    const resData = await emailDupCheckApi(payload)
      .then((res) => res.data.success)
      .catch((err) => console.log(err));

    return resData;
  },
  nicknameDupCheck: async (payload) => {
    const resData = await nicknameDupCheckApi(payload)
      .then((res) => res.data.success)
      .catch((err) => console.log(err));

    return resData;
  },
  signUpMember: async (payload) => {
    const resData = await signUpMemberApi(payload)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return resData;
  },
  signInMember: async (payload) => {
    const resData = await signInMemberApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      createToken(
        resData.headers['authorization'].split(' ')[1],
        resData.headers['refresh-token']
      );
      set({ is_login: resData?.data.success });
      return resData.data.success;
    }
  },
  signOutMember: async (payload) => {
    const resData = await signOutMemberApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      removeCookie('authorization');
      window.sessionStorage.setItem('refresh-token', '');
      set({ is_login: false });
      return resData.data.success;
    }

  },
  kakaoAuth: async (code) => {
    const resData = await kakaoAuthApi(code)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      createToken(
        resData.headers['authorization'].split(' ')[1],
        resData.headers['refresh-token']
      );
      set({ is_login: resData?.data.success });
      return resData.data.success;
    }
  },
  googleAuth: async (code) => {
    const resData = await googleAuthApi(code)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      createToken(
        resData.headers['authorization'].split(' ')[1],
        resData.headers['refresh-token']
      );
      set({ is_login: resData?.data.success });
      return resData.data.success;
    }
  },
  getMyImage: async (payload) => {

    const resData = await getMyImageApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
      console.log(resData);

      return resData.data.data

  },

  
}));

export default useMemberStore;
