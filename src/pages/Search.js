// React
import { Fragment, useEffect, useState, useRef } from 'react';

// Zustand
import useSearchStore from '../zustand/search';

// Packages
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import PostBig from '../components/PostBig';
import { useNavigate } from 'react-router-dom';

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
  const [category, setCategory] = useState('Singer');
  const singerNaviRef = useRef();
  const makerNaviRef = useRef();
  const navigate = useNavigate();

  const keyword = useSearchStore((state) => state.keyword);
  const searchKeyword = useSearchStore((state) => state.searchKeyword);
  const singerSearchIsLoaded = useSearchStore(
    (state) => state.singerSearchIsLoaded
  );
  const makerSearchIsLoaded = useSearchStore(
    (state) => state.makerSearchIsLoaded
  );
  const singerSearchList = useSearchStore((state) => state.singerSearchList);
  const makerSearchList = useSearchStore((state) => state.makerSearchList);

  const onHandleSearchCategory = (category) => {
    switch (category) {
      case 'Singer': {
        setCategory('Singer');
        singerNaviRef.current.style.color = 'rgba(40, 202, 124, 1)';
        makerNaviRef.current.style.color = '#b4b4b4';
        break;
      }
      case 'Maker': {
        setCategory('Maker');
        makerNaviRef.current.style.color = 'rgba(40, 202, 124, 1)';
        singerNaviRef.current.style.color = '#b4b4b4';
        break;
      }
      default: {
        break;
      }
    }
  };

  useEffect(() => {
    if (keyword !== '') {
      searchKeyword(keyword, 'Singer');
      searchKeyword(keyword, 'Maker');
    }
  }, [keyword]);

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
            <SearchNavi
              className='search'
              style={{ color: 'rgba(40, 202, 124, 1)' }}
              onClick={() => onHandleSearchCategory('Singer')}
              ref={singerNaviRef}
            >
              싱어({singerSearchIsLoaded ? singerSearchList.length : 0})
            </SearchNavi>
            <SearchNaviVertical>|</SearchNaviVertical>
            <SearchNavi
              className='maker'
              onClick={() => onHandleSearchCategory('Maker')}
              ref={makerNaviRef}
            >
              메이커({makerSearchIsLoaded ? makerSearchList.length : 0})
            </SearchNavi>
          </SearchNaviGroup>
        </SearchNaviContainer>
        <SearchInfo>
          <SearchInfoBox>
            {category === 'Singer' ? (
              singerSearchList.length !== 0 ? (
                <Fragment>
                  <SearchInfoNickname>{keyword}</SearchInfoNickname>
                  <SearchInfoText>에 대한 검색 결과</SearchInfoText>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )
            ) : makerSearchList.length !== 0 ? (
              <Fragment>
                <SearchInfoNickname>{keyword}</SearchInfoNickname>
                <SearchInfoText>에 대한 검색 결과</SearchInfoText>
              </Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </SearchInfoBox>
        </SearchInfo>
        {category === 'Singer' ? (
          singerSearchIsLoaded ? (
            singerSearchList.length !== 0 ? (
              <SearchDataContainer>
                {singerSearchList.map((singer) => {
                  return (
                    <PostBig
                      key={singer.postId}
                      postId={singer.postId}
                      likeCount={singer.makerlikeCnt}
                      imageUrl={singer.imageUrl}
                      mediaUrl={singer.mediaUrl}
                      nickname={singer.nickname}
                      collaborate={singer.collaborate}
                      title={singer.title}
                      position={'Singer'}
                    ></PostBig>
                  );
                })}
              </SearchDataContainer>
            ) : (
              <SearchNoDataContainer>
                <SearchNoDataInfo>
                  <SeatchNoDataInfoBox>
                    <SearchNoDataInfoNickname>
                      {keyword}
                    </SearchNoDataInfoNickname>
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
            )
          ) : (
            <Fragment></Fragment>
          )
        ) : makerSearchIsLoaded ? (
          makerSearchList.length !== 0 ? (
            <SearchDataContainer>
              {makerSearchList.map((maker) => {
                return (
                  <PostBig
                    key={maker.postId}
                    postId={maker.postId}
                    likeCount={maker.makerlikeCnt}
                    imageUrl={maker.imageUrl}
                    mediaUrl={maker.mediaUrl}
                    nickname={maker.nickname}
                    collaborate={maker.collaborate}
                    title={maker.title}
                    position={'Maker'}
                  ></PostBig>
                );
              })}
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
          )
        ) : (
          <Fragment></Fragment>
        )}
      </SearchBox>
    </SearchContainer>
  );
};

export default Search;
