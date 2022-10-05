// Zustand
import create from 'zustand';
import { devtools } from 'zustand/middleware';

// Utils
import {
  makeRoomApi,
  getRoomsApi,
  getChatMessagesApi,
} from '../utils/apis/chat';

const useChatStore = create(
  devtools(
    (set) => ({
      subscription: [],
      rooms: [],
      chatMessages: [],
      chatRoomInfo: { roomId: '', nickname: '', profileImg: '' },
      chatMessagesIsLoaded: false,
      getRoomsIsLoaded: false,
      makeRoom: async (payload) => {
        const resData = await makeRoomApi(payload)
          .then((res) => res)
          .catch((err) => console.log(err));

        if (resData?.data.success) {
          return resData.data;
        } else {
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
      getChatMessages: async (payload) => {
        const resData = await getChatMessagesApi(payload)
          .then((res) => res)
          .catch((err) => console.log(err));

        if (resData?.data.success) {
          set({ chatMessages: resData.data.data });
          set({ chatMessagesIsLoaded: true });

          return resData.data;
        }
      },
      setSubscription: (payload) => {
        set((state) => {
          return { subscription: [...state.subscription, payload] };
        });
      },
      unSetSubscription: (payload) => {
        set((state) => {
          if (state.subscription.length !== 0) {
            const filterArr = [...state.subscription].filter(
              (info) => info.roomId !== payload
            );
            return { subscription: filterArr };
          }
        });
      },
      setChatRoomInfo: (payload) => {
        set({
          chatRoomInfo: {
            roomId: payload.roomId,
            nickname: payload.nickname,
            profileImg: payload.profileImg,
          },
        });
      },
    }),
    { name: 'MyChat' }
  )
);

export default useChatStore;
