// Zustand
import create from 'zustand';

const usePlayerStore = create((set) => ({
  viewState: false,
  viewStateChange: (state) => {
    set({ viewState: state });

  },
}));

export default usePlayerStore;
