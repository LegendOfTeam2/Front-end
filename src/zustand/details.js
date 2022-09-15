// Zustand
import create from "zustand";

// Utils
import {
  getDetailApi,
  putModifyWriteApi,
  deleteDetailApi,
} from "../utils/apis/details";

const useDetailStore = create((set) => ({
  detailList: [],
  detailListLoaded: false,

  getDetail: async (payload) => {
    const resData = await getDetailApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

      if (resData?.data.success) {
        set({ detailList: resData.data.data });
        set({ detailListLoaded: resData.data.success });

        return resData.data;
      }
  },
  putModifyWrite: async (payload) => {
    const resData = await putModifyWriteApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data;
  },
  deleteDetail: async (payload) => {
    console.log(payload);
    const resData = await deleteDetailApi(payload.postId, payload.position)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data.success;
  },
}));

export default useDetailStore;