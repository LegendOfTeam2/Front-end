// React
import { Fragment } from 'react';

// Zustand
import useSearchStore from '../zustand/search';

// Packages
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import PostBig from '../components/PostBig';
import { useParams, useNavigate } from 'react-router-dom';

// Components
import Header from '../components/Header';

// Essets
import { ErrorLogo } from '../assets/images/image';

import styled from 'styled-components';

const Search = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();

  const success = useSearchStore((state) => state.success);
  return (
    <SearchContainer>
      <BackgroundCover />
      <Header></Header>
      <SearchBox>
        <SearchNaviContainer>
          <SearchNaviIconBox onClick={() => navigate(-1)}>
            <MdOutlineArrowBackIosNew className='icon' />
          </SearchNaviIconBox>
          <SearchNaviTitle>검색 결과</SearchNaviTitle>
          <SearchNaviGroup>
            <SearchNavi>싱어</SearchNavi>
            <SearchNaviVertical>|</SearchNaviVertical>
            <SearchNavi>메이커</SearchNavi>
          </SearchNaviGroup>
        </SearchNaviContainer>
        <SearchInfo>
          {success ? (
            <SearchInfoBox>
              <SearchInfoNickname>{keyword}</SearchInfoNickname>
              <SearchInfoText>에 대한 검색 결과</SearchInfoText>
            </SearchInfoBox>
          ) : (
            <Fragment></Fragment>
          )}
        </SearchInfo>
        {success ? (
          <SearchDataContainer>
            {Array(12)
              .fill('')
              .map(() => (
                <PostBig />
              ))}
          </SearchDataContainer>
        ) : (
          <SearchNoDataContainer>
            <SearchNoDataInfo>
              <SeatchNoDataInfoBox>
                <SearchNoDataInfoNickname>{keyword}</SearchNoDataInfoNickname>
                <SearchNoDataInfoText>
                  에 대한 검색 결과가 없습니다...
                </SearchNoDataInfoText>
              </SeatchNoDataInfoBox>
            </SearchNoDataInfo>
            <SearchNoDataNotice>
              <SearchNoDataNoticeBox>
                <SearchNoDataNoticeText>
                  단어의 철자가 정확한지 확인해 보세요.
                  <br />
                  한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.
                  <br />
                  리드미의 아티스트인지 확인해 보세요.
                </SearchNoDataNoticeText>
              </SearchNoDataNoticeBox>
            </SearchNoDataNotice>
            <SearchNoDataLogo>
              <SearchNoDataLogoImg src={ErrorLogo} />
            </SearchNoDataLogo>
          </SearchNoDataContainer>
        )}
      </SearchBox>
    </SearchContainer>
  );
};

export default Search;

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
  background-color: #eeeceb;
  z-index: -1;
`;
export const SearchBox = styled.div`
  width: 1024px;
  height: auto;
  margin-top: 246px;
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
  left: 90px;
  transform: translateY(-50%);
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
`;
export const SearchNaviGroup = styled.div`
  width: auto;
  height: 100%;
  position: absolute;
  left: 238px;
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
  justify-content: center;
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
