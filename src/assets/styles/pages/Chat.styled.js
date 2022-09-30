import styled from 'styled-components';

export const ChatContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 231px;
  left: 50%;
  transform: translateX(-50%);
  width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  z-index: -1;
`;
export const ChatNaviContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
export const ChatNaviIconBox = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  color: #cecece;
  cursor: pointer;
  .icon {
    width: 36px;
    height: 36px;
  }
`;
export const ChatNaviTitleBox = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  padding: 8px 0;
`;
export const ChatNaviTitleText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca7c;
`;
export const ChatDataContainer = styled.div`
  margin-top: 73px;
  margin-bottom: 18px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 28px;
`;
export const ChatDataMemberContainer = styled.div`
  width: 365px;
  height: 880px;
  border-radius: 8px;
  border: 1px solid #28ca7c;
`;
export const ChatDataMemberTitleBox = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b1e2f;
  border-radius: 8px 8px 0 0;
`;
export const ChatDataMemberTitleText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca72;
`;
export const ChatDataMemberRoomBox = styled.div`
  width: 100%;
  height: 775px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ChatDataRoomContainer = styled.div`
  width: 583px;
  height: 880px;
  border-radius: 8px;
  border: 1px solid #28ca7c;
`;
export const ChatDataRoomProfileContainer = styled.div`
  width: 100%;
  height: 107px;
  position: relative;
  background-color: #1b1e2f;
  border-radius: 8px 8px 0 0;
`;
export const ChatDataRoomProfileBox = styled.div`
  width: auto;
  height: auto;
  border-radius: 50%;
  background-color: #d9d9d9;
  position: absolute;
  overflow: hidden;
  left: 26px;
  top: 50%;
  transform: translateY(-50%);
`;
export const ChatDataRoomProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;
export const ChatDataRoomTextContainer = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  left: 127px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`;
export const ChatDataRoomTextNickname = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: white;
`;
export const ChatDataRoomMessageContainer = styled.div`
  width: 100%;
  height: 600px;
  padding: 20px;
  border-bottom: 1px solid #28ca7c;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #1b1e2f;
    border-radius: 10px;
  }
`;
export const ChatDataRoomMessageBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
`
export const ChatDataRoomInputContainer = styled.div`
  width: 100%;
  height: 173px;
  position: relative;
`;
export const ChatDataRoomInput = styled.textarea`
  position: absolute;
  width: 404px;
  height: 158px;
  border: 1px solid #28ca7c;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  resize: none;
  outline: none;
  &::placeholder {
    color: #b4b4b4;
  }
`;
export const ChatDataRoomButtonBox = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  left: 430px;
  top: 50%;
  transform: translateY(-50%);
`;
