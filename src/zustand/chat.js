// Zustand
import create from 'zustand';
// Utils
import { makeRoomApi, getRoomsApi } from '../utils/apis/chat';

const useChatStore = create((set) => ({
  subRoomId: '',
  rooms: [],
  getRoomsIsLoaded: false,
  makeRoom: async (payload) => {
    const resData = await makeRoomApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      return resData.data;
    }
  },
  getRooms: async () => {
    const resData = await getRoomsApi()
      .then((res) => res)
      .catch((err) => console.log(err));

    if (resData?.data.success) {
      set({ rooms: resData.data.data.messageDto });
      set({ getRoomsIsLoaded: true });
    }
  },
  setSubRoomId: (payload) => {
    set({ subRoomId: payload });
  },
}));

export default useChatStore;
