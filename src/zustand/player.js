// Zustand
import create from 'zustand';
import {
  deletePlayListApi,
  getPlayListApi,
  postPlayListApi,
} from '../utils/apis/Playbar';

const usePlayerStore = create((set) => ({
  viewState: false,
  playListState: false,
  playing: false,
  isAutoplay: false,
  
  playListMemberIsLoaded: false,
  playListMember: [],
  currentSongMember: {},

  playList: [],
  currentSong: {},
  viewStateChange: (state) => {
    set({ viewState: state });
  },
  playListStateChange: (state) => {
    set({ playListState: state });
  },
  addPlayList: (payload) => {
    set((state) => {
      const newPlayList = state.playList.filter(
        (play) => play.postId !== payload.postId
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
  getPlayList: async (payload) => {
    const resData = await getPlayListApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ playListMemberIsLoaded: resData.data.success });
      set({
        playListMember: [...resData.data.data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      });
      return resData.data
    }
  },
  deletePlayList: async (payload) => {
    const resData = await deletePlayListApi(payload)
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
}));

export default usePlayerStore;