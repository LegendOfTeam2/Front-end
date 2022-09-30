// Zustand
import create from 'zustand';

// Utils
import { searchKeywordApi } from '../utils/apis/search';

const useSearchStore = create((set) => ({
  keyword: '',
  singerSearchIsLoaded: false,
  makerSearchIsLoaded: false,
  memberSearchIsLoaded: false,
  singerSearchList: [],
  makerSearchList: [],
  memberSearchList: [],
  setSearchKeyword: (keyword) => {
    set({ keyword: keyword });
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
      } else if (position === 'Maker') {
        if (resData.data.data !== []) {
          set({ makerSearchIsLoaded: resData.data.success });
          set({ makerSearchList: resData.data.data });
        }
      } else {
        if (resData.data.data !== []) {
          set({ memberSearchIsLoaded: resData.data.success });
          set({ memberSearchList: resData.data.data });
        }
      }
    }
  },
  resetList: () => {
    set({ singerSearchList: [] });
    set({ makerSearchList: [] });
  },
}));

export default useSearchStore;
