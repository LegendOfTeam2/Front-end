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

// Assets
import {
  SearchContainer,
  BackgroundCover,
  SearchBox,
  SearchNaviContainer,
  SearchNaviIconBox,
  SearchNaviTitle,
  SearchNaviGroup,
  SearchNavi,
  SearchNaviVertical,
  SearchInfo,
  SearchInfoBox,
  SearchInfoNickname,
  SearchInfoText,
  SearchDataContainer,
  SearchNoDataContainer,
  SearchNoDataInfo,
  SeatchNoDataInfoBox,
  SearchNoDataInfoNickname,
  SearchNoDataInfoText,
  SearchNoDataNotice,
  SearchNoDataNoticeBox,
  SearchNoDataNoticeText,
  SearchNoDataLogo,
  SearchNoDataLogoImg,
} from '../assets/styles/pages/Search.styled';
import { ErrorLogo } from '../assets/images/image';

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
