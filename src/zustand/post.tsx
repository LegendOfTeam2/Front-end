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

interface PostState {
  bestSongIsLoaded: any;
  bestSong: any;
  recentMakerIsLoaded: any;
  recentMaker: any;
  recentSingerIsLoaded: any;
  recentSinger: any;
  bestMakerIsLoaded: any;
  bestMaker: any;
  bestSingerIsLoaded: any;
  bestSinger: any;
  powerArtistLoaded: any;
  powerArtist: any;
  artistIsFollowIsLoaded: any;
  artistIsFollow: any;
  detailListLoaded: any;
  detailList: any;
  addPost: (payload: any) => any;
  getFollowerList: any;
  getBestSong: any;
  getRecentMaker: any;
  getRecentSinger: any;
  getBestMaker: any;
  getPowerArtist: any;
  getBestSinger: any;
  getDetail: (payload: any) => any;
  putModifyWrite: (payload: any) => any;
  deleteDetail: (payload: any) => any;
}

const usePostStore = create<PostState>((set) => ({
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

  powerArtistLoaded: false,
  powerArtist: [],

  artistIsFollowIsLoaded: false,
  artistIsFollow: [],

  detailListLoaded: false,
  detailList: [],

  addPost: async (payload) => {
    const resData: any = await addPostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    return resData.data;
  },
  getFollowerList: async () => {
    const resData: any = await getFollowerListApi()
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ artistIsFollowIsLoaded: true });
      set((state) => {
        const followerIdList = resData.data.data.map((element: any) => {
          return element.nickname;
        });
        return { artistIsFollow: followerIdList };
      });
      return resData.data;
    }
  },
  getBestSong: async () => {
    const resData = await getBestSongApi()
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ bestSong: resData.data.data });
      set({ bestSongIsLoaded: true });
    }
  },
  getRecentMaker: async () => {
    const resData = await getRecentMakerApi()
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ recentMaker: resData.data.data });
      set({ recentMakerIsLoaded: true });
    }
  },
  getRecentSinger: async () => {
    const resData = await getRecentSingerApi()
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ recentSinger: resData.data.data });
      set({ recentSingerIsLoaded: true });
    }
  },
  getBestMaker: async () => {
    const resData = await getBestMakerApi()
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ bestMaker: resData.data.data });
      set({ bestMakerIsLoaded: true });
    }
  },
  getBestSinger: async () => {
    const resData = await getBestSingerApi()
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ bestSinger: resData.data.data });
      set({ bestSingerIsLoaded: true });
    }
  },
  getPowerArtist: async () => {
    const resData = await getPowerArtistApi()
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ powerArtist: resData.data.data });
      set({ powerArtistLoaded: true });
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
    const resData: any = await putModifyWriteApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data;
  },
  deleteDetail: async (payload) => {
    const resData: any = await deleteDetailApi(payload.postId, payload.position)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data.success;
  },
  clearArtistIsFollow: () => {
    set({ artistIsFollow: [] });
  },
}));

export default usePostStore;
