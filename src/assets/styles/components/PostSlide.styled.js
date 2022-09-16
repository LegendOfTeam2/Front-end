import styled from "styled-components";

export const ProfileImgDivDiv = styled.div`
  width: 167px;
  height: 167px;
  display: flex;
  position: relative;
`;

export const Profileimg = styled.img`
  width: 167px;
  height: 167px;
  border-radius: 19px;
  ${ProfileImgDivDiv}:hover & {
    filter: brightness(50%);
  }
`;

export const ImgMainBtmRight = styled.div`
  position: absolute;
  top: 7%;
  left: 7%;
  display: block;
  ${ProfileImgDivDiv}:hover & {
    display: none;
    cursor: pointer;
  }
`;

export const ImgMainSpan = styled.span`
  color: rgba(245, 245, 245, 1);
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const ImgTopLeft = styled.div`
  position: absolute;
  top: 7%;
  left: 8%;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgba(40, 202, 124, 1);
  display: none;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  ${ProfileImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const ImgTopRight = styled.div`
  position: absolute;
  width: auto;
  top: 8%;
  right: 10%;
  display: none;
  ${ProfileImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const ImgBtmLeft = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 8%;
  left: 8%;
  color: white;
  display: none;
  ${ProfileImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const ImgBtmLeftDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ImgBtmLeftDivSapn = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: rgba(40, 202, 124, 1);
  margin-left: 1px;
  margin-top: 3px;
`;

export const ImgBtmRight = styled.div`
  position: absolute;
  bottom: 5%;
  right: 8%;
  display: none;
  ${ProfileImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const DisImgTopRight = styled.div`
  position: absolute;
  width: auto;
  top: 8%;
  right: 10%;
  display: block;
    :hover & {
    cursor: pointer;
  }
`;
