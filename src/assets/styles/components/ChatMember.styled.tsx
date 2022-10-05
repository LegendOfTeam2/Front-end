import styled from 'styled-components';

export const ChatMemberContainer : any = styled.div`
  width: 365px;
  height: 108px;
  border-bottom: 1px solid #b4b4b4;
  position: relative;
`;
export const ChatMemberProfileContainer : any = styled.div`
  width: auto;
  height: auto;
  border-radius: 50%;
  background-color: #d9d9d9;
  position: absolute;
  overflow: hidden;
  left: 19px;
  top: 50%;
  transform: translateY(-50%);
`;
export const ChatMemberProfileImg : any = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;
export const ChatMemberTextContainer : any = styled.div`
  position: absolute;
  max-width: 226px;
  width: auto;
  height: auto;
  top: 18px;
  left: 122px;
  display: flex;
  flex-direction: column;
`;
export const ChatMemberTextNickname : any = styled.span`
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  cursor: pointer;
`;
export const ChatMemberTextMessage : any = styled.span`
  width: auto;
  height: 40px;
  overflow: hidden;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.lineHeight.base};
`;
