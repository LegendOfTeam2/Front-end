// Zustand
import create from "zustand";

// Utils
import {
  addPostApi,
  getRecentMakerApi,
  getRecentSingerApi,
  getBestMakerApi,
  getBestSingerApi,
  getBestSongApi,
  getMakerLikePostApi,
  getSingerLikePostApi,
  getFollowerListApi,
  getPowerArtistApi,
} from "../utils/apis/post";

const usePostStore = create((set) => ({
  bestSongIsLoaded: false,
  bestSong: [],

  recentMakerIsLoaded: false,
  recentMaker: [],

  recentSingerIsLoaded: false,
  recentSinger: [],

  bestMakerIsLoaded: false,
  bestMaker: [],

  bestSingerIsLoaded: false,
  bestSinger: [],

  PowerArtistLoaded: false,
  PowerArtist: [],

  singerIsLike: [],

  makerIsLike: [],

  artistIsFollow: [],

  addPost: async (payload) => {
    const resData = await addPostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data;
  },

  getSingerLikePost: async (payload) => {
    const resData = await getSingerLikePostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ singerIsLike: resData.data.data });
      return resData.data.success;
    }
  },

  getMakerLikePost: async (payload) => {
    const resData = await getMakerLikePostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ makerIsLike: resData.data.data });
      return resData.data.success;
    }
  },

  getFollowerList: async (payload) => {
    const resData = await getFollowerListApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ artistIsFollow: resData.data.data });
      return resData.data.success;
    }
  },

  getBestSong: async (payload) => {
    const resData = await getBestSongApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ bestSong: resData.data.data });
      set({ bestSongIsLoaded: true });
    }
  },

  getRecentMaker: async (payload) => {
    const resData = await getRecentMakerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ recentMaker: resData.data.data });
      set({ recentMakerIsLoaded: true });
    }
  },

  getRecentSinger: async (payload) => {
    const resData = await getRecentSingerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ recentSinger: resData.data.data });
      set({ recentSingerIsLoaded: true });
    }
  },

  getBestMaker: async (payload) => {
    const resData = await getBestMakerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ bestMaker: resData.data.data });
      set({ bestMakerIsLoaded: true });
    }
  },

  getBestSinger: async (payload) => {
    const resData = await getBestSingerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ bestSinger: resData.data.data });
      set({ bestSingerIsLoaded: true });
    }
  },

  getPowerArtist: async (payload) => {
    const resData = await getPowerArtistApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ PowerArtist: resData.data.data });
      set({ PowerArtistLoaded: true });
    }
  },
}));

export default usePostStore;
