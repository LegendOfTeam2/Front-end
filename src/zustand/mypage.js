// Zustand
import create from 'zustand';

// Utils
import {
  getProfileInfoApi,
  getUploadPostApi,
  getLikePostApi,
  putProfileApi,
} from '../utils/apis/mypage';
import createToken from '../utils/token';

const useMyPageStore = create((set) => ({
  profileInfoIsLoaded: false,
  profileInfo: [],
  uploadPostIsLoaded: false,
  uploadPost: [],
  likePostIsLoaded: false,
  likePost: [],
  mainPost: [],
  getProfileInfo: async (payload) => {
    const resData = await getProfileInfoApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ profileInfo: resData.data.data });
      set({ profileInfoIsLoaded: resData.data.success });

      return resData.data.data;
    }
  },
  getUploadPost: async (payload) => {
    const resData = await getUploadPostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ uploadPost: [...resData.data.data] });
      set({ uploadPostIsLoaded: resData.data.success });
      set((state) => {
        const sortedPostArr = [...resData.data.data].sort(
          (a, b) => b.likeCount - a.likeCount
        );
        return { mainPost: sortedPostArr };
      });
      return resData.data;
    }
  },
  getLikePost: async (payload) => {
    const resData = await getLikePostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ likePost: resData.data.data });
      set({ likePostIsLoaded: resData.data.success });
    }
  },
  putProfile: async (paylaod) => {
    const resData = await putProfileApi(paylaod)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      createToken(
        resData.headers['authorization'].split(' ')[1],
        resData.headers['refresh-token']
      );
      return resData.data;
    }
  },
}));

export default useMyPageStore;
