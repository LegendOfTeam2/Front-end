
import {
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
} from "../assets/styles/components/Psot.styled";
import { Collaboration, DisLike, OnPlay } from "../assets/images//image";
import React from "react";
const Post = ({

  postId,
  position,
  title,
  likeCount,
  collaborate,
  imageUrl,
  mediaUrl,
  nickname,
  line_height,
  ft_size,
  ft_weight,
}) => {
  return (
    <MyImgDivDiv>
      <Myimg
        src='https://i.pinimg.com/originals/51/31/a8/5131a8244ab74ea8523d59e1ba81606a.jpg'
        alt=''
      />
      <ImgMyBtmRight>
        <ImgNotSlideSpan
          line_height={line_height}
          ft_size={ft_size}
          ft_weight={ft_weight}
        >
          아티스트 이름
        </ImgNotSlideSpan>
      </ImgMyBtmRight>
      <MyImgTopLeft>나는 백예린</MyImgTopLeft>
      <MyImgTopRight>
        <img src={Collaboration} alt='콜라보' />
      </MyImgTopRight>
      <MyImgBtmLeft>
        <MyImgBtmLeftDiv>
          <img src={DisLike} alt='좋아요 안한 상태' />
          <MyImgBtmLeftspan>372</MyImgBtmLeftspan>
        </MyImgBtmLeftDiv>
      </MyImgBtmLeft>
      <MyImgBtmRight>
        <img src={OnPlay} alt='플레이 버튼' />
      </MyImgBtmRight>
    </MyImgDivDiv>
  );
};

export default React.memo(Post);
