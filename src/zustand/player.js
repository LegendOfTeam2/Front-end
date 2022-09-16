// Zustand
import create from 'zustand';

const usePlayerStore = create((set) => ({
  viewState: false,
  playing: false,
  isAutoplay: false,
  playList: [],
  currentSong: {},
  viewStateChange: (state) => {
    set({ viewState: state });
  },

  addPlayList : (payload) => {
    set(state => {
      const newPlayList = state.playList.filter((play) => play.postId !==  payload.postId);
      return {playList: [...newPlayList, payload].reverse()};
    });
    set({currentSong: payload});
  },
  setCurrentSong : (payload) => {
    set({currentSong: payload});
  },

  setPlaying : (payload) => {
    set({playing: payload});
  },

  setIsAutoplay : (payload) => {
    set({isAutoplay: payload});
  }


}));

export default usePlayerStore;