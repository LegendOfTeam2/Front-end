// Zustand
import create from 'zustand';

// Utils
import { searchApi } from '../utils/apis/search';

const useSearchStore = create((set) => ({
  success: false,
  search: async (payload) => {
    const resData = await searchApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    console.log(resData);
    return resData.data;
  },
}));

export default useSearchStore;