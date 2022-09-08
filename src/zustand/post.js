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
  BestSongApi:[],
  recentMaker: [],
  recentsinger: [],
  BestMaker: [],
  BestSinger: [],

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
    set({ BestSongApi: resData.data });

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
