// React
import { Fragment, useState, useEffect, useRef } from 'react';

// Zustand
import useChatStore from '../zustand/chat';
import useMemberStore from '../zustand/member';

// Packages
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import jwt_decode from 'jwt-decode';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

// Utils
import { getCookie } from '../utils/cookie';

// Components
import Header from '../components/Header';
import Message from '../components/Message';
import ChatMember from '../components/ChatMember';

// Elements
import Button from '../elements/Button';

// Assets
import {
  ChatContainer,
  ChatNaviContainer,
  ChatNaviIconBox,
  ChatNaviTitleBox,
  ChatNaviTitleText,
  ChatDataContainer,
  ChatDataMemberContainer,
  ChatDataMemberTitleBox,
  ChatDataMemberTitleText,
  ChatDataMemberRoomBox,
  ChatDataRoomContainer,
  ChatDataRoomProfileContainer,
  ChatDataRoomProfileBox,
  ChatDataRoomProfileImg,
  ChatDataRoomTextContainer,
  ChatDataRoomTextNickname,
  ChatDataRoomMessageContainer,
  ChatDataRoomMessageBox,
  ChatDataRoomInputContainer,
  ChatDataRoomInput,
  ChatDataRoomButtonBox,
} from '../assets/styles/pages/Chat.styled';

const Chat = () => {
  const SERVER_URL = process.env.REACT_APP_REST_API_IP;
  const sockJS = new SockJS(`http://${SERVER_URL}/ws/chat`);
  const stompClient = over(sockJS);

  const getRoomsIsLoaded = useChatStore((state) => state.getRoomsIsLoaded);
  const getRooms = useChatStore((state) => state.getRooms);
  const rooms = useChatStore((state) => state.rooms);
  const chatRoomInfo = useChatStore((state) => state.chatRoomInfo);
  const subscription = useChatStore((state) => state.subscription);
  const setSubscription = useChatStore((state) => state.setSubscription);
  const chatMessages = useChatStore((state) => state.chatMessages);
  const getChatMessages = useChatStore((state) => state.getChatMessages);
  const chatMessagesIsLoaded = useChatStore(
    (state) => state.chatMessagesIsLoaded
  );

  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const [message, setMessage] = useState('');
  const [contents, setContents] = useState([]);

  const scrollRef = useRef();

  const navigate = useNavigate();

  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  const onHandleClick = () => {
    if (message !== '' && message !== ' ') {
      const newMessage = {
        type: 'TALK',
        roomId: chatRoomInfo.roomId,
        sender:
          getCookie('authorization') !== undefined
            ? jwt_decode(getCookie('authorization')).sub
            : '',
        message,
        profileUrl: '',
        createdAt: '',
      };
      stompClient.send(`/pub/chat/message`, {}, JSON.stringify(newMessage));
      setMessage('');
    }
  };

  const onHandleEnter = (e) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        if (e.target.value.length > 0) {
          e.preventDefault();
          const newMessage = {
            type: 'TALK',
            roomId: chatRoomInfo.roomId,
            sender:
              getCookie('authorization') !== undefined
                ? jwt_decode(getCookie('authorization')).sub
                : '',
            message,
            profileUrl: '',
            createdAt: '',
          };
          stompClient.send(`/pub/chat/message`, {}, JSON.stringify(newMessage));
          setMessage('');
        }
      }
    }
  };

  const addMessage = (message) => {
    setContents((prev) => [...prev, message]);
  };

  useEffect(() => {
    getRooms();
    setContents([]);

    if (subscription.indexOf(chatRoomInfo.roomId) === -1) {
      stompClient.connect({}, () => {
        setTimeout(
          stompClient.subscribe(
            `/sub/chat/room/${chatRoomInfo.roomId}`,
            (data) => {
              const newMessage = JSON.parse(data.body);
              addMessage(newMessage);
            }
          ),
          500
        );
      });
      setSubscription(chatRoomInfo.roomId);
      getChatMessages(chatRoomInfo.roomId);
    } else {
      getChatMessages(chatRoomInfo.roomId);
    }
  }, [chatRoomInfo.roomId]);

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, contents]);

  return (
    <Fragment>
      <Header />
      <ChatContainer>
        <ChatNaviContainer>
          <ChatNaviIconBox onClick={() => navigate(-1)}>
            <MdOutlineArrowBackIosNew className='icon' />
          </ChatNaviIconBox>
          <ChatNaviTitleBox>
            <ChatNaviTitleText>메시지</ChatNaviTitleText>
          </ChatNaviTitleBox>
        </ChatNaviContainer>
        <ChatDataContainer>
          <ChatDataMemberContainer>
            <ChatDataMemberTitleBox>
              <ChatDataMemberTitleText>메시지 목록</ChatDataMemberTitleText>
            </ChatDataMemberTitleBox>
            <ChatDataMemberRoomBox>
              {getRoomsIsLoaded ? (
                rooms.map((room) => {
                  return (
                    <ChatMember
                      key={room.roomId}
                      roomId={room.roomId}
                      sender={room.sender}
                      receiver={room.receiver}
                      lastMessage={room.lastMessage}
                      receiverProfileUrl={room.receiverProfileUrl}
                      senderProfileUrl={room.senderProfileUrl}
                    />
                  );
                })
              ) : (
                <Fragment />
              )}
            </ChatDataMemberRoomBox>
          </ChatDataMemberContainer>
          <ChatDataRoomContainer>
            <ChatDataRoomProfileContainer>
              <ChatDataRoomProfileBox>
                {chatRoomInfo.profileImg !== '' ? (
                  <ChatDataRoomProfileImg src={chatRoomInfo.profileImg} />
                ) : (
                  <ChatDataRoomProfileImg src={profileImgArr[random]} />
                )}
              </ChatDataRoomProfileBox>
              <ChatDataRoomTextContainer>
                <ChatDataRoomTextNickname>
                  {chatRoomInfo.nickname}
                </ChatDataRoomTextNickname>
              </ChatDataRoomTextContainer>
            </ChatDataRoomProfileContainer>
            <ChatDataRoomMessageContainer ref={scrollRef}>
              <ChatDataRoomMessageBox>
                {chatMessagesIsLoaded ? (
                  chatMessages.map((messages, idx) => {
                    let messageState = false;
                    if (getCookie('authorization') !== undefined) {
                      if (
                        jwt_decode(getCookie('authorization')).sub ===
                        messages.sender
                      )
                        messageState = true;
                    }
                    return (
                      <Message
                        key={idx}
                        sender={messages.sender}
                        message={messages.message}
                        messageState={messageState}
                      />
                    );
                  })
                ) : (
                  <Fragment />
                )}
                {contents.map((element, idx) => {
                  let messageState = false;
                  if (getCookie('authorization') !== undefined) {
                    if (
                      jwt_decode(getCookie('authorization')).sub ===
                      element.sender
                    )
                      messageState = true;
                  }
                  return (
                    <Message
                      key={idx}
                      sender={element.sender}
                      message={element.message}
                      messageState={messageState}
                    />
                  );
                })}
              </ChatDataRoomMessageBox>
            </ChatDataRoomMessageContainer>
            <ChatDataRoomInputContainer>
              <ChatDataRoomInput
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => onHandleEnter(e)}
              ></ChatDataRoomInput>
              <ChatDataRoomButtonBox>
                <Button
                  _text={'전송'}
                  _type={'button'}
                  _onClick={onHandleClick}
                  _style={{
                    width: '140px',
                    height: '158px',
                    color: 'white',
                    bg_color: '#28ca7c',
                    bd_radius: '8px',
                    ft_weight: '800',
                  }}
                />
              </ChatDataRoomButtonBox>
            </ChatDataRoomInputContainer>
          </ChatDataRoomContainer>
        </ChatDataContainer>
      </ChatContainer>
    </Fragment>
  );
};

export default Chat;
