// Zustand
import create from "zustand";

// Utils
import {
  getProfilPostApi,
  getUploadPostApi,
  getLikePostApi,
  getPlayListPostApi,
  putProfileApi
} from "../utils/apis/mypage";

const useMyPageStore = create((set) => ({
  profilPosteIsLoaded: false,
  profilPost: [],
  pofilUploadPostIsLoaded: false,
  pofilUploadPost: [],
  likePostIsLoaded: false,
  likePost: [],
  playListPostIsLoaded: false,
  playListPost: [],

  getProfilPost: async (payload) => {
    const resData = await getProfilPostApi(payload.nickname)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ profilPost: resData.data.data });
      set({ profilPosteIsLoaded: resData.data.success });

      return resData.data.data;
    }
  },

  getUploadPost: async (payload) => {
    const resData = await getUploadPostApi(payload.nickname)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ pofilUploadPost: resData.data.data });
      set({ pofilUploadPostIsLoaded: resData.data.success });
    }
  },

  getLikePost: async (payload) => {
    const resData = await getLikePostApi(payload.nickname)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ likePost: resData.data.data });
      set({ likePostIsLoaded: resData.data.success });
    }
  },

  getPlayListPost: async (payload) => {
    const resData = await getPlayListPostApi(payload.nickname)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ playListPost: resData.data.data });
      set({ playListPostIsLoaded: resData.data.success });
    }
  },
  putProfile: async (nickname, paylaod) => {
    const resData = await putProfileApi(nickname, paylaod)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    console.log(resData);
    return resData.success;
  }
}));

export default useMyPageStore;
