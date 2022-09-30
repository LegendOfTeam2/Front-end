// React
import { useState, useRef, useEffect, Fragment } from 'react';

// Zustand
import usePlayerStore from '../../zustand/player';
import useMemberStore from '../../zustand/member';

// Utils
import { getCookie } from '../../utils/cookie';

// Components
import Player from './Player';
import PlayList from '../PlayList';

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
  AlbumCover,
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
  const playListState = usePlayerStore((state) => state.playListState);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const playing = usePlayerStore((state) => state.playing);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const isAutoplay = usePlayerStore((state) => state.isAutoplay);
  const getPlayList = usePlayerStore((state) => state.getPlayList);
  const playListMember = usePlayerStore((state) => state.playListMember);
  const currentSongMember = usePlayerStore((state) => state.currentSongMember);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);
  const playListStateChange = usePlayerStore(
    (state) => state.playListStateChange
  );
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

  const callback = () => {
    const random = Math.floor(Math.random() * playList.length);
    if (playList[random].postId !== currentSong.postId) {
      setCurrentSong(playList[random]);
      audioRef.current.currentTime = 0;
      setIsAutoplay(true);
    } else {
      const filterRandom = playList.filter(
        (x) => x.postId !== currentSong.postId
      );
      const retryRandom = Math.floor(Math.random() * filterRandom.length);
      setCurrentSong(filterRandom[retryRandom]);
      audioRef.current.currentTime = 0;
      setIsAutoplay(true);
    }
  };

  const callbackMember = () => {
    if (playListMemberIsLoaded) {
      const random = Math.floor(Math.random() * playListMember.length);
      if (playListMember[random].postId !== currentSongMember.postId) {
        setCurrentSongMember(playListMember[random]);
        audioRef.current.currentTime = 0;
        setIsAutoplay(true);
      } else {
        const filterRandom = playListMember.filter(
          (x) => x.postId !== playListMember[random].postId
        );
        const retryRandom = Math.floor(Math.random() * filterRandom.length);
        setCurrentSongMember(filterRandom[retryRandom]);
        audioRef.current.currentTime = 0;
        setIsAutoplay(true);
      }
    }
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
        if (playing) {
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
      if (playing) {
        setIsAutoplay(true);
      } else {
        setIsAutoplay(false);
      }
      audioRef.current.currentTime = 0;
    }
  };

  const skipNext = () => {
    const index = playList.findIndex((x) => x.postId === currentSong.postId);

    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const indexMember = playListMember.findIndex(
          (x) => x.postId === currentSongMember.postId
        );
        if (indexMember === playListMember.length - 1) {
          setCurrentSongMember(playListMember[0]);
        } else {
          setCurrentSongMember(playListMember[indexMember + 1]);
        }
        if (playing) {
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
      if (playing) {
        setIsAutoplay(true);
      } else {
        setIsAutoplay(false);
      }
      audioRef.current.currentTime = 0;
    }
  };

  const clickLoop = () => {
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

  const folding = () => {
    setIsAutoplay(false);
    setPlaying(false);
    audioRef.current.pause();
    viewStateChange(false);
  };

  const raiseIt = () => {
    setIsAutoplay(true);
    viewStateChange(true);
    setPlaying(false);
  };

  const playListHandlers = () => {
    playListStateChange(!playListState);
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

  useEffect(() => {
    getPlayList().then((res) => {
      if (res.success) {
        if (res.data.length > 0) {
          const firstSong = [...res.data].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )[0];
          setCurrentSongMember(firstSong);
          viewStateChange(true);
        }
      }
    });
  }, []);

  useEffect(() => {
    getPlayList();
  }, [currentSongMember, getPlayList]);

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
            if (playing) {
              setPlaying(true);
            }
          }
        }
      }
    } else {
      if (playList.length > 0) {
        if (currentSong.postId === playList[0].postId) {
          if (playing) {
            setPlaying(true);
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
              audioRef.current.currentTime = 0;
            }
          }
        }
      }
    } else {
      if (viewState) {
        if (playList.length > 0) {
          if (currentSong.postId === playList[0].postId) {
            audioRef.current.currentTime = 0;
          }
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
    // const audio = audioRef.current;
    if (viewState) {
      if (playing) {
        setPlaying(true);
        // audio.play();
      } else {
        setPlaying(false);
        // audio.pause();
      }
    }
  }, [viewState, playing, setPlaying, setIsAutoplay]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        const audioEnd = audioRef.current.ended;

        if (audioEnd) {
          if (isRandom) {
            callbackMember();
          } else {
            skipNext();
          }
        }
      }
    } else {
      const audioEnd = audioRef.current.ended;
      if (audioEnd) {
        if (isRandom) {
          callback();
        } else {
          skipNext();
        }
      }
    }
  }, [
    percentage,
    isRandom,
    playing,
    playListMemberIsLoaded,
    playListMember,
    playList,
  ]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        audioRef.current.loop = isLoop;
      }
    } else {
      audioRef.current.loop = isLoop;
    }
  }, [isLoop, playListMemberIsLoaded]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        audioRef.current.muted = ismuted;
      }
    } else {
      audioRef.current.muted = ismuted;
    }
  }, [ismuted, playListMemberIsLoaded]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        audioRef.current.autoplay = isAutoplay;
      }
    } else {
      audioRef.current.autoplay = isAutoplay;
    }
  }, [isAutoplay, playListMemberIsLoaded]);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      if (playListMemberIsLoaded) {
        audioRef.current.volume = parseFloat(volume);
      }
    } else {
      audioRef.current.volume = parseFloat(volume);
    }
  }, [playListMemberIsLoaded, volume]);

  useEffect(() => {
    if (viewState === false) {
      playListStateChange(false);
    }
  }, [playListStateChange, viewState]);

  const RandomPlay = () => {
    setIsRandom(!isRandom);
    setIsLoop(false);
  };

  return (
    <Fragment>
      {getCookie('authorization') !== undefined ? <PlayList /> : <PlayList />}

      <MainAudioPlay yIndex={viewState ? '0' : '85%'}>
        <div>
          <PlayContainerOut>
            <PlayContainerOutDiv>
              {viewState ? (
                <PlayContainerOutImg src={Hide} alt='접기' onClick={folding} />
              ) : (
                <PlayContainerOutImg
                  src={Show}
                  alt='올리기'
                  onClick={raiseIt}
                />
              )}
            </PlayContainerOutDiv>
          </PlayContainerOut>
          <PlayContainer>
            <ControlPanelDiv>
              <AllUpVolumeolumeDiv disPlay={viewState ? 'flex' : 'none'}>
                <IconImgHover>
                  {getCookie('authorization') !== undefined ? (
                    playListState ? (
                      <img
                        src={PlayListIcon}
                        alt='플레이리스트'
                        onClick={playListHandlers}
                      />
                    ) : (
                      <img
                        src={DisPlayListIcon}
                        alt='플레이리스트 닫기'
                        onClick={playListHandlers}
                      />
                    )
                  ) : playListState ? (
                    <img
                      src={PlayListIcon}
                      alt='플레이리스트'
                      onClick={playListHandlers}
                    />
                  ) : (
                    <img
                      src={DisPlayListIcon}
                      alt='플레이리스트 닫기'
                      onClick={playListHandlers}
                    />
                  )}
                </IconImgHover>
              </AllUpVolumeolumeDiv>
              <AllBtnContainer>
                {getCookie('authorization') !== undefined ? (
                  playListMemberIsLoaded ? (
                    playListMember.length > 0 ? (
                      <MidDiv>
                        <div>
                          <ImgCover
                            src={
                              currentSongMember?.imageUrl === null
                                ? profileImgArr[random]
                                : currentSongMember?.imageUrl === ''
                                ? profileImgArr[random]
                                : currentSongMember?.imageUrl
                            }
                            alt='이미지 커버'
                          />
                        </div>
                        <IntroduceDiv>
                          <TitleSapn>{currentSongMember?.title}</TitleSapn>
                          <SingerSpan>{currentSongMember?.nickname}</SingerSpan>
                        </IntroduceDiv>
                      </MidDiv>
                    ) : (
                      <MidDiv>
                        <div>
                          <ImgCover
                            src={AlbumCover}
                            alt='재생목록이 비어 있을때'
                          />
                        </div>
                        <IntroduceDiv>
                          <TitleSapn>재생목록이 비어 있어요~</TitleSapn>
                          <SingerSpan>환영 합니다!</SingerSpan>
                        </IntroduceDiv>
                      </MidDiv>
                    )
                  ) : (
                    <Fragment />
                  )
                ) : playList.length > 0 ? (
                  <MidDiv>
                    <div>
                      <ImgCover
                        src={
                          currentSong?.imageUrl === null
                            ? profileImgArr[random]
                            : currentSong?.imageUrl === ''
                            ? profileImgArr[random]
                            : currentSong?.imageUrl
                        }
                        alt=''
                      />
                    </div>
                    <IntroduceDiv>
                      <TitleSapn>{currentSong?.title}</TitleSapn>
                      <SingerSpan>{currentSong?.nickname}</SingerSpan>
                    </IntroduceDiv>
                  </MidDiv>
                ) : (
                  <MidDiv>
                    <div>
                      <ImgCover src={AlbumCover} alt='재생목록이 비어 있을때' />
                    </div>
                    <IntroduceDiv>
                      <TitleSapn>재생목록이 비어 있어요~</TitleSapn>
                      <SingerSpan>환영 합니다!</SingerSpan>
                    </IntroduceDiv>
                  </MidDiv>
                )}
                <BtnContainer>
                  {getCookie('authorization') !== undefined ? (
                    playListMemberIsLoaded ? (
                      playListMember.length > 2 ? (
                        <IconImgHover onClick={RandomPlay}>
                          {isRandom ? (
                            <img src={RandomIcon} alt='랜덤' />
                          ) : (
                            <img src={DisRandomIcon} alt='램덤아닐때' />
                          )}
                        </IconImgHover>
                      ) : (
                        <IconImgHover>
                          <img src={DisRandomIcon} alt='램덤아닐때' />
                        </IconImgHover>
                      )
                    ) : (
                      <Fragment />
                    )
                  ) : playList.length > 2 ? (
                    <IconImgHover onClick={RandomPlay}>
                      {isRandom ? (
                        <img src={RandomIcon} alt='랜덤' />
                      ) : (
                        <img src={DisRandomIcon} alt='램덤아닐때' />
                      )}
                    </IconImgHover>
                  ) : (
                    <IconImgHover>
                      <img src={DisRandomIcon} alt='램덤아닐때' />
                    </IconImgHover>
                  )}

                  <IconImgHover>
                    {getCookie('authorization') !== undefined ? (
                      playListMember.length > 0 ? (
                        <img src={BackPlay} alt='그전곡' onClick={skipBack} />
                      ) : (
                        <img src={BackPlay} alt='그전곡' />
                      )
                    ) : playList.length > 0 ? (
                      <img src={BackPlay} alt='그전곡' onClick={skipBack} />
                    ) : (
                      <img src={BackPlay} alt='그전곡' />
                    )}
                  </IconImgHover>
                  <IconImgHover onClick={play}>
                    {playing ? (
                      <img src={StopPlay} alt='정지' />
                    ) : (
                      <img src={OnPlay} alt='재생' />
                    )}
                  </IconImgHover>
                  <IconImgHover>
                    {getCookie('authorization') !== undefined ? (
                      playListMember.length > 0 ? (
                        <img src={NextPlay} alt='다음곡' onClick={skipBack} />
                      ) : (
                        <img src={NextPlay} alt='다음곡' />
                      )
                    ) : playList.length > 0 ? (
                      <img src={NextPlay} alt='다음곡' onClick={skipBack} />
                    ) : (
                      <img src={NextPlay} alt='다음곡' />
                    )}
                  </IconImgHover>
                  <IconImgHover onClick={clickLoop}>
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
                  playListMember.length > 0 ? (
                    <audio
                      ref={audioRef}
                      onTimeUpdate={getCurrDuration}
                      onLoadedData={(e) => {
                        setDuration(e.currentTarget.duration.toFixed(2));
                      }}
                      src={currentSongMember?.mediaUrl}
                    />
                  ) : (
                    <audio
                      ref={audioRef}
                      onTimeUpdate={getCurrDuration}
                      onLoadedData={(e) => {
                        setDuration(e.currentTarget.duration.toFixed(2));
                      }}
                      src=''
                    />
                  )
                ) : (
                  <Fragment />
                )
              ) : playList.length > 0 ? (
                <audio
                  ref={audioRef}
                  onTimeUpdate={getCurrDuration}
                  onLoadedData={(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2));
                  }}
                  src={currentSong?.mediaUrl}
                />
              ) : (
                <audio
                  ref={audioRef}
                  onTimeUpdate={getCurrDuration}
                  onLoadedData={(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2));
                  }}
                  src=''
                />
              )}

              <TimerDiv>
                <Timer>{secondsToHms(currentTime)}</Timer>

                <Timer>{secondsToHms(duration)}</Timer>
              </TimerDiv>
            </ControlPanelDiv>
          </PlayContainer>
        </div>
      </MainAudioPlay>
    </Fragment>
  );
}

export default PlayerMain;
