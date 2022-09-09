
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
import { Collaboration40, DisLike40, OnPlay60 } from "../assets/images/image";
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
        src='https://i.pinimg.com/originals/51/31/a8/5131a8244ab74ea8523d59e1ba81606a.jpg'
        alt=''
      />
      <BigImgMyBtmRight>
        <BigImgNotSlideSpan>
          아티스트 이름
        </BigImgNotSlideSpan>
      </BigImgMyBtmRight>
      <BigMyImgTopLeft>나는 백예린</BigMyImgTopLeft>
      <DisBigMyImgTopRight><img src={Collaboration40} alt='콜라보' /></DisBigMyImgTopRight>
      <BigMyImgTopRight>
        <img src={Collaboration40} alt='콜라보' />
      </BigMyImgTopRight>
      <BigMyImgBtmLeft>
        <BigMyImgBtmLeftDiv>
          <img src={DisLike40} alt='좋아요 안한 상태' />
          <BigMyImgBtmLeftspan>372</BigMyImgBtmLeftspan>
        </BigMyImgBtmLeftDiv>
      </BigMyImgBtmLeft>
      <BigMyImgBtmRight>
        <img src={OnPlay60} alt='플레이 버튼' />
      </BigMyImgBtmRight>
    </BigMyImgDivDiv>
  );
};

export default React.memo(PostBig);
