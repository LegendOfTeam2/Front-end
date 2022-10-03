// React
import { useRef, memo } from 'react';

// Zustand
import useUploadStore from '../zustand/upload';

// Packages
import imageCompression from 'browser-image-compression';
import { TbDragDrop } from 'react-icons/tb';

// Utils
import { warning } from '../utils/toast';

// Assests
import {
  UploadImageContainer,
  UploadImageIcon,
  UploadImageText,
  UploadImageInput,
} from '../assets/styles/components/UploadImage.styled';

const UploadImage = ({ setFile, setFileSrc, width, height, text }) => {
  const uploadImage = useUploadStore((state) => state.uploadImage);

  const uploadInputRef = useRef();

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setFileSrc(reader.result);
        resolve();
      };
    });
  };

  const handleImageConvert = async (e) => {
    const imageFile = e.target.files[0];
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(imageFile, options);
    const reader = new FileReader();
    reader.readAsDataURL(compressedFile);
    reader.onloadend = () => {
      const base64data = reader.result;
      onUploadImage(base64data);
    };
  };
  const onUploadImage = (dataURI) => {
    const byteString = dataURI.split(',')[1].toString('base64');

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: 'image/png',
    });
    const file = new File([blob], 'image.png');

    const formData = new FormData();
    formData.append('imgUrl', file);
    uploadImage(formData).then((res) => {
      if (res.success) {
        setFile(res.data[0]);
      } else {
        warning('이미지 업로드에 실패했습니다.');
        setFileSrc('');
        setFile('');
      }
    });
  };
  const handleDragImageConvert = async (e) => {
    e.preventDefault();

    const imageFile = e.dataTransfer.files[0];

    encodeFileToBase64(imageFile);
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(imageFile, options);
    const reader = new FileReader();
    reader.readAsDataURL(compressedFile);
    reader.onloadend = () => {
      const base64data = reader.result;
      onDropHandle(base64data);
    };
  };
  const onDropHandle = (compressedFile) => {
    const formData = new FormData();
    formData.append('imgUrl', compressedFile);
    uploadImage(formData).then((res) => {
      if (res.success) {
        setFile(res.data[0]);
      } else {
        warning('이미지 업로드에 실패했습니다.');
        setFileSrc('');
        setFile('');
      }
    });
  };

  const onDragOverHandle = (e) => {
    e.preventDefault();
  };

  const uploadHandle = () => {
    uploadInputRef.current.click();
  };

  return (
    <UploadImageContainer
      width={width}
      height={height}
      onDrop={(e) => onDropHandle(e)}
      onDragOver={(e) => onDragOverHandle(e)}
    >
      <UploadImageIcon>
        <TbDragDrop className='icon' />
      </UploadImageIcon>
      <UploadImageText onClick={uploadHandle}>{text}</UploadImageText>
      <UploadImageInput
        type={'file'}
        accept={'image/*'}
        onChange={(e) => {
          handleImageConvert(e);
          encodeFileToBase64(e.target.files[0]);
        }}
        ref={uploadInputRef}
      />
    </UploadImageContainer>
  );
};

export default memo(UploadImage);
