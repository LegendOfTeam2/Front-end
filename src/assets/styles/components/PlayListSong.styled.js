import styled from 'styled-components';

export const BtmMapDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 5px 0;
  gap: 24px;
  border-bottom: 0.3px solid rgba(255, 255, 255, 1);
  padding: 12.5px 0;
  position: relative;
`;

export const BtmMapImgDiv = styled.div`
  width: 56px;
  height: 56px;
  position: relative;
`;

export const BtmMapInImgDiv = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: none;
  ${BtmMapImgDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const BtmMapImg = styled.img`
  width: 56px;
  height: 56px;
  ${BtmMapImgDiv}:hover & {
    filter: brightness(20%);
  }
`;

export const BtmMapImgSpan = styled.span`
  width: 181px;
  display: flex;
  align-items: center;
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xs};
`;

export const BtmMapArtistDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 338px;
  top: 30px;
  right: 268px;
  justify-content: space-between;
`;

export const BtmMapArtistSpan = styled.span`
  color: #ffffff;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xs};
  display: flex;
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BtmMapIconDiv = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 46px;
  margin-left: auto;
  margin-right: 5px;
  .leftIcon {
    :hover {
      cursor: pointer;
    }
  }
  .midIcon {
    :hover {
      cursor: pointer;
    }
  }
  .rightIcon {
    :hover {
      cursor: pointer;
    }
  }
`;
