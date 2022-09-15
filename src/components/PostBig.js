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
import {
  Collaboration44,
  DisLike40,
  OnPlay60,
} from "../assets/images/image";
import { memo, useState } from "react";
import usePlayerStore from "../zustand/player";
import { useNavigate } from "react-router-dom";
import useMemberStore from "../zustand/member";
import { getCookie } from "../utils/cookie";
import useLikeStore from "../zustand/like";


const PostBig = ({
  postId,
  position,
  title,
  likeCount,
  collaborate,
  imageUrl,
  mediaUrl,
  nickname,
  likeState,
}) => {
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);
  const addLike = useLikeStore((state) => state.addLike);

  const [isLike, setIsLike] = useState(likeState);
  
  const navigate = useNavigate();

  
  const Play = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    addPlayList({ postId, title, nickname, mediaUrl, imageUrl, position });
  };

  const goToDetail = () => {
    if(position === "singer"){
      position =  "Singer";
    }else if(position === "maker"){
      position = "Maker";
    }else{
      navigate(`/details/${position}/${postId}`);
    }
  };

  const LikeClick = () => {
    if (getCookie("authorization") === undefined) {
      alert("로그인후 이용해주세요");
    } else {
      addLike({ postId, position }).then((res) => {
        if (res.success && res.data) {
          setIsLike(true);
        } else {
          setIsLike(false);
        }
      });
    }
  };


  return (
    <BigMyImgDivDiv key={postId}>
      <BigMyimg src={imageUrl === null
            ? profileImgArr[random]
            : imageUrl === ""
            ? profileImgArr[random]
            : imageUrl} alt='' />
      <BigImgMyBtmRight>
        <BigImgNotSlideSpan>{nickname}</BigImgNotSlideSpan>
      </BigImgMyBtmRight>
      <BigMyImgTopLeft onClick={goToDetail}>{title}</BigMyImgTopLeft>
      <DisBigMyImgTopRight>
        {collaborate ? <img src={Collaboration44} alt='콜라보' /> : <></>}
      </DisBigMyImgTopRight>
      <BigMyImgTopRight>
        {collaborate ? <img src={Collaboration44} alt='콜라보' /> : <></>}
      </BigMyImgTopRight>
      <BigMyImgBtmLeft>
        <BigMyImgBtmLeftDiv>
          <img src={DisLike40} alt='좋아요 안한 상태' />
          <BigMyImgBtmLeftspan>좋아요</BigMyImgBtmLeftspan>
        </BigMyImgBtmLeftDiv>
      </BigMyImgBtmLeft>
      <BigMyImgBtmRight onClick={Play}>
        <img src={OnPlay60} alt='플레이 버튼' />
      </BigMyImgBtmRight>
    </BigMyImgDivDiv>
  );
};

export default memo(PostBig);
