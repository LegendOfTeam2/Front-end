import styled from 'styled-components';

export const UploadImageContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : 'auto')};
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
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
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`;
export const UploadImageInput = styled.input`
  display: none;
`;
