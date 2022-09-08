// React
import React from 'react';

// Zustand
import usePlayerStore from '../zustand/player';
import { Collaboration, DisLike, OnPlay } from "../assets/images//image";
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
  ImgBtmLeftDiv,
  ImgBtmLeftDivSapn,
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
      <img src={Collaboration} alt='콜라보'/>
      </ImgTopRight>
      <ImgBtmLeft>
      <ImgBtmLeftDiv>
      <img src={DisLike} alt='좋아요 안한 상태' />

      <ImgBtmLeftDivSapn>372</ImgBtmLeftDivSapn>
      </ImgBtmLeftDiv>
        
      </ImgBtmLeft>
      <ImgBtmRight>
      <img src={OnPlay} alt='플레이 버튼' onClick={onPlayerHandle}/>
      </ImgBtmRight>
    </ProfileImgDivDiv>
  );
};

export default React.memo(PostSlider);
