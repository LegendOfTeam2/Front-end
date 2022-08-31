// Zustand
import create from 'zustand';

// Utils
import createToken from '../utils/token';
import { kakaoAuthApi, googleAuthApi } from '../utils/apis/member';

export const useMemberStore = create((set) => ({
  is_login: false,
  changeLoginState: (state) => {
    set({is_login: state});
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
}));
