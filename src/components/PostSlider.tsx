// React
import { useState, memo } from 'react';

// Zustand
import usePlayerStore from '../zustand/player';
import useLikeStore from '../zustand/like';
import useMemberStore from '../zustand/member';

// Packages
import { useNavigate } from 'react-router-dom';
import { warning, info } from '../utils/toast';

// Utils
import { getCookie } from '../utils/cookie';

import {
  DisLike,
  OnPlay,
  Like24,
  DisCollaboration,
  WhiteCollaborate24,
} from '../assets/images/image';
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
  ImgMainSpanNickname,
  ImgMainSpanTitle,
  ImgTopBtmLeft,
} from '../assets/styles/components/PostSlide.styled';

interface PostSliderProps {
  postId : any;
  position : any;
  title : any;
  collaborate : any;
  imageUrl : any;
  mediaUrl : any;
  nickname : any;
  likeState : any;
}

const PostSlider = ({
  postId,
  position,
  title,
  collaborate,
  imageUrl,
  mediaUrl,
  nickname,
  likeState,
} : PostSliderProps) => {
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const postPlayList = usePlayerStore((state) => state.postPlayList);
  const addLike = useLikeStore((state) => state.addLike);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const [isLike, setIsLike] = useState(likeState);

  const navigate = useNavigate();

  const play = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    addPlayList({
      postId,
      title,
      nickname,
      mediaUrl,
      imageUrl,
      position,
      collaborate,
    });
  };

  const playMember = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    postPlayList({
      postId,
      title,
      nickname,
      mediaUrl,
      imageUrl,
      position,
      collaborate,
    });
  };

  const likeClick = () => {
    if (getCookie('authorization') === undefined) {
      warning('로그인 후 이용해 주세요.');
    } else {
      addLike({ postId, position }).then((res : any) => {
        if (res.success && res.data) {
          info('게시글에 좋아요를 눌렀습니다.');
          setIsLike(true);
        } else {
          info('게시글에 좋아요를 취소했습니다.');
          setIsLike(false);
        }
      });
    }
  };

  const goToDetail = () => {
    navigate(`/detail/${position}/${postId}`);
  };
  return (
    <ProfileImgDivDiv key={postId}>
      <Profileimg
        src={
          imageUrl === null
            ? profileImgArr[random]
            : imageUrl === ''
            ? profileImgArr[random]
            : imageUrl
        }
        alt=''
      />
      <ImgMainBtmRight>
        <ImgMainSpan>
          <ImgMainSpanTitle>{title}</ImgMainSpanTitle>
          <ImgMainSpanNickname>{nickname}</ImgMainSpanNickname>
        </ImgMainSpan>
      </ImgMainBtmRight>
      <ImgTopLeft onClick={goToDetail}>{title}</ImgTopLeft>
      <ImgTopBtmLeft onClick={goToDetail}>{nickname}</ImgTopBtmLeft>

      <DisImgTopRight>
        {collaborate ? (
          <img src={DisCollaboration} alt='콜라보' />
        ) : (
          <img src={WhiteCollaborate24} alt='콜라보' />
        )}
      </DisImgTopRight>
      <ImgTopRight>
        {collaborate ? (
          <img src={DisCollaboration} alt='콜라보' />
        ) : (
          <img src={WhiteCollaborate24} alt='콜라보' />
        )}
      </ImgTopRight>
      <ImgBtmLeft>
        <ImgBtmLeftDiv>
          {isLike ? (
            <img src={Like24} alt='좋아요 상태' onClick={likeClick} />
          ) : (
            <img src={DisLike} alt='좋아요 안한 상태' onClick={likeClick} />
          )}

          <ImgBtmLeftDivSapn>좋아요</ImgBtmLeftDivSapn>
        </ImgBtmLeftDiv>
      </ImgBtmLeft>
      {getCookie('authorization') !== undefined ? (
        <ImgBtmRight>
          <img src={OnPlay} alt='플레이 버튼' onClick={playMember} />
        </ImgBtmRight>
      ) : (
        <ImgBtmRight>
          <img src={OnPlay} alt='플레이 버튼' onClick={play} />
        </ImgBtmRight>
      )}
    </ProfileImgDivDiv>
  );
};

export default memo(PostSlider);
