import styled from 'styled-components';

const ChatMember = () => {
  return (
    <ChatMemberContainer>
      <ChatMemberProfileContainer>
        <ChatMemberProfileImg></ChatMemberProfileImg>
      </ChatMemberProfileContainer>
      <ChatMemberTextContainer>
        <ChatMemberTextNickname>닉네임</ChatMemberTextNickname>
        <ChatMemberTextMessage>
          안녕하세요, 같이 작업 하고 싶어서 콜라보 보내드렸어요!
        </ChatMemberTextMessage>
      </ChatMemberTextContainer>
    </ChatMemberContainer>
  );
};

export default ChatMember;

export const ChatMemberContainer = styled.div`
  width: 365px;
  height: 108px;
  border-bottom: 1px solid #b4b4b4;
  position: relative;
`;
export const ChatMemberProfileContainer = styled.div`
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
export const ChatMemberProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;
export const ChatMemberTextContainer = styled.div`
  position: absolute;
  width: 226px;
  height: auto;
  top: 18px;
  left: 122px;
  display: flex;
  flex-direction: column;
`;
export const ChatMemberTextNickname = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const ChatMemberTextMessage = styled.span`
  width: auto;
  height: 40px;
  overflow: hidden;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.lineHeight.base};
`;
