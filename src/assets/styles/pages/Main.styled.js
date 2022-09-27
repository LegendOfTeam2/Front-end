import styled from 'styled-components';

export const MainContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 96.5px;
  z-index: -1;
`;

export const MainContainer = styled.div`
  width: 1920px;
  height: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 260px;
`;

export const MainImgDiv = styled.div`
  width: 100%;
  margin-bottom: 80px;
  box-shadow: inset (-$offset) 0 $blur-radius (-$spread-radius);
  @media ${(props) => props.theme.device.desktopL} {
    margin-bottom: 20px;
  }
`;
export const MainImgDivDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
export const MainImgDivDivDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 23.5%;
  color: rgba(255, 255, 255, 1);
  font-size: ${(props) => props.theme.fontSizes.titleSize};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  @media ${(props) => props.theme.device.desktopL} {
    font-size: ${(props) => props.theme.fontSizes.xxxxl};
    line-height: ${(props) => props.theme.lineHeight.xxxl};
    font-weight: ${(props) => props.theme.fontWeight.Bold};
  }
`;

export const MainImgDivBtmImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media ${(props) => props.theme.device.desktopL} {
    width: 60px;
    height: 60px;
  }
`;

export const MainImgDivBtmImgDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  border-radius: 50%;
  position: absolute;
  bottom: 10%;
  left: 24%;
`;

export const MainImgDivDivBtmDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 23.5%;
  color: rgba(255, 255, 255, 1);
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  @media ${(props) => props.theme.device.desktopL} {
    font-size: ${(props) => props.theme.fontSizes.xxl};
    line-height: ${(props) => props.theme.lineHeight.xxxl};
    font-weight: ${(props) => props.theme.fontWeight.Bold};
  }
`;

export const MainImgDivBtmSpanDiv = styled.div`
  width: auto;
  height: auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const MainImgDivTopSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  color: rgba(255, 255, 255, 1);
  @media ${(props) => props.theme.device.desktopL} {
    font-size: ${(props) => props.theme.fontSizes.xxl};
    line-height: ${(props) => props.theme.lineHeight.xxxl};
    font-weight: ${(props) => props.theme.fontWeight.Medium};
  }
`;

export const MainImgDivBtmSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.sm};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  @media ${(props) => props.theme.device.desktopL} {
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: ${(props) => props.theme.lineHeight.sm};
    font-weight: ${(props) => props.theme.fontWeight.Medium};
  }
  color: rgba(255, 255, 255, 1);
`;

export const MainImgDivBtnDiv = styled.div`
  position: absolute;
  bottom: 8%;
  right: 25%;
  &:hover {
    cursor: pointer;
  }
`;
export const MainImgDivImg = styled.div`
  width: 100%;
  height: 472px;
  opacity: 0.5;
  background-size: cover;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  @media ${(props) => props.theme.device.desktopL} {
    height: 372px;
  }
`;
export const BtmProfileImgDiv = styled.div`
  width: 856px;
  height: auto;
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  position: relative;
  @media ${(props) => props.theme.device.desktopL} {
    margin-bottom: 20px;
  }
`;
export const MainArowLeft = styled.div`
  display: flex;
  position: absolute;
  left: -95px;
  top: 110px;
  &:hover {
    cursor: pointer;
  }
`;
export const MainArowRight = styled.div`
  display: flex;
  position: absolute;
  right: -95px;
  bottom: 55px;
  &:hover {
    cursor: pointer;
  }
`;
export const BtmProfileTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
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
  margin-left: 12px;
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

export const MainProfileSliderGroup = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const DisMainPostImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 61px;
`;

export const DisMainPostImgDivDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 26px;
  margin-top: 23px;
`;
export const DisMainPostImgDivNew = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
`;

export const DisMainPostImgDivMakeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 36px;
  gap: 40px;
  margin-top: 3px;
`;

export const DisMainPostImgDivMake = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-top: 3px;
  color: rgba(204, 204, 204, 1);
  &:hover {
    cursor: pointer;
  }
`;
export const DisMainPostImgDivImgDiv = styled.div`
  width: 856px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  @media ${(props) => props.theme.device.desktopL} {
    margin-bottom: 20px;
  }
`;
export const MainHotArtistWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
