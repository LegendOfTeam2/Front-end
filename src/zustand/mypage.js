// Zustand
import create from 'zustand';

// Utils
import {
  getProfileInfoApi,
  getUploadPostApi,
  getLikePostApi,
  putProfileApi,
} from '../utils/apis/mypage';

const useMyPageStore = create((set) => ({
  profileInfoIsLoaded: false,
  profileInfo: [],
  uploadPostIsLoaded: false,
  uploadPost: [],
  likePostIsLoaded: false,
  likePost: [],

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
    const resData = await getUploadPostApi(payload.nickname, payload.page)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set((state) => {
        const newPost = [...state.uploadPost, ...resData.data.data];
        return { uploadPost: newPost };
      });
      set({ uploadPostIsLoaded: resData.data.success });
    }
  },
  getLikePost: async (payload) => {
    const resData = await getLikePostApi(payload.nickname, payload.page)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set((state) => {
        const newPost = [...state.uploadPost, ...resData.data.data];
        return { likePost: newPost };
      });
      set({ likePostIsLoaded: resData.data.success });
    }
  },
  putProfile: async (nickname, paylaod) => {
    const resData = await putProfileApi(nickname, paylaod)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return resData.success;
  },
}));

export default useMyPageStore;
