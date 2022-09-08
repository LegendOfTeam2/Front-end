import { useState, useRef, useEffect, useCallback } from "react";
import Player from "./Player";

import songsdata from "./Audios";

import styled from "styled-components";
import {
  DisRepeated,
  LoopPlay,
  RandomIcon,
  DisRandomIcon,
  BackPlay,
  OnPlay,
  StopPlay,
  NextPlay,
  Volume,
  MutedAll,
} from "../../assets/images/image";

function PlayerMain() {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const [songs, setSongs] = useState(songsdata);
  const [volume, setVolume] = useState(0.5);
  const [ismuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isRandom, setIsRandom] = useState(false);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  useEffect(() => {
    const audioEnd = audioRef.current.ended;
    const index = [...songs].indexOf(currentSong); // 0
    if (audioEnd) {
      if (isRandom) {
        callback(index);
      } else {
        skipNext();
      }
    }
  }, [percentage, isRandom, isPlaying]);

  const callback = useCallback(
    (index) => {
      const random = Math.floor(Math.random() * songs.length);
      if (random !== index) {
        setCurrentSong(songs[random]);
        audioRef.current.currentTime = 0;
        setIsAutoplay(true);
      } else {
        const filterRandom = songs.filter((x) => x.id !== random);
        const Retryrandom = Math.floor(Math.random() * filterRandom.length);
        setCurrentSong(filterRandom[Retryrandom]);
        audioRef.current.currentTime = 0;
        setIsAutoplay(true);
      }
    },
    [isRandom]
  );

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = isLoop;
  }, [isLoop]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.muted = ismuted;
  }, [ismuted]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.autoplay = isAutoplay;
  }, [isAutoplay]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = parseFloat(volume);
  }, [volume]);

  const RandomPlay = () => {
    setIsRandom(!isRandom);
    setIsLoop(false);
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);

    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    if (isPlaying === true) {
      setIsAutoplay(true);
    } else {
      setIsAutoplay(false);
    }
    audioRef.current.currentTime = 0;
  };

  const skipNext = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    if (isPlaying === true) {
      setIsAutoplay(true);
    } else {
      setIsAutoplay(false);
    }
    audioRef.current.currentTime = 0;
  };

  const ClickLoop = () => {
    setIsRandom(false);
    if (!isLoop) {
      setIsLoop(true);
    }

    if (isLoop) {
      setIsLoop(false);
    }
  };
  const ClickMuted = () => {
    if (!ismuted) {
      setIsMuted(true);
    }

    if (ismuted) {
      setIsMuted(false);
    }
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = volume;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const rangeVolume = (e) => {
    let min = e.target.min;
    let max = e.target.max;
    let val = e.target.value;
    const result = ((val - min) * 100) / (max - min);
    e.target.style.backgroundSize = `${result}% 100%`;

    setVolume(e.target.value);
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  function secondsToHms(seconds) {
    if (!seconds) return "00분 00초";

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
      return `${parseInt(hours, 10)}시 ${min}분 ${sec}초`;
    } else if (min === 0) {
      return `00분 ${sec}초`;
    } else {
      return `${min}분 ${sec}초`;
    }
  }

  return (
    <PlayContainer>
      <Player percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={currentSong.url}
      ></audio>

      <ControlPanelDiv>
        <TimerDiv>
          <Timer>{secondsToHms(currentTime)}</Timer>

          <Timer>{secondsToHms(duration)}</Timer>
        </TimerDiv>

        <AllBtnContainer>
          <BtnContainer>
            <IconImgHover onClick={ClickLoop}>
              {isLoop ? (
                <img src={LoopPlay} alt='루프있을때' />
              ) : (
                <img src={DisRepeated} alt='루프없을때' />
              )}
            </IconImgHover>

            <IconImgHover onClick={RandomPlay}>
              {isRandom ? (
                <img src={RandomIcon} alt='랜덤' />
              ) : (
                <img src={DisRandomIcon} alt='램덤아닐때' />
              )}
            </IconImgHover>
            <IconImgHover>
              <img src={BackPlay} alt='그전곡' onClick={skipBack} />
            </IconImgHover>
            <IconImgHover onClick={play}>
              {isPlaying ? (
                <img src={StopPlay} alt='정지' />
              ) : (
                <img src={OnPlay} alt='재생' />
              )}
            </IconImgHover>
            <IconImgHover>
              <img src={NextPlay} alt='다음곡' onClick={skipNext} />
            </IconImgHover>
          </BtnContainer>
          <MidDiv>
            <div>
              <ImgCover src={currentSong.imgurl} alt='' />
            </div>
            <IntroduceDiv>
              <TitleSapn>{currentSong.title}</TitleSapn>
              <SingerSpan>{currentSong.singer}</SingerSpan>
              <SingerIntroduceSpan>{currentSong.introduce}</SingerIntroduceSpan>
            </IntroduceDiv>
          </MidDiv>
          <VolumeolumeDiv>
            <VolumeolumeDivDiv onClick={ClickMuted}>
              {ismuted ? (
                <img src={MutedAll} alt='음소거' />
              ) : (
                <img src={Volume} alt='불륨조절' />
              )}
            </VolumeolumeDivDiv>
            <VolumeolumeDivbar>
              <VolumeInput
                type='range'
                min='0'
                max='1'
                color='gray'
                step='0.01'
                value={volume}
                onChange={rangeVolume}
              />
            </VolumeolumeDivbar>
          </VolumeolumeDiv>
        </AllBtnContainer>
      </ControlPanelDiv>
    </PlayContainer>
  );
}

export default PlayerMain;

export const PlayContainer = styled.div`
  width: 800px;
  height: 152px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 0 22px;
`;

export const ControlPanelDiv = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;
export const Timer = styled.div`
  font-size: 10px;
  font-weight: 200;
  color: black;
`;
export const AllBtnContainer = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BtnContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const TimerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const VolumeInput = styled.input`
  margin: auto;
  outline: none;
  padding: 0;
  width: 100%;
  height: 6px;
  background-color: #e7e7e7;
  background-image: -webkit-gradient(
    linear,
    50% 0%,
    50% 100%,
    color-stop(0%, #28ca7c),
    color-stop(100%, #28ca7c)
  );
  background-image: -webkit-linear-gradient(#28ca7c);
  background-image: -moz-linear-gradient(#28ca7c);
  background-image: -o-linear-gradient(#28ca7c);
  background-image: linear-gradient(#28ca7c);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  cursor: pointer;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    border: 0;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border: 0;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const MidDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 19px;
  flex-direction: row;
  margin-left: 40px;
`;

export const ImgCover = styled.img`
  width: 80px;
  height: 80px;
`;

export const IntroduceDiv = styled.div`
  width: 230px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const TitleSapn = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium}; ;
`;

export const SingerSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Regular}; ;
`;

export const SingerIntroduceSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  margin-top: 10px;
`;

export const VolumeolumeDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  :hover {
    cursor: pointer;
  }
`;

export const VolumeolumeDivDiv = styled.div`
  width: auto;
  :hover {
    cursor: pointer;
  }
`;

export const VolumeolumeDivbar = styled.div`
  margin-top: 12px;
  width: auto;
`;

export const IconImgHover = styled.div`
  width: auto;
  :hover {
    cursor: pointer;
  }
`;
