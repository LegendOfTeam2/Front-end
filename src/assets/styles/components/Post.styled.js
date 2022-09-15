import styled from 'styled-components';

export const MyImgDivDiv = styled.div`
  width: 164.5px;
  height: 164.5px;
  display: flex;
  position: relative;

`;

export const PostimgDivDiv = styled.div`
  width: 164.5px;
  height: 164.5px;
  display: flex;
  position: relative;
`;

export const Myimg = styled.img`
  width: 164.5px;
  height: 164.5px;
  border-radius: 19px;

  ${MyImgDivDiv}:hover & {
    filter: brightness(50%);
  }
`;

export const ImgMyBtmRight = styled.div`
  position: absolute;
  top: 7%;
  left: 7%;
  display: block;
  ${MyImgDivDiv}:hover & {
    display: none;
    cursor: pointer;
  }
`;
export const MyImgTopLeft = styled.div`
  position: absolute;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: 7%;
  left: 8%;
  color: rgba(40, 202, 124, 1);
  display: none;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgTopRight = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgBtmLeft = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const MyImgBtmLeftDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  z-index: 10;
`;

export const MyImgBtmLeftspan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: rgba(40, 202, 124, 1);
  margin-left: 1px;
  margin-top: 3.5px;
`;

export const MyImgBtmRight = styled.div`
  position: absolute;
  bottom: 5%;
  right: 6%;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const ImgNotSlideSpan = styled.span`
  color: #ffffff;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
export const DisMyImgTopRight = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: block;
  :hover & {
    cursor: pointer;
  }
`;
