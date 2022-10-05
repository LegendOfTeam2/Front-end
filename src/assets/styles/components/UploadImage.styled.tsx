import styled from 'styled-components';

interface StyledProps {
  width : any
  height : any
}

export const UploadImageContainer : any = styled.div<StyledProps>`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : 'auto')};
  position: relative;
  border: 1px solid #28ca72;
  border-radius: 10px;
`;
export const UploadImageIcon = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  .icon {
    width: 30px;
    height: 30px;
  }
`;
export const UploadImageText = styled.span`
  position: absolute;
  z-index: 1;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  color: #28ca7c;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
export const UploadImageInput = styled.input`
  display: none;
`;
