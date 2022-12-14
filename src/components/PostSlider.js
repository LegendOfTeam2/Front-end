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

const PostSlider = ({
  postId,
  position,
  title,
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
      warning('????????? ??? ????????? ?????????.');
    } else {
      addLike({ postId, position }).then((res) => {
        if (res.success && res.data) {
          info('???????????? ???????????? ???????????????.');
          setIsLike(true);
        } else {
          info('???????????? ???????????? ??????????????????.');
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
          <img src={DisCollaboration} alt='?????????' />
        ) : (
          <img src={WhiteCollaborate24} alt='?????????' />
        )}
      </DisImgTopRight>
      <ImgTopRight>
        {collaborate ? (
          <img src={DisCollaboration} alt='?????????' />
        ) : (
          <img src={WhiteCollaborate24} alt='?????????' />
        )}
      </ImgTopRight>
      <ImgBtmLeft>
        <ImgBtmLeftDiv>
          {isLike ? (
            <img src={Like24} alt='????????? ??????' onClick={likeClick} />
          ) : (
            <img src={DisLike} alt='????????? ?????? ??????' onClick={likeClick} />
          )}

          <ImgBtmLeftDivSapn>?????????</ImgBtmLeftDivSapn>
        </ImgBtmLeftDiv>
      </ImgBtmLeft>
      {getCookie('authorization') !== undefined ? (
        <ImgBtmRight>
          <img src={OnPlay} alt='????????? ??????' onClick={playMember} />
        </ImgBtmRight>
      ) : (
        <ImgBtmRight>
          <img src={OnPlay} alt='????????? ??????' onClick={play} />
        </ImgBtmRight>
      )}
    </ProfileImgDivDiv>
  );
};

export default memo(PostSlider);
