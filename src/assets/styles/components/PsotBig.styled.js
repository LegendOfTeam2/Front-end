import styled from 'styled-components';

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
    filter: brightness(20%);
  }
`;

export const BigImgMyBtmRight = styled.div`
  position: absolute;
  width: 100%;
  top: 7%;
  left: 7%;
  display: flex;
  flex-direction: column;
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

export const BigMyImgTopBtmLeft = styled.div`
  position: absolute;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: 18%;
  left: 8%;
  color: rgba(40, 202, 124, 1);
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
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
  line-height: ${(props) => props.theme.lineHeight.xxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxl};
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
  color: #ffffff;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

export const BigImgNotSlideTitleSpan = styled.span`
  color: #ffffff;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
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
