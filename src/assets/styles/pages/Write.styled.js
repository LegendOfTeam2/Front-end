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
  border: 1px solid rgba(40, 202, 124, 1) ;
  background-color: #ffffff;
`;
export const WriteIconContainer = styled.div`
  position: absolute;
  top: 26px;
  right: 26px;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  &:hover {
    cursor: pointer;
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
`;
export const WriteCollaboBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
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
`;
export const WriteSingerBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
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
`;
export const WriteForm = styled.form`
  position: absolute;
  top: 102px;
  left: 48px;
  width: 776px;
  height: auto;
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
  font-size: ${(props) => props.theme.fontSizes.xxl};
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
  &:hover {
    cursor: pointer;
  }
`;
export const WriteTextArea = styled.textarea`
  width: 255px;
  height: 236px;
  padding: 31px 31px 15px 35px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  resize: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #d9d9d9;
  }
`;
export const WriteAudioContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 14px;
  margin-top: 14px;
`;
export const WriteAudioBox = styled.div`
  width: 236px;
  height: 100px;
  border: 1px solid red;
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
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
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`;
export const WriteAudioInput = styled.input`
  display: none;
`;

export const WriteAudioPreView = styled.div`
  width: 524px;
  height: 100px;
  border: 1px solid #dedede;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteAudioPreviewFile = styled.div`
  position: relative;
  width: 400px;
  height: 70px;
  background-color: #d2f8df;
  border-radius: 10px;
  display: none;
`;
export const WriteAudioPreviewFileName = styled.span`
  position: absolute;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  top: 20%;
  left: 20%;
`;
export const WriteAudioPreviewFileSize = styled.span`
  position: absolute;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  top: 60%;
  left: 20%;
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
`;
export const WriteAudioPreviewFileIconCancel = styled.div`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  .icon-cancel {
    width: 20px;
    height: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const WriteHashTagContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 23px;
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
  border: 1px solid #d9d9d9;
  line-height: ${(props) => props.theme.lineHeight.xs};
  outline: none;
  &::placeholder {
    color: #b4b4b4;
  }
`;
export const WriteHashTagBox = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
`;
export const WriteButtonContainer = styled.div`
  position: absolute;
  right: 14px;
  bottom: 17px;
  width: auto;
  height: auto;
`;
