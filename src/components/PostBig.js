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
  DisCollaboration40,
  DisLike40,
  OnPlay60,
} from "../assets/images/image";
import { memo } from "react";
import usePlayerStore from "../zustand/player";

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
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);

  const Play = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    addPlayList({ postId, title, nickname, mediaUrl, imageUrl, position });
  };

  return (
    <BigMyImgDivDiv>
      <BigMyimg src={imageUrl} alt='' />
      <BigImgMyBtmRight>
        <BigImgNotSlideSpan>{nickname}</BigImgNotSlideSpan>
      </BigImgMyBtmRight>
      <BigMyImgTopLeft>{title}</BigMyImgTopLeft>
      <DisBigMyImgTopRight>
        {collaborate ? <img src={DisCollaboration40} alt='콜라보' /> : <></>}
      </DisBigMyImgTopRight>
      <BigMyImgTopRight>
        {collaborate ? <img src={DisCollaboration40} alt='콜라보' /> : <></>}
      </BigMyImgTopRight>
      <BigMyImgBtmLeft>
        <BigMyImgBtmLeftDiv>
          <img src={DisLike40} alt='좋아요 안한 상태' />
          <BigMyImgBtmLeftspan>{likeCount}</BigMyImgBtmLeftspan>
        </BigMyImgBtmLeftDiv>
      </BigMyImgBtmLeft>
      <BigMyImgBtmRight onClick={Play}>
        <img src={OnPlay60} alt='플레이 버튼' />
      </BigMyImgBtmRight>
    </BigMyImgDivDiv>
  );
};

export default memo(PostBig);
