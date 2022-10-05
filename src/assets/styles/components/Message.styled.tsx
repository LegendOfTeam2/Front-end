import styled from 'styled-components';

export const MessageContainer : any = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: flex-end;
  gap: 5px;
`;
export const MessageBoxSenderBox : any = styled.div`
  width: auto;
  max-width: 70%;
  height: auto;
  color: white;
  background-color: #28ca7c;
  border-radius: 8px;
  padding: 8px;
`;
export const MessageBoxSenderText : any = styled.span`
  width: auto;
  height: auto;
  white-space: pre-wrap;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const MessageBoxReceiverBox : any = styled.div`
  width: auto;
  max-width: 70%;
  height: auto;
  color: black;
  background-color: #e7e7e7;
  border-radius: 8px;
  padding: 8px;
`;
export const MessageBoxReceiverText : any = styled.span`
  width: auto;
  height: auto;
  white-space: pre-wrap;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const MessageBoxTime : any = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #4f4f4f;
`