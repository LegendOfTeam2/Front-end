import { useEffect, useRef, useState } from "react";

import {
  ProgressBarCover,
  Range,
  SliderContainer,
  Thumb,
} from "./PlayerStyled";


function Player({ percentage = 0, onChange }) {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  

  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <SliderContainer>
      <ProgressBarCover
        style={{
          width: `${progressBarWidth}px`,
        }}
      ></ProgressBarCover>
      <Thumb
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></Thumb>
      <Range
        type='range'
        value={position}
        ref={rangeRef}
        step='0.01'
        onChange={onChange}
      />
    </SliderContainer>
  );
}

export default Player;
