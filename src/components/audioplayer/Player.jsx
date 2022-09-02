import React, { useRef } from "react";
import {
  Btnaction,
  BtnactionDiv,
  Controls,
  Navigation,
  Navigationwrapper,
  Playercontainer,
  Seekbar,
  Title,
} from "./PlayerStyled";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";



const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
  volume,
  setVolume,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }

    audioElem.current.currentTime = 0;
  };

  const skipNext = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }

    audioElem.current.currentTime = 0;
  };

  return (
    <>
      <Playercontainer>
        <Title>
          <p>{currentSong.title}</p>
        </Title>
        <Navigation>

          <input type='range'></input>
          <Navigationwrapper onClick={checkWidth} ref={clickRef}>
            <Seekbar
              style={{ width: `${currentSong.progress + "%"}` }}
            ></Seekbar>
          </Navigationwrapper>

        </Navigation>
        <Controls>
          <BtnactionDiv>
            <Btnaction>
              <BsFillSkipStartCircleFill size='16' onClick={skipBack} />
            </Btnaction>
            {isplaying ? (
              <Btnaction>
                <BsFillPauseCircleFill size='34' onClick={PlayPause} />
              </Btnaction>
            ) : (
              <Btnaction>
                <BsFillPlayCircleFill size='34' onClick={PlayPause} />
              </Btnaction>
            )}
            <Btnaction>
              <BsFillSkipEndCircleFill size='16' onClick={skipNext} />
            </Btnaction>
            <BsFillVolumeUpFill />
            <input
              type='range'
              min='0'
              max='1'
              color='gray'
              step='0.01'
              value={volume}
              onChange={(event) => {
                setVolume(event.target.value);
              }}
            />
          </BtnactionDiv>
        </Controls>
      </Playercontainer>
    </>
  );
};

export default Player;
