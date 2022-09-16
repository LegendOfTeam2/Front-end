// React
import { Fragment, useState, useEffect } from 'react';

// Packages
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import jwt_decode from 'jwt-decode';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Message from '../components/Message';
import ChatMember from '../components/ChatMember';

// Elements
import Button from '../elements/Button';

// Utils
import { getCookie } from '../utils/cookie';

// Assets
import {
  ChatContainer,
  ChatNaviContainer,
  ChatNaviIconBox,
  ChatNaviTitleBox,
  ChatNaviTitleText,
  ChatDataContainer,
  ChatDataMemberContainer,
  ChatDataRoomContainer,
  ChatDataRoomProfileContainer,
  ChatDataRoomProfileBox,
  ChatDataRoomProfileImg,
  ChatDataRoomTextContainer,
  ChatDataRoomTextNickname,
  ChatDataRoomMessageContainer,
  ChatDataRoomInputContainer,
  ChatDataRoomInput,
  ChatDataRoomButtonBox
} from '../assets/styles/pages/Chat.styled'

const Chat = () => {
  const SERVER_URL = process.env.REACT_APP_REST_API_IP;
  const sockJS = new SockJS(`http://${SERVER_URL}/ws/chat`);
  const stompClient = over(sockJS);

  const nickname = jwt_decode(getCookie('authorization')).sub;

  const [message, setMessage] = useState('');
  const [contents, setContents] = useState([]);
  const [roomId, setRoomId] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe(`/topic/chat/room/${roomId}`, (data) => {
        const newMessage = JSON.parse(data.body);
        addMessage(newMessage);
      });
    });
  }, []);

  const onHandleClick = () => {
    if (message !== '' && message !== ' ') {
      const newMessage = { type: 'TALK', roomId, sender: nickname, message };
      stompClient.send('/app/chat/message', {}, JSON.stringify(newMessage));
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
            roomId,
            sender: nickname,
            message,
          };
          stompClient.send('/app/chat/message', {}, JSON.stringify(newMessage));
          setMessage('');
        }
      }
    }
  };

  const addMessage = (message) => {
    setContents((prev) => [...prev, message]);
  };

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
            <ChatMember />
            <ChatMember />
            <ChatMember />
            <ChatMember />
            <ChatMember />
            <ChatMember />
            <ChatMember />
            <ChatMember />
            <ChatMember />
          </ChatDataMemberContainer>
          <ChatDataRoomContainer>
            <ChatDataRoomProfileContainer>
              <ChatDataRoomProfileBox>
                <ChatDataRoomProfileImg></ChatDataRoomProfileImg>
              </ChatDataRoomProfileBox>
              <ChatDataRoomTextContainer>
                <ChatDataRoomTextNickname>닉네임</ChatDataRoomTextNickname>
              </ChatDataRoomTextContainer>
            </ChatDataRoomProfileContainer>
            <ChatDataRoomMessageContainer>
              {contents.map((element, idx) => {
                let messageState = false;
                if (nickname === element.sender) messageState = true;
                return (
                  <Message
                    key={idx}
                    sender={element.sender}
                    message={element.message}
                    messageState={messageState}
                  />
                );
              })}
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