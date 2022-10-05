import styled from 'styled-components';

export const WriteContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
`;
export const WriteBox = styled.div`
  width: 961px;
  height: 809px;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 30px;
  border: 1px solid #28ca72;
  background-color: #ffffff;
  @media ${(props) => props.theme.device.desktopL} {
    width: 861px;
    height: 659.5px;
  }
`;
export const WriteIconContainer = styled.div`
  opacity: 0.3;
  position: absolute;
  top: 26px;
  right: 26px;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    top: 20px;
    right: 20px;
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;
export const WriteCollaboContainer = styled.div`
  position: absolute;
  top: 102px;
  right: 0;
  width: 113px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 18px;
  border-radius: 8px 0 0 8px;
  border-top: 1px solid #b4b4b4;
  border-bottom: 1px solid #b4b4b4;
  border-left: 1px solid #b4b4b4;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    top: 72px;
    width: 93px;
    height: 40px;
    gap: 10px;
  }
`;
export const WriteCollaboContainerSuccess = styled.div`
  position: absolute;
  top: 102px;
  right: 0;
  width: 113px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 18px;
  border-radius: 8px 0 0 8px;
  border-top: 1px solid #28ca7c;
  border-bottom: 1px solid #28ca7c;
  border-left: 1px solid #28ca7c;
  background-color: #28ca7c;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    top: 72px;
    width: 93px;
    height: 40px;
    gap: 10px;
  }
`;
export const WriteCollaboIcon = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  .icon {
    width: 20px;
    height: 20px;
    color: #b4b4b4;
  }
  @media ${(props) => props.theme.device.desktopL} {
    .icon {
      width: 10px;
      height: 10px;
    }
  }
`;
export const WriteCollaboText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #b4b4b4;
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
export const WriteCollaboTextSuccess = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #ffffff;
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
export const WriteSingerContainer = styled.div`
  position: absolute;
  top: 190px;
  right: 0;
  width: 113px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 8px 0 0 8px;
  border-top: 1px solid #b4b4b4;
  border-bottom: 1px solid #b4b4b4;
  border-left: 1px solid #b4b4b4;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    top: 140px;
    width: 93px;
    height: 40px;
    gap: 10px;
  }
`;
export const WriteSingerContainerSelected = styled.div`
  position: absolute;
  top: 190px;
  right: 0;
  width: 113px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 8px 0 0 8px;
  border-top: 1px solid #28ca7c;
  border-bottom: 1px solid #28ca7c;
  border-left: 1px solid #28ca7c;
  background-color: #28ca7c;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    top: 140px;
    width: 93px;
    height: 40px;
    gap: 10px;
  }
`;
export const WriteSingerIcon = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  .icon {
    width: 20px;
    height: 20px;
    color: #b4b4b4;
  }
  @media ${(props) => props.theme.device.desktopL} {
    .icon {
      width: 10px;
      height: 10px;
    }
  }
`;
export const WriteSingerText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #b4b4b4;
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
export const WriteSingerTextSelected = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #ffffff;
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
export const WriteMakerContainer = styled.div`
  position: absolute;
  top: 278px;
  right: 0;
  width: 113px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 8px 0 0 8px;
  border-top: 1px solid #b4b4b4;
  border-bottom: 1px solid #b4b4b4;
  border-left: 1px solid #b4b4b4;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    top: 206px;
    width: 93px;
    height: 40px;
    gap: 10px;
  }
`;
export const WriteMakerContainerSelected = styled.div`
  position: absolute;
  top: 278px;
  right: 0;
  width: 113px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 8px 0 0 8px;
  border-top: 1px solid #28ca7c;
  border-bottom: 1px solid #28ca7c;
  border-left: 1px solid #28ca7c;
  background-color: #28ca7c;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    top: 206px;
    width: 93px;
    height: 40px;
    gap: 10px;
  }
`;
export const WriteMakerBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;
export const WriteMakerIcon = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  .icon {
    width: 20px;
    height: 20px;
    color: #b4b4b4;
  }
  @media ${(props) => props.theme.device.desktopL} {
    .icon {
      width: 10px;
      height: 10px;
    }
  }
`;
export const WriteMakerText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #b4b4b4;
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
export const WriteMakerTextSelected = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #ffffff;
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
export const WriteForm = styled.form`
  position: absolute;
  top: 102px;
  left: 48px;
  width: 776px;
  height: auto;
  @media ${(props) => props.theme.device.desktopL} {
    top: 72px;
    left: 28px;
    width: 676px;
  }
`;
export const WriteInputContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
export const WriteInputIcon = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: ${(props) => props.theme.fontSizes.xl};
  opacity: 0.3;
  &:hover {
    cursor: pointer;
  }
`;
export const WriteImageTextContainer = styled.div`
  margin-top: 11px;
  width: 100%;
  height: 236px;
  display: flex;
  gap: 14px;
  @media ${(props) => props.theme.device.desktopL} {
    height: 186px;
  }
`;
export const WriteImageBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;
export const WriteImagePreviewImg = styled.img`
  width: 236px;
  height: 236px;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 10px;
  @media ${(props) => props.theme.device.desktopL} {
    width: 186px;
    height: 186px;
  }
`;
export const WriteTextBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;
export const WriteTextIconBox = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: ${(props) => props.theme.fontSizes.xl};
  opacity: 0.3;
  &:hover {
    cursor: pointer;
  }
`;
export const WriteTextArea = styled.textarea`
  width: 256px;
  height: 236px;
  padding: 31px 31px 15px 35px;
  border-radius: 10px;
  border: 1px solid #28ca72;
  resize: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #d9d9d9;
  }
  @media ${(props) => props.theme.device.desktopL} {
    width: 231px;
    height: 186px;
    padding: 21px 31px 15px 25px;
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;
export const WriteAudioContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 14px;
  margin-top: 11px;
`;
export const WriteAudioBox = styled.div`
  width: 236px;
  height: 100px;
  position: relative;
  border: 1px solid #28ca72;
  border-radius: 10px;
  @media ${(props) => props.theme.device.desktopL} {
    width: 186px;
    height: 80px;
  }
`;
export const WriteAudioIcon = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  .icon {
    width: 30px;
    height: 30px;
  }
`;
export const WriteAudioText = styled.span`
  position: absolute;
  z-index: 1;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  /* color: #418FDF; */
  color: #28ca7c;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
export const WriteAudioInput = styled.input`
  display: none;
`;

export const WriteAudioPreView = styled.div`
  width: 524px;
  height: 100px;
  border: 1px solid #28ca72;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.desktopL} {
    width: 476px;
    height: 80px;
  }
`;
export const WriteAudioPreviewFile = styled.div`
  position: relative;
  width: 400px;
  height: 70px;
  background-color: #d2f8df;
  border-radius: 10px;
  @media ${(props) => props.theme.device.desktopL} {
    width: 340px;
    height: 55px;
  }
`;
export const WriteAudioPreviewFileName = styled.span`
  position: absolute;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  top: 20%;
  left: 20%;
  @media ${(props) => props.theme.device.desktopL} {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;
export const WriteAudioPreviewFileSize = styled.span`
  position: absolute;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  top: 60%;
  left: 20%;
  @media ${(props) => props.theme.device.desktopL} {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
export const WriteAudioPreviewFileIconMusic = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  .icon-music {
    width: 30px;
    height: 30px;
  }
  @media ${(props) => props.theme.device.desktopL} {
    .icon-music {
      width: 25px;
      height: 25px;
    }
  }
`;
export const WriteAudioPreviewFileIconCancel = styled.div`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  opacity: 0.3;
  .icon-cancel {
    width: 20px;
    height: 20px;
  }
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    .icon-cancel {
      width: 18px;
      height: 18px;
    }
  }
`;
export const WriteHashTagContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 23px;
  @media ${(props) => props.theme.device.desktopL} {
    margin-top: 18px;
  }
`;
export const WriteHashTagTitle = styled.span`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const WriteHashTagTitleInfo = styled.span`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #d9d9d9;
  margin-top: 5px;
`;
export const WriteHashTag = styled.input`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.fontSizes.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding: 20px 40px 20px 19px;
  border-radius: 10px;
  border: 1px solid #28ca72;
  line-height: ${(props) => props.theme.lineHeight.xs};
  outline: none;
  &::placeholder {
    color: #b4b4b4;
  }
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.fontSizes.xs};
    font-size: ${(props) => props.theme.fontSizes.xs};
    padding: 15px 40px 15px 19px;
  }
`;
export const WriteHashTagBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 10px;
`;
export const WriteButtonContainer = styled.div`
  position: absolute;
  right: 14px;
  bottom: 17px;
  width: auto;
  height: auto;
`;
export const WriteButtonDeleteContainer = styled.div`
  position: absolute;
  left: 48px;
  bottom: 17px;
  width: auto;
  height: auto;
  @media ${(props) => props.theme.device.desktopL} {
    left: 28px;
  }
`;
