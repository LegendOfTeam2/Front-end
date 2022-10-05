import styled from 'styled-components';

export const MyImgDivDivSm = styled.div`
  width: 167px;
  height: 167px;
  display: flex;
  position: relative;
`;

export const PostimgDivDivSm = styled.div`
  width: 167px;
  height: 167px;
  display: flex;
  position: relative;
`;

export const MyimgSm = styled.img`
  width: 167px;
  height: 167px;
  ${MyImgDivDivSm}:hover & {
    filter: brightness(20%);
  }
`;

export const ImgMyBtmRightSm = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 7%;
  left: 7%;
  ${MyImgDivDivSm}:hover & {
    display: none;
    cursor: pointer;
  }
`;
export const MyImgTopLeftSm = styled.div`
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
  ${MyImgDivDivSm}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const MyImgTopBotmLeftSm = styled.div`
  position: absolute;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: 18%;
  left: 8%;
  color: rgba(40, 202, 124, 1);
  display: none;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  ${MyImgDivDivSm}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgTopRightSm = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: none;
  ${MyImgDivDivSm}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgBtmLeftSm = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyImgDivDivSm}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const MyImgBtmLeftDivSm = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  z-index: 10;
`;

export const MyImgBtmLeftspanSm = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: rgba(40, 202, 124, 1);
  margin-left: 1px;
  margin-top: 3.5px;
`;

export const MyImgBtmRightSm = styled.div`
  position: absolute;
  bottom: 2%;
  right: 6%;
  display: none;
  ${MyImgDivDivSm}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const ImgNotSlideSpanSm = styled.span`
  color: #ffffff;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
export const ImgNotTopSlideSpanSm = styled.span`
  color: #ffffff;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  white-space: nowrap;
  width: 100px;
  text-overflow: ellipsis;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
export const DisMyImgTopRightSm = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: block;
  :hover & {
    cursor: pointer;
  }
`;
