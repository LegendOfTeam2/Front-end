import api_chat from './api/api_chat';

export const makeRoomApi = (payload) => {
  return api_chat.post(`/chat/room`, payload);
};
