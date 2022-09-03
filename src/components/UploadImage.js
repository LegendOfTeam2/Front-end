// React
import { useState, useRef, memo } from 'react';

// Zustand
import useUploadStore from '../zustand/upload';

// Packages
import { GrAdd } from 'react-icons/gr';

// Assests
import {
  UploadImageContainer,
  UploadImageIcon,
  UploadImageText,
  UploadImageInput,
} from '../assets/styles/components/UploadImage.styled';

const UploadImage = ({ setFile, setFileSrc, width }) => {
  const uploadBoxRef = useRef();
  const uploadInputRef = useRef();

  const uploadImage = useUploadStore((state) => state.uploadImage);

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

  const onUploadImage = (e) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('imgUrl', e.target.files[0]);
    uploadImage(formData).then((res) => {
      if (res.success) {
        setFile(res.data[0]);
      } else {
        alert('이미지 업로드에 실패했습니다.');
        setFileSrc('');
        setFile('');
      }
    });
  };

  const onDropHandle = (e) => {
    e.preventDefault();
    console.log(e);

    encodeFileToBase64(e.dataTransfer.files[0]);

    const formData = new FormData();
    formData.append('imgUrl', e.dataTransfer.files[0]);
    uploadImage(formData).then((res) => {
      if (res.success) {
        setFile(res.data[0]);
      } else {
        alert('이미지 업로드에 실패했습니다.');
        setFileSrc('');
        setFile('');
      }
    });
  };

  const onDragOverHandle = (e) => {
    e.preventDefault();
  };

  const changeBoxStyle = (state, e) => {
    e.preventDefault();
    switch (state) {
      case 'enter': {
        uploadBoxRef.current.style.borderColor = '#3eca28';
        uploadBoxRef.current.style.borderWidth = '4px';
        uploadBoxRef.current.style.filter = 'blur(1px)';
        break;
      }
      case 'leave': {
        uploadBoxRef.current.style.borderColor = '#d9d9d9';
        uploadBoxRef.current.style.borderWidth = '1px';
        uploadBoxRef.current.style.filter = 'none';
        break;
      }
      default:
        break;
    }
  };

  const uploadHandle = () => {
    uploadInputRef.current.click();
  };

  return (
    <UploadImageContainer
      width={width}
      onClick={uploadHandle}
      onDrop={(e) => onDropHandle(e)}
      onDragOver={(e) => onDragOverHandle(e)}
      onDragEnter={(e) => changeBoxStyle('enter', e)}
      onDragLeave={(e) => changeBoxStyle('leave', e)}
      ref={uploadBoxRef}
    >
      <UploadImageIcon>
        <GrAdd className='icon'></GrAdd>
      </UploadImageIcon>
      <UploadImageText>이미지 삽입하기</UploadImageText>
      <UploadImageInput
        type={'file'}
        accept={'image/*'}
        onChange={(e) => {
          onUploadImage(e);
          encodeFileToBase64(e.target.files[0]);
        }}
        ref={uploadInputRef}
      />
    </UploadImageContainer>
  );
};

export default memo(UploadImage);
