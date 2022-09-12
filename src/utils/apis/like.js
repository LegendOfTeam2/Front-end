import api_auth from "./api/api_auth";

export const addLikeApi = (payload) => {
  return api_auth.post(
    `/auth/post/${payload.postId}/like?position=${payload.position}`,
    payload
  );
};
export const getMakerLikePostApi = (payload) => {
  return api_auth.get(`/auth/makerlikepost`, payload);
};

export const getSingerLikePostApi = (payload) => {
  return api_auth.get(`/auth/singerlikepost`, payload);
};
