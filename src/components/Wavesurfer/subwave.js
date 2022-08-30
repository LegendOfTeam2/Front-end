import React, { useState } from "react";

import Playlist from "./playlist.js";
import WaveSurferAudio from "./Wavesufer";

// import tracks
const tracks = [
  {
    id: 0,
    title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
    url:
      "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
  },
  {
    id: 1,
    title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
    url:"https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
  }
];

const Test = () => {

  const [selectedTrack, setSelectedTrack] = useState(tracks[1]);

  return (
    <div className="App">
      <WaveSurferAudio url={selectedTrack.url} />
      <Playlist
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </div>
  );
}
export default Test