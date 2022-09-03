import { useState, useRef, useEffect } from "react";
import Player from "./Player";

import { songsdata } from "./Audios";
import {
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
  BsFillStopCircleFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import styled from "styled-components";

function PlayerMain() {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const [songs, setSongs] = useState(songsdata);
  const [volume ,setVolume] = useState(0.5)

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);

    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
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

    audioRef.current.currentTime = 0;
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.2;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
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
    if (!seconds) return "00m 00s";

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
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min === 0) {
      return `00분 ${sec}초`;
    } else {
      return `${min}분 ${sec}초`;
    }
  }

  useEffect(() => {
    audioRef.current.volume = parseFloat(volume);
  }, [volume]);

  useEffect(() => {

  }, []);


  return (
    <div className='app-container'>
      <h1>Audio Player</h1>
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
        <Timer>{secondsToHms(currentTime)}</Timer>
        <BtnContainer>
          <BsFillSkipStartCircleFill size='16' onClick={skipBack} />
          <div onClick={play}>
            {isPlaying ? <BsFillStopCircleFill /> : <AiFillPlayCircle />}
          </div>
          <BsFillSkipEndCircleFill size='16' onClick={skipNext} />
          <div><BsFillVolumeUpFill/>
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
</div>
        </BtnContainer>
        <Timer>{secondsToHms(duration)}</Timer>
      </ControlPanelDiv>
    </div>
  );
}

export default PlayerMain;

export const ControlPanelDiv = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
`;
export const Timer = styled.div`
  font-size: 10px;
  font-weight: 200;
  color: black;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-grow: 1;
`;
