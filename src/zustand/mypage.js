// Zustand
import create from 'zustand';

// Utils
import { getUploadPostApi } from '../utils/apis/mypage';

const useMyPageStore = create((set) => ({
  getUploadPost: async (payload) => {
    const resData = await getUploadPostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    console.log(resData);
    return resData.data;
  },
}));

export default useMyPageStore;