// React
import { useState, memo } from 'react';

// Zustand
import usePlayerStore from '../zustand/player';
import useMemberStore from '../zustand/member';
import useLikeStore from '../zustand/like';

// Packages
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Utils
import { getCookie } from '../utils/cookie';
import { warning, info } from '../utils/toast';

// Assets
import {
  BigImgMyBtmRight,
  BigImgNotSlideSpan,
  BigImgNotSlideTitleSpan,
  BigMyimg,
  BigMyImgBtmLeft,
  BigMyImgBtmLeftDiv,
  BigMyImgBtmLeftspan,
  BigMyImgBtmRight,
  BigMyImgDivDiv,
  BigMyImgTopBtmLeft,
  BigMyImgTopLeft,
  BigMyImgTopRight,
  DisBigMyImgTopRight,
} from '../assets/styles/components/PostBig.styled';
import {
  DisCollaboration40,
  DisLike40,
  Like40,
  OnPlay60,
  WhiteCollaborate,
} from '../assets/images/image';

const PostBig = ({
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
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);
  const addLike = useLikeStore((state) => state.addLike);

  const [isLike, setIsLike] = useState(likeState);

  const navigate = useNavigate();

  const play = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    addPlayList({ postId, title, nickname, mediaUrl, imageUrl, position });
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
    });
  };

  const goToDetail = () => {
    if (position === 'singer') {
      position = 'Singer';
    } else if (position === 'maker') {
      position = 'Maker';
    } else {
      navigate(`/detail/${position}/${postId}`);
    }
  };

  const likeClick = () => {
    if (getCookie('authorization') === undefined) {
      warning('로그인 후 이용해 주세요.');
    } else {
      addLike({ postId, position }).then((res) => {
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

  return (
    <BigMyImgDivDiv key={postId}>
      <BigMyimg
        src={
          imageUrl === null
            ? profileImgArr[random]
            : imageUrl === ''
            ? profileImgArr[random]
            : imageUrl
        }
        alt=''
      />
      <ToastContainer />
      <BigImgMyBtmRight>
        <BigImgNotSlideTitleSpan>{title}</BigImgNotSlideTitleSpan>
        <BigImgNotSlideSpan>{nickname}</BigImgNotSlideSpan>
      </BigImgMyBtmRight>
      <BigMyImgTopLeft onClick={goToDetail}>{title}</BigMyImgTopLeft>
      <BigMyImgTopBtmLeft onClick={goToDetail}>
        {nickname}
      </BigMyImgTopBtmLeft>
      <DisBigMyImgTopRight>
        {collaborate ? (
          <img src={DisCollaboration40} alt='콜라보' />
        ) : (
          <img src={WhiteCollaborate} alt='콜라보' />
        )}
      </DisBigMyImgTopRight>
      <BigMyImgTopRight>
        {collaborate ? (
          <img src={DisCollaboration40} alt='콜라보' />
        ) : (
          <img src={WhiteCollaborate} alt='콜라보' />
        )}
      </BigMyImgTopRight>
      <BigMyImgBtmLeft>
        <BigMyImgBtmLeftDiv>
          {isLike ? (
            <img src={Like40} alt='좋아요 상태' onClick={likeClick} />
          ) : (
            <img src={DisLike40} alt='좋아요 안한 상태' onClick={likeClick} />
          )}
          <BigMyImgBtmLeftspan>좋아요</BigMyImgBtmLeftspan>
        </BigMyImgBtmLeftDiv>
      </BigMyImgBtmLeft>
      {getCookie('authorization') !== undefined ? (
        <BigMyImgBtmRight onClick={playMember}>
          <img src={OnPlay60} alt='플레이 버튼' />
        </BigMyImgBtmRight>
      ) : (
        <BigMyImgBtmRight onClick={play}>
          <img src={OnPlay60} alt='플레이 버튼' />
        </BigMyImgBtmRight>
      )}
    </BigMyImgDivDiv>
  );
};

export default memo(PostBig);
