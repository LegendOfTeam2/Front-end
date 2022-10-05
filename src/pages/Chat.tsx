// React
import { Fragment, useState, useEffect, useRef, useCallback } from 'react';

// Zustand
import useChatStore from '../zustand/chat';
import useMemberStore from '../zustand/member';

// Packages
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { debounce } from 'lodash';

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

function Chat() {
  const SERVER_URL : any = process.env.REACT_APP_REST_API_IP;
  const sockJS : any = new SockJS(`https://${SERVER_URL}/ws/chat`);
  const stompClient : any = over(sockJS);

  const getRoomsIsLoaded : any = useChatStore((state) => state.getRoomsIsLoaded);
  const getRooms : any = useChatStore((state) => state.getRooms);
  const rooms : any = useChatStore((state) => state.rooms);
  const chatRoomInfo : any = useChatStore((state) => state.chatRoomInfo);
  const subscription : any = useChatStore((state) => state.subscription);
  const setSubscription : any = useChatStore((state) => state.setSubscription);
  const chatMessages : any = useChatStore((state) => state.chatMessages);
  const setChatMessages : any = useChatStore((state) => state.setChatMessages);
  const clearChatMessages : any = useChatStore((state) => state.clearChatMessages);
  const prevChatMessages : any = useChatStore((state) => state.prevChatMessages);
  const getPrevChatMessages : any = useChatStore(
    (state) => state.getPrevChatMessages
  );
  const prevChatMessagesIsLoaded : any = useChatStore(
    (state) => state.prevChatMessagesIsLoaded
  );

  const profileImgArr : any = useMemberStore((state) => state.profileImgArr);
  const random : any = useMemberStore((state) => state.random);

  const [message, setMessage] : any = useState('');

  const scrollRef : any = useRef();

  const navigate : any = useNavigate();

  const scrollToBottom : any = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  const connectionStateCheck : any = (callback : any) => {
    setTimeout(() => {
      if (sockJS.readyState === 1) {
        callback();
      } else {
        connectionStateCheck(callback);
      }
    }, 1);
  };

  const onHandleClick : any = useCallback(() => {
    if (message !== '' && message !== ' ') {
      const newMessage = {
        type: 'TALK',
        roomId: chatRoomInfo.roomId,
        sender:
          getCookie('authorization') !== undefined
            ? jwt_decode<JwtPayload>(getCookie('authorization')).sub
            : '',
        message,
        profileUrl: '',
        createdAt: '',
      };
      connectionStateCheck(() => {
        stompClient.send(`/pub/chat/message`, {}, JSON.stringify(newMessage));
      });
      setMessage('');
    }
  }, [message]);

  const onHandleEnter : any = useCallback(
    debounce((e) => {
      if (e.key === 'Enter') {
        if (!e.shiftKey) {
          if (e.target.value.length > 0) {
            e.preventDefault();
            const newMessage = {
              type: 'TALK',
              roomId: chatRoomInfo.roomId,
              sender:
                getCookie('authorization') !== undefined
                  ? jwt_decode<JwtPayload>(getCookie('authorization')).sub
                  : '',
              message,
              profileUrl: '',
              createdAt: '',
            };
            connectionStateCheck(() => {
              stompClient.send(
                `/pub/chat/message`,
                {},
                JSON.stringify(newMessage)
              );
            });
            setMessage('');
          }
        }
      }
    }, 10),
    [message]
  );

  const addMessage : any = (message : any) => {
    setChatMessages(message);
  };

  useEffect(() => {
    getRooms();
    clearChatMessages();

    if (subscription.indexOf(chatRoomInfo.roomId) === -1) {
      stompClient.connect({}, () => {
        stompClient.subscribe(
          `/sub/chat/room/${chatRoomInfo.roomId}`,
          (data : any) => {
            addMessage(JSON.parse(data.body));
          }
        );
      });
      setSubscription(chatRoomInfo.roomId);
      getPrevChatMessages(chatRoomInfo.roomId);
    } else {
      if (chatRoomInfo.roomId !== '') {
        getPrevChatMessages(chatRoomInfo.roomId);
      }
    }
  }, [chatRoomInfo]);

  useEffect(() => {
    scrollToBottom();
  }, [prevChatMessages, chatMessages]);

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
                rooms.length !== 0 ? (
                  [...rooms].reverse().map((room) => {
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
                )
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
              {chatRoomInfo.roomId !== '' ? (
                <ChatDataRoomMessageBox>
                  {prevChatMessagesIsLoaded ? (
                    [...prevChatMessages].map((message : any, idx : any) => {
                      let messageState = false;
                      if (getCookie('authorization') !== undefined) {
                        if (
                          jwt_decode<JwtPayload>(getCookie('authorization')).sub ===
                          message.sender
                        ) {
                          messageState = true;
                        }
                      }
                      const dateArr = message.createdAt.split(',');
                      const date = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]} ${dateArr[3]}:${dateArr[4]}`;
                      return (
                        <Message
                          key={idx}
                          sender={message.sender}
                          message={message.message}
                          createdAt={date}
                          messageState={messageState}
                        />
                      );
                    })
                  ) : (
                    <Fragment />
                  )}
                  {[...chatMessages].map((message : any, idx : any) => {
                    let messageState = false;
                    if (getCookie('authorization') !== undefined) {
                      if (
                        jwt_decode<JwtPayload>(getCookie('authorization')).sub ===
                        message.sender
                      ) {
                        messageState = true;
                      }
                    }

                    const date = dayjs().format('YYYY-MM-DD HH:mm');

                    if (message.roomId === chatRoomInfo.roomId) {
                      return (
                        <Message
                          key={idx}
                          sender={message.sender}
                          message={message.message}
                          createdAt={date}
                          messageState={messageState}
                        />
                      );
                    }
                  })}
                </ChatDataRoomMessageBox>
              ) : (
                <Fragment />
              )}
            </ChatDataRoomMessageContainer>
            {chatRoomInfo.roomId !== '' ? (
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
                    _ref={''}
                  />
                </ChatDataRoomButtonBox>
              </ChatDataRoomInputContainer>
            ) : (
              <Fragment />
            )}
          </ChatDataRoomContainer>
        </ChatDataContainer>
      </ChatContainer>
    </Fragment>
  );
};

export default Chat;
