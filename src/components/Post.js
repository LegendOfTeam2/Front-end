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
import {
  DisCollaboration,
  Collaborate,
  DisLike,
  OnPlay,
  Like24,
} from "../assets/images/image";
import { useState, useRef, memo } from "react";
import usePlayerStore from "../zustand/player";
import useLikeStore from "../zustand/like";
import { getCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";
const Post = ({
  postId,
  position,
  title,
  collaborate,
  imageUrl,
  mediaUrl,
  nickname,
  likes,
  likeState,
}) => {
  const [isLike, setIsLike] = useState(likeState);

  const likeCountRef = useRef();
  const navigate = useNavigate()
  

  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const addLike = useLikeStore((state) => state.addLike);

  const Play = () => {
    viewStateChange(true);
    addPlayList({ postId, title, nickname, mediaUrl, imageUrl, position });
  };

  const LikeClick = () => {
    if (getCookie("authorization") === undefined) {
      alert("로그인후 이용해주세요");
    } else {
      addLike({ postId, position }).then((res) => {
        if (res.success && res.data) {
          setIsLike(true);
          likeCountRef.current.innerText = likes + 1
        } else {
          setIsLike(false);
          likeCountRef.current.innerText = likes - 1
        }
      });
    }
  };

  const goToDetail = () => {
    navigate(`/details/${position}/${postId}`);
  }

  
  return (
    <MyImgDivDiv>
      <Myimg src={imageUrl} alt='' />
      <ImgMyBtmRight>
        <ImgNotSlideSpan>{nickname}</ImgNotSlideSpan>
      </ImgMyBtmRight>
      <MyImgTopLeft  onClick={goToDetail} >{title}</MyImgTopLeft>
      <DisMyImgTopRight>
        {collaborate ? <img src={Collaborate} alt='콜라보' /> : <></>}
      </DisMyImgTopRight>
      <MyImgTopRight>
        {collaborate ? <img src={Collaborate} alt='콜라보' /> : <></>}
      </MyImgTopRight>
      <MyImgBtmLeft>
        <MyImgBtmLeftDiv>
          {isLike ? (
            <img src={Like24} alt='좋아요 상태' onClick={LikeClick} />
          ) : (
            <img src={DisLike} alt='좋아요 안한 상태' onClick={LikeClick} />
          )}

          <MyImgBtmLeftspan ref={likeCountRef}>{likes}</MyImgBtmLeftspan>
        </MyImgBtmLeftDiv>
      </MyImgBtmLeft>
      <MyImgBtmRight>
        <img src={OnPlay} alt='플레이 버튼' onClick={Play} />
      </MyImgBtmRight>
    </MyImgDivDiv>
  );
};

export default memo(Post);
