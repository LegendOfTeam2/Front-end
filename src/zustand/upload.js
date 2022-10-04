// Zustand
import create from 'zustand';

// Utils
import { uploadImageApi, uploadAudioApi } from '../utils/apis/upload';

const useUploadStore = create((set) => ({
  uploadImage: async (payload) => {
    const resData = await uploadImageApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    return resData.data;
  },
  uploadAudio: async (payload) => {
    const resData = await uploadAudioApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data;
  },
}));

export default useUploadStore;
