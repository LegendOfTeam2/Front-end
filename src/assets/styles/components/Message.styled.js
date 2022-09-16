import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;
export const MessageBoxSenderBox = styled.div`
  width: auto;
  max-width: 70%;
  height: auto;
  color: white;
  background-color: #28ca7c;
  border-radius: 8px;
  padding: 8px;
`;
export const MessageBoxSenderText = styled.span`
  width: auto;
  height: auto;
  white-space: pre-wrap;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const MessageBoxReceiverBox = styled.div`
  width: auto;
  max-width: 70%;
  height: auto;
  color: black;
  background-color: #E7E7E7;
  border-radius: 8px;
  padding: 8px;
`;
export const MessageBoxReceiverText = styled.span`
  width: auto;
  height: auto;
  white-space: pre-wrap;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;