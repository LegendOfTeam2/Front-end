import create from 'zustand';

import {
  addLikeApi,
  getMakerLikePostApi,
  getSingerLikePostApi,
} from '../utils/apis/like';

const useLikeStore = create((set) => ({
  singerIsLike: [],
  makerIsLike: [],

  addLike: async (payload) => {
    const resData = await addLikeApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      return resData.data;
    }
  },
  getSingerLikePost: async (payload) => {
    const resData = await getSingerLikePostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set((state) => {
        if (resData.data.data !== []) {
          const likeList = resData.data.data.map((post) => {
            return post.singerId;
          });

          return { singerIsLike: likeList };
        }
      });
      return resData.data.success;
    }
  },

  getMakerLikePost: async (payload) => {
    const resData = await getMakerLikePostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set((state) => {
        if (resData.data.data !== []) {
          const likeList = resData.data.data.map((post) => {
            return post.makerId;
          });
          return { makerIsLike: likeList };
        }
      });
      return resData.data.success;
    }
  },
}));

export default useLikeStore;
