// React
import { useState } from 'react';

// Zustand
import usePlayerStore from '../zustand/player';
import useLikeStore from '../zustand/like';
import useMemberStore from '../zustand/member';

// Packages
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Utils
import { getCookie } from '../utils/cookie';
import { warning, info } from '../utils/toast';

// Assets
import {
  AboutSong,
  DisCollaboration,
  Like24,
  LikeWhite,
  ListCollaborateWhite,
  OnPlay,
} from '../assets/images/image';
import {
  BtmMapArtistDiv,
  BtmMapArtistSpan,
  BtmMapDiv,
  BtmMapIconDiv,
  BtmMapImg,
  BtmMapImgDiv,
  BtmMapImgSpan,
  BtmMapInImgDiv,
} from '../assets/styles/components/PlayListSong.styled';

const PlayListSong = ({ data, listModalOpen, likeState }) => {
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const postPlayList = usePlayerStore((state) => state.postPlayList);
  const addLike = useLikeStore((state) => state.addLike);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const [duration, setDuration] = useState(0);
  const [isLike, setIsLike] = useState(likeState);

  const setMusicDuration = (e) => {
    setDuration(e.currentTarget.duration.toFixed(2));
  };

  const navigate = useNavigate();

  const secondsToHms = (seconds) => {
    if (!seconds) return '00 : 00';

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)} : ${min} : ${sec}`;
    } else if (min === 0) {
      return `00 : ${sec}`;
    } else {
      return `${min} : ${sec}`;
    }
  };

  const play = () => {
    setPlaying(true);
    setIsAutoplay(true);
    addPlayList({
      postId: data.postId,
      title: data.title,
      nickname: data.nickname,
      mediaUrl: data.mediaUrl,
      imageUrl: data.imageUrl,
      position: data.position,
    });
  };

  const playMember = () => {
    setPlaying(true);
    setIsAutoplay(true);
    postPlayList({
      postId: data.postId,
      title: data.title,
      nickname: data.nickname,
      mediaUrl: data.mediaUrl,
      imageUrl: data.imageUrl,
      position: data.position,
    });
  };

  const likeClick = () => {
    if (getCookie('authorization') === undefined) {
      warning('????????? ?????? ?????? ???????????????.')
    } else {
      addLike({ postId: data.postId, position: data.position }).then((res) => {
        if (res.success && res.data) {
          info('???????????? ???????????? ???????????????.');
          setIsLike(true);
        } else {
          info('???????????? ???????????? ??????????????????.')
          setIsLike(false);
        }
      });
    }
  };

  return (
    <BtmMapDiv>
      <BtmMapImgDiv>
        <BtmMapImg
          src={
            data.imageUrl === null
              ? profileImgArr[random]
              : data.imageUrl === ''
              ? profileImgArr[random]
              : data.imageUrl
          }
          alt='?????? ?????????'
        ></BtmMapImg>
        <BtmMapInImgDiv>
          {getCookie('authorization') !== undefined ? (
            <img src={OnPlay} alt='????????? ??????' onClick={playMember} />
          ) : (
            <img src={OnPlay} alt='????????? ??????' onClick={play} />
          )}
        </BtmMapInImgDiv>
      </BtmMapImgDiv>
      <BtmMapImgSpan>{data.title}</BtmMapImgSpan>
      <BtmMapArtistDiv>
        <BtmMapArtistSpan>{data.nickname}</BtmMapArtistSpan>
        <audio
          src={data.mediaUrl}
          onLoadedData={(e) => setMusicDuration(e)}
        ></audio>
        <BtmMapArtistSpan>{secondsToHms(duration)}</BtmMapArtistSpan>
      </BtmMapArtistDiv>
      <BtmMapIconDiv>
        <img
          src={AboutSong}
          alt='????????????'
          className='leftIcon'
          onClick={() => listModalOpen(data.postId)}
        />
        {isLike ? (
          <img
            src={Like24}
            alt='?????????'
            className='midIcon'
            onClick={likeClick}
          />
        ) : (
          <img
            src={LikeWhite}
            alt='?????????'
            className='midIcon'
            onClick={likeClick}
          />
        )}

        {data.collaborate ? (
          <img src={DisCollaboration} alt='?????????' className='rightIcon' />
        ) : (
          <img src={ListCollaborateWhite} alt='?????????' className='rightIcon' />
        )}
      </BtmMapIconDiv>
    </BtmMapDiv>
  );
};

export default PlayListSong;
