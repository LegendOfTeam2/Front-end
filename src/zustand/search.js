// Zustand
import create from 'zustand';

// Utils
import { searchKeywordApi } from '../utils/apis/search';

const useSearchStore = create((set) => ({
  success: false,
  searchKeyword: async (keyword, position, page) => {
    console.log(keyword, position);
    const resData = await searchKeywordApi(keyword, position, page)
      .then((res) => res)
      .catch((err) => console.log(err));

    console.log(resData);
    return resData.data;
  },
}));

export default useSearchStore;
