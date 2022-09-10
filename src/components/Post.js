// Assets
import {
  DisMyImgTopRight,
  ImgMyBtmRight,
  ImgNotSlideSpan,
  Myimg,
  MyImgBtmLeft,
  MyImgBtmLeftDiv,
  MyImgBtmLeftspan,
  MyImgBtmRight,
  MyImgDivDiv,
  MyImgTopLeft,
  MyImgTopRight,
} from "../assets/styles/components/Post.styled";
import { DisCollaboration,Collaborate, DisLike, OnPlay } from "../assets/images/image";
import React, { useState } from "react";

const Post = ({
  postId,
  position,
  title,
  likeCount,
  collaborate,
  imageUrl,
  mediaUrl,
  nickname,
  likes
}) => {
  return (
    <MyImgDivDiv>
      <Myimg src={imageUrl} alt='' />
      <ImgMyBtmRight>
        <ImgNotSlideSpan>{nickname}</ImgNotSlideSpan>
      </ImgMyBtmRight>
      <MyImgTopLeft>{title}</MyImgTopLeft>
      <DisMyImgTopRight>
        { collaborate ? (<img src={Collaborate} alt='콜라보' />):(<></>)}
        
      </DisMyImgTopRight>
      <MyImgTopRight>
      { collaborate ? (<img src={Collaborate} alt='콜라보' />):(<></>)}
      </MyImgTopRight>
      <MyImgBtmLeft>
        <MyImgBtmLeftDiv>
          <img src={DisLike} alt='좋아요 안한 상태' />
          <MyImgBtmLeftspan>{likes}</MyImgBtmLeftspan>
        </MyImgBtmLeftDiv>
      </MyImgBtmLeft>
      <MyImgBtmRight>
        <img src={OnPlay} alt='플레이 버튼' />
      </MyImgBtmRight>
    </MyImgDivDiv>
  );
};

export default React.memo(Post);
