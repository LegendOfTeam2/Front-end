// Zustand
import create from 'zustand';
import { devtools } from 'zustand/middleware';

// Utils
import {
  makeRoomApi,
  getRoomsApi,
  getChatMessagesApi,
} from '../utils/apis/chat';

interface FollowState {
  subscription: any
  rooms: any
  chatMessages: any
  prevChatMessages: any
  chatRoomInfo: { roomId: any; nickname: any; profileImg: any };
  prevChatMessagesIsLoaded: any;
  getRoomsIsLoaded: any;
  getRooms: any
  makeRoom: (payload: any) => any;
  getPrevChatMessages: (payload: any) => any;
  setChatMessages: (payload: any) => any;
  setSubscription: (payload: any) => any;
  unSetSubscription: (payload: any) => any;
  setChatRoomInfo: (payload: any) => any;
}

const useChatStore = create<FollowState>()(
  devtools(
    (set) => ({
      subscription: [],
      rooms: [],
      chatMessages: [],
      prevChatMessages: [],
      chatRoomInfo: { roomId: '', nickname: '', profileImg: '' },
      prevChatMessagesIsLoaded: false,
      getRoomsIsLoaded: false,
      makeRoom: async (payload) => {
        const resData : any = await makeRoomApi(payload)
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
      getPrevChatMessages: async (payload) => {
        const resData = await getChatMessagesApi(payload)
          .then((res) => res)
          .catch((err) => console.log(err));

        if (resData?.data.success) {
          set({ prevChatMessages: resData.data.data });
          set({ prevChatMessagesIsLoaded: true });

          return resData.data;
        }
      },
      setChatMessages: (payload) => {
        set((state) => {
          return { chatMessages: [...state.chatMessages, payload] };
        });
      },
      clearChatMessages: () => {
        set({ chatMessages: [] });
      },
      setSubscription: (payload) => {
        set((state) => {
          return { subscription: [...state.subscription, payload] };
        });
      },
      unSetSubscription: (payload) => {
        set(( state ) : any => {
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
