import styled from "styled-components";

export const SliderContainer = styled.div`
  --progress-bar-height: 10px;
  position: relative;
  width: 100%;
  --thumb-width: 20px;
  --thumb-height: 20px;
  ::before {
    content: "";
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
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.753);
  z-index: 3;
  background: rgb(255, 255, 255);
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
  width: 74px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(40, 202, 124, 1);
  top: -30px;
  border-top-left-radius:50%;
  border-top-right-radius: 50%;
  position: absolute;
  z-index: -2;
  :hover {
    cursor: pointer;
  }
`;

export const PlayContainerOutImg = styled.img`
  position: absolute;
  z-index: -2;
  top: -2px;
`;

export const PlayContainer = styled.div`
  width: 800px;
  height: 152px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  border-radius: 20px;
  margin-bottom: 20px;

  padding: 12px 22px;
`;

export const ControlPanelDiv = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;
export const Timer = styled.div`
  font-size: 10px;
  font-weight: 200;
  color: black;
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
  margin-left: 40px;
`;

export const ImgCover = styled.img`
  width: 80px;
  height: 80px;
`;

export const IntroduceDiv = styled.div`
  width: 230px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const TitleSapn = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium}; ;
`;

export const SingerSpan = styled.span`
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
  flex-direction: row;
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

export const MainAudioPlay = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateY(${(props) => props.yIndex});
  transition: transform 0.3s ease-in;
`;

export const MainAudioPlayDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateY(${(props) => props.yIndex});
  transition: transform 0.3s ease-in;
`;
