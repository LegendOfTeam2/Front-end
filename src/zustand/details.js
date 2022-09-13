// Zustand
import create from 'zustand';

// Utils
import { getDetailApi } from '../utils/apis/details';

const useDetailStore = create((set) => ({
  detailList:[],
  detailListLoaded: false,
    
  getDetail: async (payload) => {
    console.log(payload);
    const resData = await getDetailApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
      set({ detailList: resData.data.data });
    return resData.data;
  },
}));

export default useDetailStore;
