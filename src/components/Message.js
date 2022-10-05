// Assets
import {
  MessageContainer,
  MessageBoxSenderBox,
  MessageBoxSenderText,
  MessageBoxReceiverBox,
  MessageBoxReceiverText,
} from '../assets/styles/components/Message.styled';

const Message = ({ message, messageState }) => {
  return (
    <MessageContainer justifyContent={messageState ? 'flex-end' : 'flex-start'}>
      {messageState ? (
        <MessageBoxSenderBox>
          <MessageBoxSenderText>{message}</MessageBoxSenderText>
        </MessageBoxSenderBox>
      ) : (
        <MessageBoxReceiverBox>
          <MessageBoxReceiverText>{message}</MessageBoxReceiverText>
        </MessageBoxReceiverBox>
      )}
    </MessageContainer>
  );
};

export default Message;