// Zustand
import create from 'zustand';
// Utils
import {
  deletePlayListApi,
  getPlayListApi,
  postPlayListApi,
} from '../utils/apis/Playbar';

interface PlayerState {
  viewState: any;
  playListState: any;
  playing: any;
  isAutoplay: any;
  playListMemberIsLoaded: any;
  playListMember: any;
  currentSongMember: any;
  playList: any;
  currentSong: any;
  playListModalState: any;
  getPlayList: any;
  deletePlayList: any;
  viewStateChange: (payload: any) => any;
  playListStateChange: (payload: any) => any;
  addPlayList: (payload: any) => any;
  setCurrentSong: (payload: any) => any;
  setPlaying: (payload: any) => any;
  setIsAutoplay: (payload: any) => any;
  postPlayList: (payload: any) => any;
  setCurrentSongMember: (payload: any) => any;
  clearPlayListMember: (payload: any) => any;
  playListModalHandle: (payload: any) => any;
}

const usePlayerStore = create<PlayerState>((set) => ({
  viewState: false,
  playListState: false,
  playing: false,
  isAutoplay: false,

  playListMemberIsLoaded: false,
  playListMember: [],
  currentSongMember: {},

  playList: [],
  currentSong: {},
  playListModalState: false,

  viewStateChange: (state) => {
    set({ viewState: state });
  },
  playListStateChange: (state) => {
    set({ playListState: state });
  },
  addPlayList: (payload) => {
    set((state) => {
      const newPlayList = state.playList.filter(
        (play: any) => play.postId !== payload.postId
      );
      return { playList: [...newPlayList, payload].reverse() };
    });
    set({ currentSong: payload });
  },
  setCurrentSong: (payload) => {
    set({ currentSong: payload });
  },
  setPlaying: (payload) => {
    set({ playing: payload });
  },
  setIsAutoplay: (payload) => {
    set({ isAutoplay: payload });
  },
  postPlayList: async (payload) => {
    const resData = await postPlayListApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({ currentSongMember: payload });
    }
  },
  getPlayList: async () => {
    const resData = await getPlayListApi()
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ playListMemberIsLoaded: resData.data.success });
      set({
        playListMember: [...resData.data.data].sort(
          (a, b) => b.createdAt - a.createdAt
        ),
      });
      return resData.data;
    }
  },
  deletePlayList: async () => {
    const resData = await deletePlayListApi()
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      set({
        playListMember: [],
      });
      set({
        currentSongMember: {},
      });
    }
  },
  setCurrentSongMember: (payload) => {
    set({ currentSongMember: payload });
  },
  clearPlayListMember: () => {
    set({ playListMember: [] });
    set({ currentSongMember: {} });
    set({ playList: [] });
    set({ currentSong: {} });
  },
  playListModalHandle: (payload) => {
    set({ playListModalState: payload });
  },
}));

export default usePlayerStore;
