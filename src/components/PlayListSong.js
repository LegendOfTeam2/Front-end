// React
import { useState } from 'react';
// Zustand
import usePlayerStore from '../zustand/player';
// Packages
import { getCookie } from '../utils/cookie';
// Assets
import {
  AboutSong,
  DisCollaboration,
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

const PlayListSong = ({ data, listModalOpen }) => {
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const postPlayList = usePlayerStore((state) => state.postPlayList);

  const [duration, setDuration] = useState(0);

  const setMusicDuration = (e) => {
    setDuration(e.currentTarget.duration.toFixed(2));
  };

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

  const Play = () => {
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

  const PlayMember = () => {
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

  return (
    <BtmMapDiv>
      <BtmMapImgDiv>
        <BtmMapImg src={data.imageUrl} alt='커버 이미지'></BtmMapImg>
        <BtmMapInImgDiv>
          {getCookie('authorization') !== undefined ? (
            <img src={OnPlay} alt='플레이 버튼' onClick={PlayMember} />
          ) : (
            <img src={OnPlay} alt='플레이 버튼' onClick={Play} />
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
        <img src={LikeWhite} alt='좋아요' className='midIcon' />
        {data.collaborate ? (
          <img src={DisCollaboration} alt='콜라보' className='rightIcon' />
        ) : (
          <img src={ListCollaborateWhite} alt='콜라보' className='rightIcon' />
        )}
      </BtmMapIconDiv>
    </BtmMapDiv>
  );
};

export default PlayListSong;
