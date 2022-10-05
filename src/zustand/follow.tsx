// Zustand
import create from 'zustand';

// Utils
import { followApi } from '../utils/apis/follow';

interface FollowState {
  follow: (payload: any) => any;
}

const useFollowStore = create<FollowState>((set) => ({
  follow: async (payload) => {
    const resData = await followApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (resData?.data.success) {
      return resData.data;
    }
  },
}));

export default useFollowStore;
