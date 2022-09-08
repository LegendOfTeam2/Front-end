import styled from "styled-components";

export const MyContainerDiv = styled.div`
  width: 100%;
  background-color: #eeeceb;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 175px;
`;

export const MyContainer = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;
  .center {
    /* center 모드일때 center 외 속성에게 사용 */
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(0.99);
  }
`;
export const MyProfileContainer = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  border-bottom: 1px solid rgba(231, 231, 231, 1);
`;

export const Myleft = styled.div`
  width: 325px;
  height: auto;
  display: flex;
  margin-bottom: 50px;
`;

export const MyRight = styled.div`
  width: 699px;
  height: auto;
  display: flex;
  margin-bottom: 50px;
  padding-left: 46px;
  padding-right: 38px;
`;

export const MyleftDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 50%;
`;

export const MyleftDivImg = styled.img`
  display: flex;
  flex-direction: row-reverse;
  border-radius: 50%;
`;

export const MyRightTopDivCl = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const MyRightTopDivClDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  border-bottom: 2px solid rgba(231, 231, 231, 1);
`;

export const MyRightTopDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: flex-end;
`;

export const MyRightTopIconDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
export const MyRightTopButDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-left: 92px;
`;

export const MyRightTopButDivNotMember = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 92px;
`;

export const MyRightTopDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;

export const MyRightTopBtmDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 54px;
  margin-bottom: 22px;
`;

export const MyRightTopBtmDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Regular}; ;
`;

export const MyTagBox = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: 100%;
  border-bottom: 2px solid rgba(231, 231, 231, 1);
`;

export const MyTagBoxTextSlide = styled.div`
  width: 100%;
  height: 68px;
`;

export const MyTagBoxTextSlideDiv = styled.div`
  width: auto;
  margin-top: 22px;
  margin-bottom: 22px;
  display: ${({ tagSlider }) => (tagSlider ? "block" : "none")}; ;
`;

export const MyTagBoxTextSpanSlide = styled.span`
  width: auto;
  height: auto;
  padding: 9px;
  margin-right: 10px;
  border: 1px solid #000000;
  border-radius: 24px;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  &:hover {
    cursor: pointer;
    background-color: #aaa4a4;
  }
`;

export const MyRightBtmDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const MyRightBtmDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  margin-top: 28px;
`;

export const MyMidTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-bottom: 2px solid rgba(231, 231, 231, 1);
`;

export const MyMidTextDivDiv = styled.div`
  width: 100%;
  height: auto;
  padding-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyMidTextDivDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const MyTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 63px;
  padding-left: 83px;
  padding-right: 83px;
  padding-bottom: 43px;
`;

export const MyBtmTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 61px;
`;

export const MyBtmTextDivDiv = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 4px solid transparent;
  color: rgba(180, 180, 180, 1);
  &:hover {
    cursor: pointer;
  }
`;

export const MyBtmDataDiv = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  margin-top: 28px;
`;

export const MyBtmImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
`;

export const MyBtmImgDivDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  position: relative;
`;

export const ImgMyBtmBtmRight = styled.div`
  position: absolute;
  bottom: 5%;
  right: 7%;
  display: block;
  ${MyBtmImgDivDiv}:hover & {
    display: none;
    cursor: pointer;
  }
`;

export const MyBtmImgTopLeft = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyBtmImgTopTopRight = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const MyBtmImgTopBtmRight = styled.div`
  position: absolute;
  top: 17%;
  right: 9%;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyBtmImgBtmLeft = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyBtmImgBtmRight = styled.div`
  position: absolute;
  bottom: 7%;
  right: 9%;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyBtmimg = styled.img`
  width: 309px;
  height: 309px;
  border-radius: 10px;
  ${MyBtmImgDivDiv}:hover & {
    filter: brightness(50%);
  }
`;
