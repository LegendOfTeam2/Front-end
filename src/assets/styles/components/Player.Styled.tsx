import styled from 'styled-components';

interface StyledProps {
  disPlay : any
  yIndex : any
}

export const SliderContainer = styled.div`
  --progress-bar-height: 6px;
  position: relative;
  width: 100%;
  --thumb-width: 14px;
  --thumb-height: 14px;
  margin-top: 3px;
  ::before {
    content: '';
    background-color: white;
    width: 99%;
    height: calc(var(--progress-bar-height) - 1px);
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;

export const ProgressBarCover = styled.div`
  background-color: rgba(40, 202, 124, 1);
  width: 0%;
  height: var(--progress-bar-height);
  display: block;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  user-select: none;
  pointer-events: none;
`;

export const Thumb = styled.div`
  width: var(--thumb-width);
  height: var(--thumb-height);
  z-index: 3;
  background: #28ca72;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  transform: translate(0%, -50%);
  pointer-events: none; /* Remove pointer events on thumb so user can click on the actual thumb beaneath it!  */
  user-select: none; /*  Prevent Accidentally highlighting the number while sliding the cursor  */
`;

export const Range = styled.input`
  -webkit-appearance: none;
  background-color: rgba(240, 9, 9, 0.397);
  height: 10px;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0 auto;
  ::-webkit-slider-thumb {
    width: var(--thumb-width);
    height: var(--thumb-height);
    background: #350f2d;
    border: 1px solid #000000;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
  }

  ::-webkit-slider-thumb {
  }
`;

export const PlayContainerOut = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PlayContainerOutDiv = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(40, 202, 124, 1);
  top: -20px;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  :hover {
    cursor: pointer;
  }
`;

export const PlayContainerOutImg = styled.img``;

export const PlayContainer = styled.div`
  width: 1024px;
  height: 180px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  background-color: #1b1e2f;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #28ca72;
  padding: 24px 30px;
`;

export const ControlPanelDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Timer = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgba(40, 202, 114, 1);
`;
export const AllBtnContainer = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BtnContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const TimerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0px 4px;
`;
export const VolumeInput = styled.input`
  margin: auto;
  outline: none;
  padding: 0;
  width: 100%;
  height: 6px;
  background-color: #e7e7e7;
  background-image: -webkit-gradient(
    linear,
    50% 0%,
    50% 100%,
    color-stop(0%, #28ca7c),
    color-stop(100%, #28ca7c)
  );
  background-image: -webkit-linear-gradient(#28ca7c);
  background-image: -moz-linear-gradient(#28ca7c);
  background-image: -o-linear-gradient(#28ca7c);
  background-image: linear-gradient(#28ca7c);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  cursor: pointer;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    border: 0;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border: 0;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const MidDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 19px;
  flex-direction: row;
`;

export const ImgCover = styled.img`
  width: 85px;
  height: 85px;
`;

export const IntroduceDiv = styled.div`
  width: 165px;
  height: 88px;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleSapn = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #ffffff;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium}; ;
`;

export const SingerSpan = styled.span`
  color: #ffffff;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Regular}; ;
`;

export const SingerIntroduceSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  margin-top: 10px;
`;

export const VolumeolumeDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  :hover {
    cursor: pointer;
  }
`;

export const AllVolumeolumeDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  :hover {
    cursor: pointer;
  }
`;
export const AllUpVolumeolumeDiv : any = styled.div<StyledProps>`
  width: 970px;
  height: auto;
  position: absolute;
  top: 10px;
  display: ${(props) => props.disPlay};
  justify-content: flex-end;
  :hover {
    cursor: pointer;
  }
`;

export const VolumeolumeDivDiv = styled.div`
  width: auto;
  :hover {
    cursor: pointer;
  }
`;

export const VolumeolumeDivbar = styled.div`
  margin-top: 12px;
  width: auto;
`;

export const IconImgHover = styled.div`
  width: auto;
  :hover {
    cursor: pointer;
  }
`;

export const MainAudioPlay : any = styled.div<StyledProps>`
  width: 100%;
  justify-content: center;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateY(${(props) => props.yIndex});
  transition: transform 0.3s ease-in;
`;
