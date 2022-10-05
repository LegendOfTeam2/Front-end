// Zustand
import create from 'zustand';

// Utils
import { searchKeywordApi } from '../utils/apis/search';

interface SearchState {
  keyword: any,
  singerSearchIsLoaded: any,
  makerSearchIsLoaded: any,
  memberSearchIsLoaded: any,
  singerSearchList: any,
  makerSearchList: any,
  memberSearchList: any,
  resetList: any
  setSearchKeyword : (keyword : any) => any
  searchKeyword : (keyword : any , position : any) => any
}

const useSearchStore = create<SearchState>((set) => ({
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
        if (resData.data.data.length !== 0) {
          set({ singerSearchIsLoaded: resData.data.success });
          set({ singerSearchList: resData.data.data });
        }
      } else if (position === 'Maker') {
        if (resData.data.data.length !== 0) {
          set({ makerSearchIsLoaded: resData.data.success });
          set({ makerSearchList: resData.data.data });
        }
      } else {
        if (resData.data.data.length !== 0) {
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
