// React
import { useState, memo } from 'react';

// Zustand
import usePlayerStore from '../zustand/player';
import useMemberStore from '../zustand/member';
import useLikeStore from '../zustand/like';

// Packages
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// Utils
import { getCookie } from '../utils/cookie';
import { warning, info } from '../utils/toast';

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
        <ImgNotTopSlideSpanSm>{title}</ImgNotTopSlideSpanSm>
        <ImgNotSlideSpanSm>{nickname}</ImgNotSlideSpanSm>
      </ImgMyBtmRightSm>
      <MyImgTopLeftSm onClick={goToDetail}>{title}</MyImgTopLeftSm>
      <MyImgTopBotmLeftSm>{nickname}</MyImgTopBotmLeftSm>
      <DisMyImgTopRightSm>
        {collaborate ? (
          <img src={DisCollaboration} alt='?????????' />
        ) : (
          <img src={WhiteCollaborate24} alt='????????? ?????????' />
        )}
      </DisMyImgTopRightSm>
      <MyImgTopRightSm>
        {collaborate ? (
          <img src={DisCollaboration} alt='?????????' />
        ) : (
          <img src={WhiteCollaborate24} alt='????????? ?????????' />
        )}
      </MyImgTopRightSm>
      <MyImgBtmLeftSm>
        <MyImgBtmLeftDivSm>
          {isLike ? (
            <img src={Like24} alt='????????? ??????' onClick={likeClick} />
          ) : (
            <img src={DisLike} alt='????????? ?????? ??????' onClick={likeClick} />
          )}
          <MyImgBtmLeftspanSm>?????????</MyImgBtmLeftspanSm>
        </MyImgBtmLeftDivSm>
      </MyImgBtmLeftSm>
      <MyImgBtmRightSm>
        {getCookie('authorization') !== undefined ? (
          <img src={OnPlay} alt='????????? ??????' onClick={playMember} />
        ) : (
          <img src={OnPlay} alt='????????? ??????' onClick={play} />
        )}
      </MyImgBtmRightSm>
    </MyImgDivDivSm>
  );
};

export default memo(PostSmall);
