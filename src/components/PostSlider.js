// React
import React from 'react';

// Zustand
import usePlayerStore from '../zustand/player';

import { AiFillLike } from 'react-icons/ai';
import { BsFillAlarmFill, BsFillArchiveFill } from 'react-icons/bs';
import {
  ImgBtmLeft,
  ImgBtmRight,
  ImgMainBtmRight,
  ImgTopLeft,
  ImgTopRight,
  ProfileImgDivDiv,
  Profileimg,
  ImgMainSpan,
} from '../assets/styles/components/PostSlide.styled';

const PostSlider = ({
  width,
  height,
  postId,
  position,
  title,
  likeCount,
  collaborate,
  imageUrl,
  mediaUrl,
  nickname,
}) => {
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);

  const onPlayerHandle = () => {
      viewStateChange(true);
  };

  return (
    <ProfileImgDivDiv>
      <Profileimg
        width={width}
        height={height}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjg6vTEXL8y0oEnq67IOyZm2cIghFI3KTlg&usqp=CAU'
        alt=''
      />
      <ImgMainBtmRight>
        <ImgMainSpan>나는 이영지</ImgMainSpan>
      </ImgMainBtmRight>
      <ImgTopLeft>나는 페페</ImgTopLeft>
      <ImgTopRight>
        <BsFillAlarmFill color='white' />
      </ImgTopRight>
      <ImgBtmLeft>
        <AiFillLike color='white' />
        372
      </ImgBtmLeft>
      <ImgBtmRight onClick={onPlayerHandle}>
        <BsFillArchiveFill color='white' />
      </ImgBtmRight>
    </ProfileImgDivDiv>
  );
};

export default React.memo(PostSlider);
