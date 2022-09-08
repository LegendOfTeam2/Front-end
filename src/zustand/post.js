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
} from "../utils/apis/post";

const usePostStore = create((set) => ({
  bestSong_is_loaded: false,
  bestSong:[],
  recentMaker_is_loaded: false,
  recentMaker: [],
  recentsinger_is_loaded: false,
  recentsinger: [],
  bestMaker_is_loaded: false,
  bestMaker: [],
  bestSinger_is_loaded: false,
  bestSinger: [],

  addPost: async (payload) => {
    const resData = await addPostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    return resData.data;
  },

  getBestSong: async (payload) => {
    const resData = await getBestSongApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    set({ bestSong: resData.data });

    return resData.data;
  },

  getRecentMaker: async (payload) => {
    const resData = await getRecentMakerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    set({ recentMaker: resData.data });

    return resData.data;
  },

  getRecentSinger: async (payload) => {
    const resData = await getRecentSingerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    set({ recentsinger: resData.data });

    return resData.data;
  },

  getBestMaker: async (payload) => {
    const resData = await getBestMakerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    set({ recentsinger: resData.data });

    return resData.data;
  },

  getBestSinger: async (payload) => {
    const resData = await getBestSingerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    set({ recentsinger: resData.data });

    return resData.data;
  },
}));

export default usePostStore;
