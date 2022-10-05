// Zustand
import create from 'zustand';

// Utils
import { uploadImageApi, uploadAudioApi } from '../utils/apis/upload';

interface UploadState {
  uploadImage : (payload : any) => any
  uploadAudio : (payload : any) => any
}

const useUploadStore = create<UploadState>((set) => ({
  uploadImage: async (payload) => {
    const resData : any = await uploadImageApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));

    return resData.data;
  },
  uploadAudio: async (payload) => {
    const resData : any = await uploadAudioApi(payload)
      .then((res) => res)
      .catch((err) => console.log(err));
    return resData.data;
  },
}));

export default useUploadStore;
