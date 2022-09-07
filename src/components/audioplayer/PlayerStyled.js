import styled from "styled-components";

export const SliderContainer = styled.div`
  --progress-bar-height: 10px;
  position: relative;
  width: 100%;
  --thumb-width: 20px;
  --thumb-height: 20px;
  margin-top: 13px;
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
