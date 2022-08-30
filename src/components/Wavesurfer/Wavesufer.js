import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "Gold",
  cursorColor: "Gold",
  cursorWidth: "2",
  barWidth: 3,
  barRadius: 1,
  barGap: 2,
  responsive: true,
  height: 100,
  normalize: true,
  // PeakCache를 사용하여 큰 파형의 렌더링 속도를 향상시킬 수 있습니다.
  partialRender: true,
  hideScrollBar: true,
  backgroundColor: "#1a1a1a"
});

const WaveSurferAudio = ({ url }) => {
  const waveFormRef = useRef(null);
  const waveSurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveFormRef.current);
    waveSurfer.current = WaveSurfer.create(options);
    waveSurfer.current.load(url);

    waveSurfer.current.on("ready", function () {
      // wavesurfer.current.play();
      // setPlay(true);

      // 파일을 로드할 때 개체를 계속 사용할 수 있는지 확인합니다.
      if (waveSurfer.current) {
        waveSurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    // 이벤트, 요소를 제거하고 웹 오디오 노드의 연결을 끊습니다.
    // 구성 요소 마운트 해제 시
    return () => waveSurfer.current.destroy();
  }, [url, volume]);

  const handlePlayPause = () => {
    setPlay(!playing);
    waveSurfer.current.playPause();
  };

  const onVolumeChange = (e) => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      waveSurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <div>
      <div id="waveform" ref={waveFormRef} />
      <div className="controls">
        <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0.01"
          max="1"
          step="0.01"
          onChange={onVolumeChange}
          defaultValue={volume}
        />
      </div>
    </div>
  );
};

export default WaveSurferAudio;