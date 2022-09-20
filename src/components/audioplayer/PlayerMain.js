// React
import { useState, useRef, useEffect, useCallback } from 'react';
// Zustand
import usePlayerStore from '../../zustand/player';
// Utils
import { getCookie } from '../../utils/cookie';
// Components
import Player from './Player';
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
  PlayListIcon,
  DisPlayListIcon,
} from '../../assets/images/image';
import {
  AllBtnContainer,
  AllUpVolumeolumeDiv,
  AllVolumeolumeDiv,
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
} from '../../assets/styles/components/Player.Styled';

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

  const getPlayList = usePlayerStore((state) => state.getPlayList);
  const playListMember = usePlayerStore((state) => state.playListMember);
  const currentSongMember = usePlayerStore((state) => state.currentSongMember);
  const setCurrentSongMember = usePlayerStore(
    (state) => state.setCurrentSongMember
  );
  const playListMemberIsLoaded = usePlayerStore(
    (state) => state.playListMemberIsLoaded
  );

  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [ismuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isRandom, setIsRandom] = useState(false);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  useEffect(() => {
    getPlayList();
  }, []);

  useEffect(() => {
    const playListMax = playList.length - 1;
    const playListMaxMember = playListMember.length - 1;
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const audioEnd = audioRef.current.ended;
        if (playListMember.length > 0) {
          if (
            currentSongMember.postId ===
            playListMember[playListMaxMember].postId
          ) {
            if (isRandom === false && isLoop === false && audioEnd) {
              setPlaying(false);
            }
          }
        }
      }
    } else {
      const audioEnd = audioRef.current.ended;
      if (playList.length > 0) {
        if (currentSong.postId === playList[playListMax].postId) {
          if (isRandom === false && isLoop === false && audioEnd) {
            setPlaying(false);
          }
        }
      }
    }
  }, [
    percentage,
    isRandom,
    playing,
    playList,
    isLoop,
    currentSong.postId,
    setPlaying,
    playListMember,
    currentSongMember.postId,
    playListMemberIsLoaded,
  ]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        if (playListMember.length > 0) {
          if (currentSongMember.postId === playListMember[0].postId) {
            const audio = audioRef.current;
            if (playing) {
              setPlaying(true);
              audio.play();
            }
          }
        }
      }
    } else {
      if (playList.length > 0) {
        if (currentSong.postId === playList[0].postId) {
          const audio = audioRef.current;
          if (playing) {
            setPlaying(true);
            audio.play();
          }
        }
      }
    }
  }, [
    currentSong.postId,
    playList,
    playListMember,
    playing,
    setPlaying,
    currentSongMember.postId,
    playListMemberIsLoaded,
  ]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (viewState) {
        if (playListMemberIsLoaded) {
          if (playListMember.length > 0) {
            if (currentSongMember.postId === playListMember[0].postId) {
              console.log('렌더링!');
              audioRef.current.currentTime = 0;
            }
          }
        }
      }
    } else {
      if (viewState) {
        if (currentSong.postId === playList[0].postId) {
          audioRef.current.currentTime = 0;
        }
      }
    }
  }, [
    currentSong,
    currentSongMember.postId,
    playList,
    playListMember,
    playListMemberIsLoaded,
    viewState,
  ]);

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
    const index = playList.indexOf(playList[0]);
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const audioEnd = audioRef.current.ended;
        const indexMember = playListMember.indexOf(playListMember[0]);

        if (audioEnd) {
          if (isRandom) {
            callbackMember(indexMember);
          } else {
            skipNext();
          }
        }
      }
    } else {
      const audioEnd = audioRef.current.ended;
      if (audioEnd) {
        if (isRandom) {
          callback(index);
        } else {
          skipNext();
        }
      }
    }
  }, [percentage, isRandom, playing, playListMemberIsLoaded, playListMember]);

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

  const callbackMember = useCallback(
    (indexMember) => {
      if (playListMemberIsLoaded) {
        const random = Math.floor(Math.random() * playListMember.length);
        if (random !== indexMember) {
          setCurrentSongMember(playListMember[random]);
          audioRef.current.currentTime = 0;
          setIsAutoplay(true);
        } else {
          const filterRandom = playListMember.filter((x) => x.id !== random);
          const Retryrandom = Math.floor(Math.random() * filterRandom.length);
          setCurrentSongMember(filterRandom[Retryrandom]);
          audioRef.current.currentTime = 0;
          setIsAutoplay(true);
        }
      }
    },
    [isRandom]
  );

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const audio = audioRef.current;
        audio.loop = isLoop;
      }
    } else {
      const audio = audioRef.current;
      audio.loop = isLoop;
    }
  }, [isLoop]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const audio = audioRef.current;
        audio.muted = ismuted;
      }
    } else {
      const audio = audioRef.current;
      audio.muted = ismuted;
    }
  }, [ismuted]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const audio = audioRef.current;
        audio.autoplay = isAutoplay;
      }
    } else {
      const audio = audioRef.current;
      audio.autoplay = isAutoplay;
    }
  }, [isAutoplay]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const audio = audioRef.current;
        audio.volume = parseFloat(volume);
      }
    } else {
      const audio = audioRef.current;
      audio.volume = parseFloat(volume);
    }
  }, [volume]);

  const RandomPlay = () => {
    setIsRandom(!isRandom);
    setIsLoop(false);
  };

  const skipBack = () => {
    const index = playList.findIndex((x) => x.title === currentSong.title);

    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const indexMember = playListMember.findIndex(
          (x) => x.title === currentSongMember.title
        );

        if (indexMember === 0) {
          setCurrentSongMember(playListMember[playListMember.length - 1]);
        } else {
          setCurrentSongMember(playListMember[indexMember - 1]);
        }
        if (playing === true) {
          setIsAutoplay(true);
        } else {
          setIsAutoplay(false);
        }
        audioRef.current.currentTime = 0;
      }
    } else {
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
    }
  };

  const skipNext = () => {
    const index = playList.findIndex((x) => x.title === currentSong.title);

    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const indexMember = playListMember.findIndex(
          (x) => x.title === currentSongMember.title
        );
        if (indexMember === playListMember.length - 1) {
          setCurrentSongMember(playListMember[0]);
        } else {
          setCurrentSongMember(playListMember[indexMember + 1]);
        }
        if (playing === true) {
          setIsAutoplay(true);
        } else {
          setIsAutoplay(false);
        }
        audioRef.current.currentTime = 0;
      }
    } else {
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
    }
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
    <MainAudioPlay yIndex={viewState ? '0' : '85%'}>
      <div>
        <PlayContainerOut>
          <PlayContainerOutDiv>
            {viewState ? (
              <PlayContainerOutImg src={Hide} alt='접기' onClick={Folding} />
            ) : (
              <PlayContainerOutImg src={Show} alt='올리기' onClick={RaiseIt} />
            )}
          </PlayContainerOutDiv>
        </PlayContainerOut>
        <PlayContainer>
          <ControlPanelDiv>
            <AllUpVolumeolumeDiv disPlay={viewState ? 'flex' : 'none'}>
              <IconImgHover>
                {isLoop ? (
                  <img src={PlayListIcon} alt='플레이리스트' />
                ) : (
                  <img src={DisPlayListIcon} alt='플레이리스트 닫기' />
                )}
              </IconImgHover>
            </AllUpVolumeolumeDiv>
            <AllBtnContainer>
              {getCookie('authorization') !== undefined ? (
                playListMemberIsLoaded ? (
                  <MidDiv>
                    <div>
                      <ImgCover src={currentSongMember?.imageUrl} alt='' />
                    </div>
                    <IntroduceDiv>
                      <TitleSapn>{currentSongMember?.title}</TitleSapn>
                      <SingerSpan>{currentSongMember?.nickname}</SingerSpan>
                    </IntroduceDiv>
                  </MidDiv>
                ) : (
                  <></>
                )
              ) : (
                <MidDiv>
                  <div>
                    <ImgCover src={currentSong?.imageUrl} alt='' />
                  </div>
                  <IntroduceDiv>
                    <TitleSapn>{currentSong?.title}</TitleSapn>
                    <SingerSpan>{currentSong?.nickname}</SingerSpan>
                  </IntroduceDiv>
                </MidDiv>
              )}
              <BtnContainer>
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
                <IconImgHover onClick={ClickLoop}>
                  {isLoop ? (
                    <img src={LoopPlay} alt='루프있을때' />
                  ) : (
                    <img src={DisRepeated} alt='루프없을때' />
                  )}
                </IconImgHover>
              </BtnContainer>
              <VolumeolumeDiv>
                <AllVolumeolumeDiv>
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
                </AllVolumeolumeDiv>
              </VolumeolumeDiv>
            </AllBtnContainer>
            <Player percentage={percentage} onChange={onChange} />
            {getCookie('authorization') !== undefined ? (
              playListMemberIsLoaded ? (
                <audio
                  ref={audioRef}
                  onTimeUpdate={getCurrDuration}
                  onLoadedData={(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2));
                  }}
                  src={currentSongMember?.mediaUrl}
                ></audio>
              ) : (
                <></>
              )
            ) : (
              <audio
                ref={audioRef}
                onTimeUpdate={getCurrDuration}
                onLoadedData={(e) => {
                  setDuration(e.currentTarget.duration.toFixed(2));
                }}
                src={currentSong?.mediaUrl}
              ></audio>
            )}

            <TimerDiv>
              <Timer>{secondsToHms(currentTime)}</Timer>

              <Timer>{secondsToHms(duration)}</Timer>
            </TimerDiv>
          </ControlPanelDiv>
        </PlayContainer>
      </div>
    </MainAudioPlay>
  );
}

export default PlayerMain;
