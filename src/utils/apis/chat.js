import api_auth from './api/api_auth';

export const makeRoomApi = (payload) => {
  return api_auth.post(`/auth/chat/room`, payload);
};
export const getRoomsApi = () => {
  return api_auth.get(`/auth/chat/rooms`);
};
export const getChatMessagesApi = (payload) => {
  return api_auth.post(`/auth/chat/room/${payload}`);
};
