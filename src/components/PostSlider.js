// React
import { useState, memo } from 'react';

// Zustand
import usePlayerStore from '../zustand/player';
import useLikeStore from '../zustand/like';

// Packages
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Utils
import { getCookie } from '../utils/cookie';

import {
  DisLike,
  OnPlay,
  Like24,
  Collaborate,
  DisCollaboration,
  WhiteCollaborate,
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
import useMemberStore from '../zustand/member';
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
  const postPlayList = usePlayerStore((state) => state.postPlayList);
  const addLike = useLikeStore((state) => state.addLike);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);
 
  const navigate = useNavigate();

  const Play = () => {
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

  const PlayMember = () => {
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

  const LikeClick = () => {
    if (getCookie('authorization') === undefined) {
      alert('로그인 후 이용해 주세요.');
      navigate('/signin');
    } else {
      addLike({ postId, position }).then((res) => {
        if (res.success && res.data) {
          toast.info('게시글에 좋아요를 눌렀습니다.', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1500,
            draggablePercent: 60,
            hideProgressBar: true,
          });
          setIsLike(true);
        } else {
          toast.info('게시글에 좋아요를 취소했습니다.', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1500,
            draggablePercent: 60,
            hideProgressBar: true,
          });
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
      <ToastContainer />
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
          <ImgMainSpanTitle>{title.slice(0, 9)}</ImgMainSpanTitle>
          <ImgMainSpanNickname>{nickname.slice(0, 9)}</ImgMainSpanNickname>
        </ImgMainSpan>
      </ImgMainBtmRight>
      <ImgTopLeft onClick={goToDetail}>{title}</ImgTopLeft>
      <ImgTopBtmLeft onClick={goToDetail}>{nickname.slice(0, 9)}</ImgTopBtmLeft>

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
            <img src={Like24} alt='좋아요 상태' onClick={LikeClick} />
          ) : (
            <img src={DisLike} alt='좋아요 안한 상태' onClick={LikeClick} />
          )}

          <ImgBtmLeftDivSapn>좋아요</ImgBtmLeftDivSapn>
        </ImgBtmLeftDiv>
      </ImgBtmLeft>
      {getCookie('authorization') !== undefined ? (
        <ImgBtmRight>
          <img src={OnPlay} alt='플레이 버튼' onClick={PlayMember} />
        </ImgBtmRight>
      ) : (
        <ImgBtmRight>
          <img src={OnPlay} alt='플레이 버튼' onClick={Play} />
        </ImgBtmRight>
      )}
    </ProfileImgDivDiv>
  );
};

export default memo(PostSlider);
