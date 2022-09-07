import { AiFillLike } from "react-icons/ai";
import {
  BsFillAlarmFill,
  BsFillArchiveFill,
} from "react-icons/bs";
import {
  ImgMyBtmRight,
  ImgNotSlideSpan,
  Myimg,
  MyImgBtmLeft,
  MyImgBtmRight,
  MyImgDivDiv,
  MyImgTopLeft,
  MyImgTopRight,
} from "../assets/styles/components/Psot.styled";

const Post = ({
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
  line_height,
  ft_size,
  ft_weight
}) => {
  return (
    <MyImgDivDiv>
      <Myimg
        width={width}
        height={height}
        src='https://i.pinimg.com/originals/51/31/a8/5131a8244ab74ea8523d59e1ba81606a.jpg'
        alt=''
      />
      <ImgMyBtmRight>
        <ImgNotSlideSpan line_height={line_height} ft_size={ft_size} ft_weight={ft_weight} >아티스트 이름</ImgNotSlideSpan>
      </ImgMyBtmRight>
      <MyImgTopLeft>나는 백예린</MyImgTopLeft>
      <MyImgTopRight>
        <BsFillAlarmFill color='white' />
      </MyImgTopRight>
      <MyImgBtmLeft>
        <AiFillLike color='white' />
        372
      </MyImgBtmLeft>
      <MyImgBtmRight>
        <BsFillArchiveFill color='white' />
      </MyImgBtmRight>
    </MyImgDivDiv>
  );
};

export default Post;
