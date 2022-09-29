// Zustand
import useChatStore from '../zustand/chat';

// Packages
import jwt_decode from 'jwt-decode';

// Utils
import { getCookie } from '../utils/cookie';

// Assets
import {
  ChatMemberContainer,
  ChatMemberProfileContainer,
  ChatMemberProfileImg,
  ChatMemberTextContainer,
  ChatMemberTextMessage,
  ChatMemberTextNickname,
} from '../assets/styles/components/ChatMember.styled';

const ChatMember = ({ roomId, sender, receiver, lastMessage, profileUrl }) => {
  const setSubRoomId = useChatStore((state) => state.setSubRoomId);

  const onClickHandle = () => {
    setSubRoomId(roomId);
  };

  return (
    <ChatMemberContainer onClick={onClickHandle}>
      <ChatMemberProfileContainer>
        <ChatMemberProfileImg src={profileUrl}></ChatMemberProfileImg>
      </ChatMemberProfileContainer>
      <ChatMemberTextContainer>
        {receiver === jwt_decode(getCookie('authorization')).sub ? (
          <ChatMemberTextNickname>{sender}</ChatMemberTextNickname>
        ) : (
          <ChatMemberTextNickname>{receiver}</ChatMemberTextNickname>
        )}
        <ChatMemberTextMessage>{lastMessage}</ChatMemberTextMessage>
      </ChatMemberTextContainer>
    </ChatMemberContainer>
  );
};

export default ChatMember;
