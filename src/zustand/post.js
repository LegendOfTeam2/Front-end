// Zustand
import create from 'zustand';

// Utils
import {
  addPostApi,
  getRecentMakerApi,
  getRecentSingerApi,
  getBestMakerApi,
  getBestSingerApi,
  getBestSongApi,
  getFollowerListApi,
  getPowerArtistApi,
  getDetailApi,
  putModifyWriteApi,
  deleteDetailApi,
} from '../utils/apis/post';

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

  artistIsFollow: [],

  detailListLoaded: false,
  detailList: [],

  addPost: async (payload) => {
    const resData = await addPostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data;
  },
  getFollowerList: async (payload) => {
    const resData = await getFollowerListApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set((state) => {
        const followerIdList = resData.data.data.map((element) => {
          return element.nickname;
        })
        return {artistIsFollow: followerIdList};
      });
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
  getDetail: async (payload) => {
    const resData = await getDetailApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ detailList: resData.data.data });
      set({ detailListLoaded: resData.data.success });

      return resData.data;
    }
  },
  putModifyWrite: async (payload) => {
    const resData = await putModifyWriteApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data;
  },
  deleteDetail: async (payload) => {
    console.log(payload);
    const resData = await deleteDetailApi(payload.postId, payload.position)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data.success;
  },
}));

export default usePostStore;
