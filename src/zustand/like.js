import create from 'zustand';

import {
  addLikeApi,
  getMakerLikePostApi,
  getSingerLikePostApi,
} from '../utils/apis/like';

const useLikeStore = create((set) => ({
  singerIsLikeIsLoaded: false,
  singerIsLike: [],

  makerIsLikeIsLoaded: false,
  makerIsLike: [],

  addLike: async (payload) => {
    const resData = await addLikeApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      return resData.data;
    }
  },
  getSingerLikePost: async () => {
    const resData = await getSingerLikePostApi()
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({singerIsLikeIsLoaded: true});
      set((state) => {
        if (resData.data.data !== []) {
          const likeList = resData.data.data.map((post) => {
            return post.postId;
          });
          return { singerIsLike: likeList };
        }
      });
      return resData.data;
    }
  },

  getMakerLikePost: async () => {
    const resData = await getMakerLikePostApi()
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({makerIsLikeIsLoaded: true});
      set((state) => {
        if (resData.data.data !== []) {
          const likeList = resData.data.data.map((post) => {
            return post.postId;
          });
          return { makerIsLike: likeList };
        }
      });
      return resData.data;
    }
  },
}));

export default useLikeStore;
