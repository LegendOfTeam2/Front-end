// Zustand
import create from 'zustand';

// Utils
import { searchKeywordApi } from '../utils/apis/search';

const useSearchStore = create((set) => ({
  keyword: '',
  singerSearchIsLoaded: false,
  makerSearchIsLoaded: false,
  singerSearchList: [],
  makerSearchList: [],
  setSearchKeyword: (keyword) => {
    set({keyword: keyword});
  },
  searchKeyword: async (keyword, position) => {
    const resData = await searchKeywordApi(keyword, position)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      if (position === 'Singer') {
        if (resData.data.data !== []) {
          set({ singerSearchIsLoaded: resData.data.success });
          set({ singerSearchList: resData.data.data });
        }
      } else {
        if (resData.data.data !== []) {
          set({ makerSearchIsLoaded: resData.data.success });
          set({ makerSearchList: resData.data.data });
        }
      }
    }
  },
  resetList: () => {
    set({singerSearchList: []});
    set({makerSearchList: []});
  }
}));

export default useSearchStore;
