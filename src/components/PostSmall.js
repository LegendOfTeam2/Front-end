// React
import { useState, memo } from 'react';

// Zustand
import usePlayerStore from '../zustand/player';
import useMemberStore from '../zustand/member';
import useLikeStore from '../zustand/like';

// Packages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// Utils
import { getCookie } from '../utils/cookie';

// Assets
import {
  DisMyImgTopRightSm,
  ImgMyBtmRightSm,
  ImgNotSlideSpanSm,
  ImgNotTopSlideSpanSm,
  MyimgSm,
  MyImgBtmLeftSm,
  MyImgBtmLeftDivSm,
  MyImgBtmLeftspanSm,
  MyImgBtmRightSm,
  MyImgDivDivSm,
  MyImgTopBotmLeftSm,
  MyImgTopLeftSm,
  MyImgTopRightSm,
} from '../assets/styles/components/PostSmall.styled';
import {
  DisLike,
  OnPlay,
  Like24,
  DisCollaboration,
  WhiteCollaborate24,
} from '../assets/images/image';

const PostSmall = ({
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

  const Play = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    addPlayList({ postId, title, nickname, mediaUrl, imageUrl, position });
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
    if (position === 'singer') {
      position = 'Singer';
    } else if (position === 'maker') {
      position = 'Maker';
    } else {
      navigate(`/detail/${position}/${postId}`);
    }
  };

  return (
    <MyImgDivDivSm key={postId}>
      <MyimgSm
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
      <ImgMyBtmRightSm>
        <ImgNotTopSlideSpanSm>{title.slice(0, 9)}</ImgNotTopSlideSpanSm>
        <ImgNotSlideSpanSm>{nickname.slice(0, 9)}</ImgNotSlideSpanSm>
      </ImgMyBtmRightSm>
      <MyImgTopLeftSm onClick={goToDetail}>{title}</MyImgTopLeftSm>
      <MyImgTopBotmLeftSm>{nickname.slice(0, 9)}</MyImgTopBotmLeftSm>
      <DisMyImgTopRightSm>
        {collaborate ? (
          <img src={DisCollaboration} alt='콜라보' />
        ) : (
          <img src={WhiteCollaborate24} alt='콜라보 화이트' />
        )}
      </DisMyImgTopRightSm>
      <MyImgTopRightSm>
        {collaborate ? (
          <img src={DisCollaboration} alt='콜라보' />
        ) : (
          <img src={WhiteCollaborate24} alt='콜라보 화이트' />
        )}
      </MyImgTopRightSm>
      <MyImgBtmLeftSm>
        <MyImgBtmLeftDivSm>
          {isLike ? (
            <img src={Like24} alt='좋아요 상태' onClick={LikeClick} />
          ) : (
            <img src={DisLike} alt='좋아요 안한 상태' onClick={LikeClick} />
          )}
          <MyImgBtmLeftspanSm>좋아요</MyImgBtmLeftspanSm>
        </MyImgBtmLeftDivSm>
      </MyImgBtmLeftSm>
      <MyImgBtmRightSm>
        {getCookie('authorization') !== undefined ? (
          <img src={OnPlay} alt='플레이 버튼' onClick={PlayMember} />
        ) : (
          <img src={OnPlay} alt='플레이 버튼' onClick={Play} />
        )}
      </MyImgBtmRightSm>
    </MyImgDivDivSm>
  );
};

export default memo(PostSmall);
