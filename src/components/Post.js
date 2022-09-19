// React
import { useState, memo, Fragment } from 'react';

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
  DisMyImgTopRight,
  ImgMyBtmRight,
  ImgNotSlideSpan,
  ImgNotTopSlideSpan,
  Myimg,
  MyImgBtmLeft,
  MyImgBtmLeftDiv,
  MyImgBtmLeftspan,
  MyImgBtmRight,
  MyImgDivDiv,
  MyImgTopBotmLeft,
  MyImgTopLeft,
  MyImgTopRight,
} from '../assets/styles/components/Post.styled';
import {
  Collaborate,
  DisLike,
  OnPlay,
  Like24,
  DisCollaboration,
  WhiteCollaborate,
  WhiteCollaborate24,
} from '../assets/images/image';

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
    <MyImgDivDiv key={postId}>
      <Myimg
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
      <ImgMyBtmRight>
        <ImgNotTopSlideSpan>{title}</ImgNotTopSlideSpan>
        <ImgNotSlideSpan>{nickname.slice(0, 9)}</ImgNotSlideSpan>
      </ImgMyBtmRight>
      <MyImgTopLeft onClick={goToDetail}>{title}</MyImgTopLeft>
      <MyImgTopBotmLeft>{nickname.slice(0, 9)}</MyImgTopBotmLeft>
      <DisMyImgTopRight>
<<<<<<< HEAD
        {collaborate ? <img src={Collaborate} alt='콜라보' /> : <Fragment></Fragment>}
      </DisMyImgTopRight>
      <MyImgTopRight>
        {collaborate ? <img src={Collaborate} alt='콜라보' /> : <Fragment></Fragment>}
=======
        {collaborate ? (
          <img src={DisCollaboration} alt='콜라보' />
        ) : (
          <img src={WhiteCollaborate24} alt='콜라보' />
        )}
      </DisMyImgTopRight>
      <MyImgTopRight>
        {collaborate ? (
          <img src={DisCollaboration} alt='콜라보' />
        ) : (
          <img src={WhiteCollaborate24} alt='콜라보' />
        )}
>>>>>>> 5ef328c4d16d85b6a8285af70a747f49afae05c9
      </MyImgTopRight>
      <MyImgBtmLeft>
        <MyImgBtmLeftDiv>
          {isLike ? (
            <img src={Like24} alt='좋아요 상태' onClick={LikeClick} />
          ) : (
            <img src={DisLike} alt='좋아요 안한 상태' onClick={LikeClick} />
          )}
          <MyImgBtmLeftspan>좋아요</MyImgBtmLeftspan>
        </MyImgBtmLeftDiv>
      </MyImgBtmLeft>
      <MyImgBtmRight>
        <img src={OnPlay} alt='플레이 버튼' onClick={Play} />
      </MyImgBtmRight>
    </MyImgDivDiv>
  );
};

export default memo(Post);
