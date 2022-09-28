import styled from 'styled-components';

export const ListModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const XboxDiv = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 20px;
  top: 15px;
  :hover {
    cursor: pointer;
  }
`;

export const ListModalTopDiv = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 37px;
`;

export const ListModalTitleSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: rgba(255, 255, 255, 1);
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.base};
    font-weight: ${(props) => props.theme.fontWeight.Medium};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const ListModalNicknameSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: rgba(180, 180, 180, 1);
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const ListModalImgDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 31px;
`;

export const ListModalImg = styled.img`
  width: 247px;
  height: 247px;
  margin-left: auto;
  margin-right: auto;
  @media ${(props) => props.theme.device.desktopL} {
    width: 147px;
    height: 147px;
  }
`;

export const ListModalMidDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListModalMidDivDiv = styled.div`
  width: 120px;
  height: auto;
  padding-bottom: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #28ca72;
  @media ${(props) => props.theme.device.desktopL} {
    width: 70px;
  }
`;

export const ListModalMidDivSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: rgba(255, 255, 255, 1);
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.base};
    font-weight: ${(props) => props.theme.fontWeight.Medium};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const ListModalLyrics = styled.div`
  width: 228px;
  height: 164px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  @media ${(props) => props.theme.device.desktopL} {
    width: 228px;
    height: 104px;
  }
`;

export const ListModalLyricsSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  white-space: pre-wrap;
  word-break: break-all;
  overflow: auto;
  color: rgba(255, 255, 255, 1);
  @media ${(props) => props.theme.device.desktopL} {
    line-height: ${(props) => props.theme.lineHeight.xl};
    font-weight: ${(props) => props.theme.fontWeight.Medium};
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListModalProfileDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 130px;
  @media ${(props) => props.theme.device.desktopL} {
    margin-bottom: 30px;
  }
`;

export const ListModalProfileDivDiv = styled.div`
  width: 553px;
  height: auto;
  padding: 18px;
  border: 1px solid #28ca72;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.desktopL} {
    width: 453px;
  }
`;

export const ListModalProfileImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  @media ${(props) => props.theme.device.desktopL} {
    width: 44px;
  height: 44px;
  }
`;

export const ListModalProfileNickname = styled.span`
  width: 80px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  overflow: hidden;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  margin-left: 30px;
`;

export const ListModalProfilePosition = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-left: 40px;
`;

export const ListModalProfilePositionLeft = styled.div`
  width: 44px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #28ca72;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca72;
`;

export const ListModalProfilePositionrRight = styled.div`
  width: 56px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #28ca72;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca72;

`;

export const ListModalProfileDetail = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  @media ${(props) => props.theme.device.desktopL} {
    flex-direction: row;
    margin-left: 0;
  }
`;

export const ListModalProfileDetailTop = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.sm};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  z-index: 4px;
  :hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    padding-bottom: 0;
    margin-left: 120px;
    font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  }
`;

export const ListModalProfileDetailBtm = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #28ca72;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.sm};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  margin-top: 18px;
  @media ${(props) => props.theme.device.desktopL} {
    margin-top: 0px;
    margin-left: 10px;
    font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  }
`;

export const ListModalBtnDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 63px;
`;

export const ListModalBtnLeft = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ListModalBtnSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca72;
`;

export const ListModalBtnRight = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  z-index: 4px;
  &:hover {
    cursor: pointer;
  }
`;
