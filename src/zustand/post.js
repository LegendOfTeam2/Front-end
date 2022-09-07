// Zustand
import create from 'zustand';

// Utils
import { addPostApi } from '../utils/apis/post';

const usePostStore = create((set) => ({
  post: [],
  addPost: async (payload) => {
    const resData = await addPostApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    return resData.data;
  },
}));

export default usePostStore;