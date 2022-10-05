// React
import { memo } from 'react';

// Zustand
import useChatStore from '../zustand/chat';
import useMemberStore from '../zustand/member';

// Packages
import jwt_decode, { JwtPayload } from 'jwt-decode';

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

interface ChatMemberProps {
  roomId : any;
  sender : any;
  senderProfileUrl : any;
  receiver : any;
  receiverProfileUrl : any;
  lastMessage : any;
}

function ChatMember({
  roomId,
  sender,
  senderProfileUrl,
  receiver,
  receiverProfileUrl,
  lastMessage,
} : ChatMemberProps) {
  const setChatRoomInfo = useChatStore((state) => state.setChatRoomInfo);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const onClickHandle = () => {
    if (receiver === jwt_decode<JwtPayload>(getCookie('authorization')).sub) {
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
    <ChatMemberContainer>
      <ChatMemberProfileContainer>
        {receiver === jwt_decode<JwtPayload>(getCookie('authorization')).sub ? (
          senderProfileUrl === '' ? (
            <ChatMemberProfileImg
              src={profileImgArr[random]}
              onClick={() => onClickHandle()}
            />
          ) : (
            <ChatMemberProfileImg
              src={senderProfileUrl}
              onClick={() => onClickHandle()}
            />
          )
        ) : receiverProfileUrl === '' ? (
          <ChatMemberProfileImg
            src={profileImgArr[random]}
            onClick={() => onClickHandle()}
          />
        ) : (
          <ChatMemberProfileImg
            src={receiverProfileUrl}
            onClick={() => onClickHandle()}
          />
        )}
      </ChatMemberProfileContainer>
      <ChatMemberTextContainer>
        {receiver === jwt_decode<JwtPayload>(getCookie('authorization')).sub ? (
          <ChatMemberTextNickname onClick={() => onClickHandle()}>
            {sender}
          </ChatMemberTextNickname>
        ) : (
          <ChatMemberTextNickname onClick={() => onClickHandle()}>
            {receiver}
          </ChatMemberTextNickname>
        )}
        <ChatMemberTextMessage>{lastMessage}</ChatMemberTextMessage>
      </ChatMemberTextContainer>
    </ChatMemberContainer>
  );
};

export default memo(ChatMember);
