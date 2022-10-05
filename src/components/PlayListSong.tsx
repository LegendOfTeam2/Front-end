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

interface PlayListSongProps {
  data: any;
  listModalOpen: any;
  likeState: any;
}

function PlayListSong({ data, listModalOpen, likeState }: PlayListSongProps) {
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const postPlayList = usePlayerStore((state) => state.postPlayList);
  const addLike = useLikeStore((state) => state.addLike);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const [duration, setDuration] = useState(0);
  const [isLike, setIsLike] = useState(likeState);

  const setMusicDuration = (e: any) => {
    setDuration(e.currentTarget.duration.toFixed(2));
  };

  const secondsToHms = (seconds: any) => {
    if (!seconds) return '00 : 00';

    let duration: any = seconds;
    let hours: any = duration / 3600;
    duration = duration % 3600;

    let min: any = parseInt((duration / 60).toString());
    duration = duration % 60;

    let sec: any = parseInt(duration);

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
      warning('로그인 후에 이용 가능합니다.');
    } else {
      addLike({ postId: data.postId, position: data.position }).then(
        (res: any) => {
          if (res.success && res.data) {
            info('게시글에 좋아요를 눌렀습니다.');
            setIsLike(true);
          } else {
            info('게시글에 좋아요를 취소했습니다.');
            setIsLike(false);
          }
        }
      );
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
          alt='커버 이미지'
        ></BtmMapImg>
        <BtmMapInImgDiv>
          {getCookie('authorization') !== undefined ? (
            <img src={OnPlay} alt='플레이 버튼' onClick={playMember} />
          ) : (
            <img src={OnPlay} alt='플레이 버튼' onClick={play} />
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
          alt='작품정보'
          className='leftIcon'
          onClick={() => listModalOpen(data.postId)}
        />
        {isLike ? (
          <img
            src={Like24}
            alt='좋아요'
            className='midIcon'
            onClick={likeClick}
          />
        ) : (
          <img
            src={LikeWhite}
            alt='좋아요'
            className='midIcon'
            onClick={likeClick}
          />
        )}

        {data.collaborate ? (
          <img src={DisCollaboration} alt='콜라보' className='rightIcon' />
        ) : (
          <img src={ListCollaborateWhite} alt='콜라보' className='rightIcon' />
        )}
      </BtmMapIconDiv>
    </BtmMapDiv>
  );
}

export default PlayListSong;
