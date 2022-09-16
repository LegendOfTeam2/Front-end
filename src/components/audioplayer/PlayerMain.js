// React
import { useState, useRef, useEffect, useCallback, memo } from "react";
// Zustand
import usePlayerStore from "../../zustand/player";
// Components
import Player from "./Player";
// Assests
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
  Hide,
  Show,
} from "../../assets/images/image";
import {
  AllBtnContainer,
  BtnContainer,
  ControlPanelDiv,
  IconImgHover,
  ImgCover,
  IntroduceDiv,
  MainAudioPlay,
  MidDiv,
  PlayContainer,
  PlayContainerOut,
  PlayContainerOutDiv,
  PlayContainerOutImg,
  PlayContainerOutLongBar,
  SingerSpan,
  Timer,
  TimerDiv,
  TitleSapn,
  VolumeInput,
  VolumeolumeDiv,
  VolumeolumeDivbar,
  VolumeolumeDivDiv,
} from "../../assets/styles/components/Player.Styled";

function PlayerMain() {
  const playList = usePlayerStore((state) => state.playList);
  const currentSong = usePlayerStore((state) => state.currentSong);
  const setCurrentSong = usePlayerStore((state) => state.setCurrentSong);
  const viewState = usePlayerStore((state) => state.viewState);
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const playing = usePlayerStore((state) => state.playing);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const isAutoplay = usePlayerStore((state) => state.isAutoplay);
  const [percentage, setPercentage] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [ismuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  // const [isAutoplay, setIsAutoplay] = useState(false);
  const [isRandom, setIsRandom] = useState(false);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  useEffect(() => {
    if (playList.length > 0) {
      if (currentSong.postId === playList[0].postId) {
        const audio = audioRef.current;
        if (playing) {
          setPlaying(true);
          audio.play();
        }
      }
    }
  }, [currentSong.postId, playList, playing, setPlaying]);

  useEffect(()=>{
      if(viewState){
        if(currentSong.postId === playList[0].postId){
          audioRef.current.currentTime = 0;
        }
      }
  },[currentSong])


  useEffect(() => {
    const audio = audioRef.current;
    if (viewState) {
      if (playing) {
        setPlaying(true);
        audio.play();
      } else {
        setPlaying(false);
        audio.pause();
      }
    }
  }, [viewState, playing, setPlaying, setIsAutoplay]);
  useEffect(() => {
    const audioEnd = audioRef.current.ended;
    const index = playList.indexOf(playList[0]); // 0
    if (audioEnd) {
      if (isRandom) {
        callback(index);
      } else {
        skipNext();
      }
    }
  }, [percentage, isRandom, playing]);

  const callback = useCallback(
    (index) => {
      const random = Math.floor(Math.random() * playList.length);
      if (random !== index) {
        setCurrentSong(playList[random]);
        audioRef.current.currentTime = 0;
        setIsAutoplay(true);
      } else {
        const filterRandom = playList.filter((x) => x.id !== random);
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
    const index = playList.findIndex((x) => x.title === currentSong.title);

    if (index === 0) {
      setCurrentSong(playList[playList.length - 1]);
    } else {
      setCurrentSong(playList[index - 1]);
    }
    if (playing === true) {
      setIsAutoplay(true);
    } else {
      setIsAutoplay(false);
    }
    audioRef.current.currentTime = 0;
  };

  const skipNext = () => {
    const index = playList.findIndex((x) => x.title === currentSong.title);
    if (index === playList.length - 1) {
      setCurrentSong(playList[0]);
    } else {
      setCurrentSong(playList[index + 1]);
    }
    if (playing === true) {
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

    if (!playing) {
      setPlaying(true);
      audio.play();
    }

    if (playing) {
      setPlaying(false);
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

  const Folding = () => {
    setIsAutoplay(false);
    setPlaying(false);
    audioRef.current.pause();
    viewStateChange(false);
  };

  const RaiseIt = () => {
    setIsAutoplay(true);
    viewStateChange(true);
    setPlaying(false);
  };

  return (
    <MainAudioPlay yIndex={viewState ? "0" : "100%"}>
      <div>
        <PlayContainerOut>
          <PlayContainerOutDiv>
            {viewState ? (
              <PlayContainerOutImg src={Hide} alt='접기' onClick={Folding} />
            ) : (
              <PlayContainerOutImg src={Show} alt='올리기' onClick={RaiseIt} />
            )}
            <PlayContainerOutLongBar> </PlayContainerOutLongBar>
          </PlayContainerOutDiv>
        </PlayContainerOut>
        <PlayContainer>
          <Player percentage={percentage} onChange={onChange} />
          <audio
            ref={audioRef}
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e) => {
              setDuration(e.currentTarget.duration.toFixed(2));
            }}
            src={currentSong?.mediaUrl}
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
                  {playing ? (
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
                  <ImgCover src={currentSong?.imageUrl} alt='' />
                </div>
                <IntroduceDiv>
                  <TitleSapn>{currentSong?.title}</TitleSapn>
                  <SingerSpan>{currentSong?.nickname}</SingerSpan>
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
      </div>
    </MainAudioPlay>
  );
}

export default PlayerMain;
