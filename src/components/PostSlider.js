import React from "react";

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
  ImgTopRightImg,
} from "../assets/styles/components/PostSlide.styled";

import {Collaboration,DisLike,OnPlay} from '../assets/images//image'

const PostSlider = ({width, height , postId, position, title, likeCount, collaborate,imageUrl,mediaUrl,nickname  }) => {

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
      <img src={OnPlay} alt='플레이 버튼' />
      </ImgBtmRight>
    </ProfileImgDivDiv>
  );
};

export default React.memo(PostSlider);
