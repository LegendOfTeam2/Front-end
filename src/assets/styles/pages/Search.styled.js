import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BackgroundCover = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: -1;
`;
export const SearchBox = styled.div`
  width: 1024px;
  height: auto;
  margin-top: 246px;
  z-index: -1;
  position: absolute;
`;
export const SearchNaviContainer = styled.div`
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #e7e7e7;
  position: relative;
`;
export const SearchNaviIconBox = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  left: 37px;
  transform: translateY(-50%);
  .icon {
    width: 35px;
    height: 35px;
    color: rgba(40, 202, 124, 1);
  }
  &:hover {
    cursor: pointer;
  }
`;
export const SearchNaviTitle = styled.span`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  left: 450px;
  transform: translateY(-50%);
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
`;
export const SearchNaviGroup = styled.div`
  width: auto;
  height: 100%;
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  color: #b4b4b4;
`;
export const SearchNavi = styled.div`
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  padding: 0 27px;
  &:hover {
    cursor: pointer;
  }
`;
export const SearchNaviSelect = styled.div`
  color: #28ca7c;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  padding: 0 27px;
  &:hover {
    cursor: pointer;
  }
`;
export const SearchNaviVertical = styled.div``;
export const SearchInfo = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
export const SearchInfoBox = styled.div`
  width: auto;
  height: auto;
  left: 30px;
  padding: 54px 0;
  position: absolute;
`;
export const SearchInfoNickname = styled.span`
  color: #28ca7c;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.xl};
`;
export const SearchInfoText = styled.span`
  color: #b4b4b4;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.xl};
`;
export const SearchDataContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 138px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
  padding-left: 25px;
`;
export const SearchNoDataContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 138px;
  display: flex;
  gap: 17px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const SearchNoDataInfo = styled.div`
  width: auto;
  height: auto;
  background-color: rgba(222, 27, 74, 0.1);
  border-radius: 8px;
`;
export const SeatchNoDataInfoBox = styled.div`
  width: auto;
  height: auto;
  padding: 18px 24px;
`;
export const SearchNoDataInfoNickname = styled.span`
  color: #de1b4a;
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const SearchNoDataInfoText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const SearchNoDataNotice = styled.div`
  width: auto;
  height: auto;
  background-color: #ffffff;
  border-radius: 8px;
`;
export const SearchNoDataNoticeBox = styled.div`
  padding: 18px 24px;
`;
export const SearchNoDataNoticeText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #b4b4b4;
`;
export const SearchNoDataLogo = styled.div`
  margin-top: 50px;
  width: auto;
  height: auto;
`;
export const SearchNoDataLogoImg = styled.img`
  width: 250px;
  height: auto;
`;
