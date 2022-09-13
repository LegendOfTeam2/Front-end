// React
import { useState, memo, useRef } from "react";

// Zustand
import usePlayerStore from "../zustand/player";
import useLikeStore from "../zustand/like";

// Packages
import { useNavigate } from "react-router-dom";

// Utils
import { getCookie } from "../utils/cookie";

import {
  DisCollaboration,
  DisLike,
  OnPlay,
  Like24,
} from "../assets/images/image";
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
  DisImgTopRight,
} from "../assets/styles/components/PostSlide.styled";
const PostSlider = ({
  postId,
  position,
  title,
  likeCount,
  collaborate,
  imageUrl,
  mediaUrl,
  nickname,
  likes,
  likeState,
}) => {
  const [isLike, setIsLike] = useState(likeState);

  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const addLike = useLikeStore((state) => state.addLike);

  const likeCountRef = useRef();
  const navigate = useNavigate();

  const Play = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    addPlayList({ postId, title, nickname, mediaUrl, imageUrl, position });
  };

  const LikeClick = () => {
    if (getCookie("authorization") === undefined) {
      alert("로그인후 이용해주세요");
    } else {
      addLike({ postId, position }).then((res) => {
        if (res.success && res.data) {
          setIsLike(true);
          likeCountRef.current.innerText = likes + 1;
        } else {
          setIsLike(false);
          likeCountRef.current.innerText = likes - 1;
        }
      });
    }
  };

  const goToDetail = () => {
    navigate(`/details/${position}/${postId}`);
  };

  return (
    <ProfileImgDivDiv>
      <Profileimg src={imageUrl} alt='' />
      <ImgMainBtmRight>
        <ImgMainSpan>{nickname}</ImgMainSpan>
      </ImgMainBtmRight>
      <ImgTopLeft onClick={goToDetail}>{title}</ImgTopLeft>
      <DisImgTopRight>
        <img src={DisCollaboration} alt='콜라보' />
      </DisImgTopRight>
      <ImgTopRight>
        <img src={DisCollaboration} alt='콜라보' />
      </ImgTopRight>
      <ImgBtmLeft>
        <ImgBtmLeftDiv>
          {isLike ? (
            <img src={Like24} alt='좋아요 상태' onClick={LikeClick} />
          ) : (
            <img src={DisLike} alt='좋아요 안한 상태' onClick={LikeClick} />
          )}

          <ImgBtmLeftDivSapn>{likes}</ImgBtmLeftDivSapn>
        </ImgBtmLeftDiv>
      </ImgBtmLeft>
      <ImgBtmRight>
        <img src={OnPlay} alt='플레이 버튼' onClick={Play} />
      </ImgBtmRight>
    </ProfileImgDivDiv>
  );
};

export default memo(PostSlider);
