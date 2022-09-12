
import {
  BigImgMyBtmRight,
  BigImgNotSlideSpan,
  BigMyimg,
  BigMyImgBtmLeft,
  BigMyImgBtmLeftDiv,
  BigMyImgBtmLeftspan,
  BigMyImgBtmRight,
  BigMyImgDivDiv,
  BigMyImgTopLeft,
  BigMyImgTopRight,
  DisBigMyImgTopRight,
} from "../assets/styles/components/PsotBig.styled";
import { DisCollaboration40, DisLike40, OnPlay60 } from "../assets/images/image";
import React from "react";
const PostBig = ({
  postId,
  position,
  title,
  likeCount,
  collaborate,
  imageUrl,
  mediaUrl,
  nickname,

}) => {
  return (
    <BigMyImgDivDiv>
      <BigMyimg
        src={imageUrl}
        alt=''
      />
      <BigImgMyBtmRight>
        <BigImgNotSlideSpan>
          {nickname}
        </BigImgNotSlideSpan>
      </BigImgMyBtmRight>
      <BigMyImgTopLeft>{title}</BigMyImgTopLeft>
      <DisBigMyImgTopRight>{ collaborate ? (<img src={DisCollaboration40} alt='콜라보' />):(<></>)}</DisBigMyImgTopRight>
      <BigMyImgTopRight>
      { collaborate ? (<img src={DisCollaboration40} alt='콜라보' />):(<></>)}
      </BigMyImgTopRight>
      <BigMyImgBtmLeft>
        <BigMyImgBtmLeftDiv>
          <img src={DisLike40} alt='좋아요 안한 상태' />
          <BigMyImgBtmLeftspan>{likeCount}</BigMyImgBtmLeftspan>
        </BigMyImgBtmLeftDiv>
      </BigMyImgBtmLeft>
      <BigMyImgBtmRight>
        <img src={OnPlay60} alt='플레이 버튼' />
      </BigMyImgBtmRight>
    </BigMyImgDivDiv>
  );
};

export default React.memo(PostBig);
