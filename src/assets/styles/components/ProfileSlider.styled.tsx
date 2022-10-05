import styled from 'styled-components';

export const ProfileContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 80px;
  @media ${(props) => props.theme.device.desktopL} {
    margin-bottom: 20px;
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  .center {
    /* center 모드일때 center 외 속성에게 사용 */
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(0.99);
    width: 100%;
  }
`;

export const ProfileImgDiv = styled.div`
  width: 856px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 26px;
  margin-top: 23px;
`;

export const ProfileTextNew = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

export const ProfileTextSinger = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-top: 3px;
`;

export const ProfileTextMake = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.base};
  margin-top: 2px;
  color: rgba(204, 204, 204, 1);
  &:hover {
    cursor: pointer;
  }
`;

export const ProfileTextSingMakeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 33px;
  gap: 40px;
`;

export const ProfileArrowDiv = styled.div`
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

export const ArowLeft = styled.div`
  display: flex;
  position: absolute;
  left: -10px;
  top: 140px;
  &:hover {
    cursor: pointer;
  }
`;
export const ArowRight = styled.div`
  display: flex;
  position: absolute;
  right: -10px;
  bottom: 49px;
  &:hover {
    cursor: pointer;
  }
`;
