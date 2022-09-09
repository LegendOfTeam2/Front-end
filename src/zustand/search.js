// Zustand
import create from 'zustand';

// Utils
import { searchSingerApi, searchMakerApi } from '../utils/apis/search';

const useSearchStore = create((set) => ({
  success: false,
  searchSinger: async (payload) => {
    const resData = await searchSingerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    console.log(resData);
    return resData.data;
  },
  searchMaker: async (payload) => {
    const resData = await searchMakerApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    console.log(resData);
    return resData.data;
  },
}));

export default useSearchStore;