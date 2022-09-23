// Zustand
import create from 'zustand';

import { makeRoomApi } from '../utils/apis/chat';

const useChatStore = create((set) => ({
  makeRoom: async (payload) => {
    const resData = await makeRoomApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    console.log(resData);
  },
}));

export default useChatStore;
