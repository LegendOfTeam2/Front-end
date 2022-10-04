// React
import { memo } from 'react';

// Zustand
import useChatStore from '../zustand/chat';
import useMemberStore from '../zustand/member';

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

const ChatMember = ({
  roomId,
  sender,
  senderProfileUrl,
  receiver,
  receiverProfileUrl,
  lastMessage,
}) => {
  // const chatRoomInfo = useChatStore((state) => state.chatRoomInfo);
  const setChatRoomInfo = useChatStore((state) => state.setChatRoomInfo);
  // const unSetSubscription = useChatStore((state) => state.unSetSubscription);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const onClickHandle = () => {
    if (receiver === jwt_decode(getCookie('authorization')).sub) {
      setChatRoomInfo({
        roomId: roomId,
        nickname: sender,
        profileImg: senderProfileUrl,
      });
    } else {
      setChatRoomInfo({
        roomId: roomId,
        nickname: receiver,
        profileImg: receiverProfileUrl,
      });
    }
  };

  return (
    <ChatMemberContainer onClick={() => onClickHandle()}>
      <ChatMemberProfileContainer>
        {receiver === jwt_decode(getCookie('authorization')).sub ? (
          senderProfileUrl === '' ? (
            <ChatMemberProfileImg
              src={profileImgArr[random]}
            ></ChatMemberProfileImg>
          ) : (
            <ChatMemberProfileImg src={senderProfileUrl}></ChatMemberProfileImg>
          )
        ) : receiverProfileUrl === '' ? (
          <ChatMemberProfileImg
            src={profileImgArr[random]}
          ></ChatMemberProfileImg>
        ) : (
          <ChatMemberProfileImg src={receiverProfileUrl}></ChatMemberProfileImg>
        )}
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
