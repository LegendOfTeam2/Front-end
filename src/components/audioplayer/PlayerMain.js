import Player from "./Player";
import { songsdata } from "./Audios";

import { useEffect, useRef, useState } from "react";



const PlayerMain = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);
  const [volume ,setVolume] = useState(0.5)
  const audioElem = useRef();

  useEffect(() => {
    audioElem.current.volume = parseFloat(volume);
  }, [volume]);

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  useEffect(() => {
    audioElem.current.volume = parseFloat(volume);
  }, [volume]);

  const onPlaying = () =>{
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({...currentSong, "progress": ct/duration * 100, "length": duration})
  }

  return (
    <div className='App'>
      <audio
        src={currentSong.url}
        ref={audioElem}
        onTimeUpdate={onPlaying}
      />
    
      <Player
        songs={songs}
        setSongs={setSongs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        volume = {volume}
        setVolume = {setVolume}
      />
    </div>
  );
};

export default PlayerMain;
