// React
import { Fragment, memo } from 'react';

// Assets
import {
  MessageContainer,
  MessageBoxSenderBox,
  MessageBoxSenderText,
  MessageBoxReceiverBox,
  MessageBoxReceiverText,
  MessageBoxTime,
} from '../assets/styles/components/Message.styled';

const Message = ({ message, messageState, createdAt }) => {
  return (
    <MessageContainer justifyContent={messageState ? 'flex-end' : 'flex-start'}>
      {messageState ? (
        <Fragment>
          <MessageBoxTime>{createdAt}</MessageBoxTime>
          <MessageBoxSenderBox>
            <MessageBoxSenderText>{message}</MessageBoxSenderText>
          </MessageBoxSenderBox>
        </Fragment>
      ) : (
        <Fragment>
          <MessageBoxReceiverBox>
            <MessageBoxReceiverText>{message}</MessageBoxReceiverText>
          </MessageBoxReceiverBox>
          <MessageBoxTime>{createdAt}</MessageBoxTime>
        </Fragment>
      )}
    </MessageContainer>
  );
};

export default memo(Message);
