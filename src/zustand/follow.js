// Zustand
import create from 'zustand';

// Utils
import { followApi } from '../utils/apis/follow';

const useFollowStore = create((set) => ({
  follow: async (payload) => {
    const resData = await followApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    console.log(resData);
    return resData.data;
  },
}));

export default useFollowStore;
