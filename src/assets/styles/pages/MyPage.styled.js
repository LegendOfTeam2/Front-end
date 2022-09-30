import styled from 'styled-components';

export const MyContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 151.5px;
  z-index: -1;
`;
export const MyContainer = styled.div`
  width: 1016px;
  height: auto;
  margin-top: 81px;
  display: flex;
  flex-direction: column;
  .center {
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(0.99);
  }
`;
export const NaviContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
`;
export const NaviIconBox = styled.div`
  width: auto;
  height: auto;
  color: #cecece;
  cursor: pointer;
  .icon {
    width: 36px;
    height: 36px;
  }
`;
export const MyProfileContainer = styled.div`
  width: 1016px;
  height: auto;
  display: flex;
  border: 1px solid #28ca82;
`;
export const Myleft = styled.div`
  width: 325px;
  height: auto;
  display: flex;
  margin-top: 30px;
  margin-bottom: 43px;
`;
export const MyRight = styled.div`
  width: 699px;
  height: auto;
  display: flex;
  margin-top: 30px;
  margin-bottom: 43px;
  padding-left: 56px;
  padding-right: 27px;
`;
export const MyleftDiv = styled.div`
  width: 100%;
  display: flex;
  border-radius: 50%;
`;
export const MyleftDivImg = styled.img`
  width: 240px;
  height: 240px;
  margin-left: 54px;
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
`;
export const MyRightTopDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
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
  justify-content: space-between;
  margin-left: 0;
  margin-bottom: 22px;
`;
export const MyRightTopButDivNotMember = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
export const MyRightTopDivSpanDiv = styled.div`
  width: 200px;
`;
export const MyRightTopDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;
export const MyBadgeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const MyRightTopBtmDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 43px;
`;
export const MyRightTopBtmDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;
export const MyTagBox = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: 100%;
`;
export const MyTagBoxTextSlide = styled.div`
  width: 100%;
  height: 68px;
`;
export const MyTagBoxTextSlideDiv = styled.div`
  width: auto;
  margin-top: 22px;
  margin-bottom: 22px;
`;
export const MyTagBoxTextSpanSlide = styled.span`
  width: auto;
  height: auto;
  padding: 9px;
  margin-right: 10px;
  border: 1px solid #28ca72;
  color: #28ca72;
  border-radius: 24px;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  &:hover {
    cursor: pointer;
    color: black;
    border: 1px solid black;
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
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  margin-top: 28px;
`;
export const MyIntroContainer = styled.div`
  width: 100%;
  height: 195px;
  border: 1px solid #28ca72;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 31px;
`;
export const MyIntroBox = styled.div`
  width: auto;
  height: auto;
`;
export const MyIntroText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const MyMidTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const MyMidTextDivDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MyMidTextDivDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca72;
`;
export const MyTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 45px;
`;
export const MyPostContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 62px;
  border: 1px solid #28ca72;
  margin-bottom: 220px;
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
  padding-top: 24px;
  padding-bottom: 55px;
  border-top: 4px solid transparent;
  color: rgba(180, 180, 180, 1);
  &:hover {
    cursor: pointer;
  }
`;
export const MyBtmTextDivDivSelect = styled.div`
  padding-top: 24px;
  padding-bottom: 55px;
  border-top: 4px solid #28ca72;
  color: #28ca72;
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
  gap: 32px;
  padding-left: 55px;
  padding-bottom: 60px;
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
