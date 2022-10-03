// React
import { useEffect, useRef, memo, useState } from 'react';
// Zustand
import usePlayerStore from '../../zustand/player';
// Assests
import {
  ProgressBarCover,
  Range,
  SliderContainer,
  Thumb,
} from '../../assets/styles/components/Player.Styled';

function Player({ percentage = 0, onChange }) {
  const playListMember = usePlayerStore((state) => state.playListMember);
  const playList = usePlayerStore((state) => state.playList);

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

  useEffect(() => {
    if (playListMember.length === 0) {
      setPosition(0);
      setMarginLeft(0);
      setProgressBarWidth(0);
    }
    if (playList.length === 0) {
      setPosition(0);
      setMarginLeft(0);
      setProgressBarWidth(0);
    }
  }, [playListMember, playList]);

  return (
    <SliderContainer>
      <ProgressBarCover
        style={{
          width: `${progressBarWidth}px`,
        }}
      />
      <Thumb
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      />
      <Range
        type='range'
        value={position}
        ref={rangeRef}
        step={0.01}
        onChange={onChange}
      />
    </SliderContainer>
  );
}

export default memo(Player);
