import styled from "styled-components";

export const MainContainerDiv = styled.div`
  width: 100%;
  background-color: #eeeceb;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 175px;
`;

export const MainContainer = styled.div`
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

export const MainImgDiv = styled.div`
  width: 100%;
  margin-bottom: 26px;
  .slick-list {
    margin-right: -40px;
  }
`;

export const MainImgDivDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const MainImgDivDivDiv = styled.div`
  position: absolute;
  top: 8%;
  left: 4%;
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;

export const MainImgDivBtnDiv = styled.div`
  position: absolute;
  bottom: 8%;
  right: 8%;
`;

export const MainImgDivImg = styled.div`
  width: 856px;
  height: 261px;
  border-radius: 24px;
  opacity: 0.5;
  background-size: cover;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
`;

export const BtmProfileImgDiv = styled.div`
  width: 856px;
  height: auto;
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
`;

export const BtmProfileTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const BtmProfileDivDiv = styled.div`
  width: 167px;
  height: auto;
  border: 1px solid #cccccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const BtmProfileDivDivDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 21px;
  margin-bottom: 10px;
`;

export const BtmTextDivDivDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;
export const BtmTextDivSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const BtmTextDivDivSmDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 21px;
`;
export const BtmTextDivSmSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: rgba(204, 204, 204, 1);
`;

export const Profileimg = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;
`;
export const ProfileImgDivDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 26px;
  margin-top: 23px;
  &:hover {
      cursor: pointer;
    }
`;

export const BtmProfileTextNew = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
`;

export const BtmProfileTextSinger = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-top: 3px;
  &:hover {
      cursor: pointer;
    }
`;

export const BtmProfileTextMake = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-top: 3px;
  color: rgba(204, 204, 204, 1);
  &:hover {
      cursor: pointer;
    }
`;

export const BtmProfileTextSingMakeDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 3px;
`;

export const BtmProfileArrowDiv = styled.div`
  margin-left: auto;
  gap: 30px;
  margin-top: 4px;
  .icon-prev {
    size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
  .icon-next {
    size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MainTagBox = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin-bottom: 120px;
  width: 100%;
`;

export const MainTagBoxText = styled.div`
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MainTagBoxTextSpan = styled.span`
  width: auto;
  height: auto;
  padding: 9px;
  border: 2px solid #000000;
  border-radius: 24px;
  &:hover {
    cursor: pointer;
    background-color: #aaa4a4;
  }
`;
