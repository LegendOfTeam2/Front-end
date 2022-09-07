import React from "react";
import { AiFillLike } from "react-icons/ai";
import {
  BsFillAlarmFill,
  BsFillArchiveFill,
  BsFillPlayCircleFill,
} from "react-icons/bs";
import {
  ImgBtmLeft,
  ImgBtmRight,
  ImgMainBtmRight,
  ImgTopLeft,
  ImgTopRight,
  ProfileImgDivDiv,
  Profileimg,
} from "../assets/styles/components/Post.styled";

const Post = ({width, height , postId, position, title, likeCount, collaborate,imageUrl,mediaUrl,nickname  }) => {

  return (
    <ProfileImgDivDiv>
      <Profileimg
        width={width}
        height={height}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjg6vTEXL8y0oEnq67IOyZm2cIghFI3KTlg&usqp=CAU'
        alt=''
      />
      <ImgMainBtmRight>
        <BsFillPlayCircleFill size={25} />
      </ImgMainBtmRight>
      <ImgTopLeft>나는 페페</ImgTopLeft>
      <ImgTopRight>
        <BsFillAlarmFill color='white' />
      </ImgTopRight>
      <ImgBtmLeft>
        <AiFillLike color='white' />
        372
      </ImgBtmLeft>
      <ImgBtmRight>
        <BsFillArchiveFill color='white' />
      </ImgBtmRight>
    </ProfileImgDivDiv>
  );
};

export default React.memo(Post);
