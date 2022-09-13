import styled from "styled-components";


export const BigMyImgDivDiv = styled.div`
  width: 309px;
  height: 309px;
  display: flex;
  position: relative;
`;

export const BigMyimg = styled.img`
  width: 309px;
  height: 309px;
  border-radius: 19px;
  ${BigMyImgDivDiv}:hover & {
    filter: brightness(50%);
  }
`;

export const BigImgMyBtmRight = styled.div`
  position: absolute;
  top: 7%;
  left: 7%;
  display: block;
  ${BigMyImgDivDiv}:hover & {
    display: none;
    cursor: pointer;
  }
`;
export const BigMyImgTopLeft = styled.div`
  position: absolute;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: 7%;
  left: 8%;
  color: rgba(40, 202, 124, 1);
  line-height: ${(props) => props.theme.lineHeight.xxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  display: none;
  ${BigMyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const BigMyImgTopRight = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: none;
  ${BigMyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const BigMyImgBtmLeft = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;
  display: none;
  ${BigMyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const BigMyImgBtmLeftDiv = styled.div`
width: auto;
display: flex;
flex-direction: row;
`;

export const BigMyImgBtmLeftspan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  color: rgba(40, 202, 124, 1);
  margin-left: 1px;
  margin-top: 6px;
`;


export const BigMyImgBtmRight = styled.div`
  position: absolute;
  bottom: 5%;
  right: 6%;
  display: none;
  ${BigMyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const BigImgNotSlideSpan = styled.span`
  color: #FFFFFF;
  line-height: ${(props) => props.theme.lineHeight.xxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxl};
`;

export const DisBigMyImgTopRight = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: block;
  :hover & {
    cursor: pointer;
  }
`;
