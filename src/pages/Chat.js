import { Fragment, useState, useEffect } from 'react';

import SockJS from 'sockjs-client';
import { over } from 'stompjs';

import Header from '../components/Header';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import ChatMember from '../components/ChatMember';
import Button from '../elements/Button';
import jwt_decode from 'jwt-decode';
import { getCookie } from '../utils/cookie';

const SERVER_URL = process.env.REACT_APP_REST_API_IP_TEST;
let sockJS = new SockJS(`http://${SERVER_URL}/websocket`);
let stompClient = over(sockJS);

const Chat = () => {
  const nickname = jwt_decode(getCookie('authorization')).sub;

  const [message, setMessage] = useState('');
  const [contents, setContents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/roomId', (data) => {
        const newMessage = JSON.parse(data.body);
        addMessage(newMessage);
      });
    });
  }, [contents]);

  const onHandleClick = () => {
    const newMessage = { nickname, message };
    stompClient.send('/hello', {}, JSON.stringify(newMessage));
    setMessage('');
  };

  const addMessage = (message) => {
    setContents((prev) => [...prev, message]);
    console.log(contents);
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
                <ChatDataRoomTextNickname>Nickname</ChatDataRoomTextNickname>
              </ChatDataRoomTextContainer>
            </ChatDataRoomProfileContainer>
            <ChatDataRoomMessageContainer></ChatDataRoomMessageContainer>
            <ChatDataRoomInputContainer>
              <ChatDataRoomInput
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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

export const ChatContainer = styled.div`
  position: absolute;
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
  cursor: pointer;
  .icon {
    width: 30px;
    height: 30px;
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
`;
export const ChatDataContainer = styled.div`
  margin-top: 20px;
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
  border: 1px solid #b4b4b4;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ChatDataRoomContainer = styled.div`
  width: 583px;
  height: 880px;
  border-radius: 8px;
  border: 1px solid #b4b4b4;
`;
export const ChatDataRoomProfileContainer = styled.div`
  width: 100%;
  height: 107px;
  position: relative;
  border-bottom: 1px solid #b4b4b4;
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
`;
export const ChatDataRoomMessageContainer = styled.div`
  width: 100%;
  height: 600px;
  border-bottom: 1px solid #b4b4b4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const ChatDataRoomInputContainer = styled.div`
  width: 100%;
  height: 173px;
  position: relative;
`;
export const ChatDataRoomInput = styled.textarea`
  position: absolute;
  width: 404px;
  height: 158px;
  border: 1px solid #e7e7e7;
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
