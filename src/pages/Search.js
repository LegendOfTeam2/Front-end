// React
import { Fragment, useEffect, useState } from 'react';

// Zustand
import useSearchStore from '../zustand/search';
import useLikeStore from '../zustand/like';
import usePostStore from '../zustand/post';

// Packages
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

// Utils
import { getCookie } from '../utils/cookie';

// Components
import Header from '../components/Header';
import Post from '../components/Post';
import HotArtistBig from '../components/HotArtistBig';

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
  SearchNaviSelect,
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
  const keyword = useSearchStore((state) => state.keyword);
  const searchKeyword = useSearchStore((state) => state.searchKeyword);
  const singerSearchIsLoaded = useSearchStore(
    (state) => state.singerSearchIsLoaded
  );
  const makerSearchIsLoaded = useSearchStore(
    (state) => state.makerSearchIsLoaded
  );
  const memberSearchIsLoaded = useSearchStore(
    (state) => state.memberSearchIsLoaded
  );
  const singerSearchList = useSearchStore((state) => state.singerSearchList);
  const makerSearchList = useSearchStore((state) => state.makerSearchList);
  const memberSearchList = useSearchStore((state) => state.memberSearchList);

  const getSingerLikePost = useLikeStore((state) => state.getSingerLikePost);
  const getMakerLikePost = useLikeStore((state) => state.getMakerLikePost);
  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );
  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);

  const artistIsFollowIsLoaded = usePostStore(
    (state) => state.artistIsFollowIsLoaded
  );
  const artistIsFollow = usePostStore((state) => state.artistIsFollow);
  const getFollowerList = usePostStore((state) => state.getFollowerList);

  const [category, setCategory] = useState('Singer');

  const navigate = useNavigate();

  const onHandleSearchCategory = (category) => {
    switch (category) {
      case 'Singer': {
        setCategory('Singer');
        break;
      }
      case 'Maker': {
        setCategory('Maker');
        break;
      }
      case 'Member': {
        setCategory('Member');
        break;
      }
      default: {
        break;
      }
    }
  };

  useEffect(() => {
    if (keyword !== '') {
      if (getCookie('authorization') !== undefined) {
        getSingerLikePost().then((res) => {
          if (res.success) {
            getMakerLikePost().then((res) => {
              if (res.success) {
                searchKeyword(keyword, 'Singer');
                searchKeyword(keyword, 'Maker');
              }
            });
          }
        });
        getFollowerList().then((res) => {
          if (res.success) {
            searchKeyword(keyword, 'Member');
          }
        });
      } else {
        searchKeyword(keyword, 'Singer');
        searchKeyword(keyword, 'Maker');
        searchKeyword(keyword, 'Member');
      }
    } else {
      const keyword = window.sessionStorage.getItem('keyword');
      if (getCookie('authorization') !== undefined) {
        getSingerLikePost().then((res) => {
          if (res.success) {
            getMakerLikePost().then((res) => {
              if (res.success) {
                searchKeyword(keyword, 'Singer');
                searchKeyword(keyword, 'Maker');
              }
            });
          }
        });
        getFollowerList().then((res) => {
          if (res.success) {
            searchKeyword(keyword, 'Member');
          }
        });
      } else {
        searchKeyword(keyword, 'Singer');
        searchKeyword(keyword, 'Maker');
        searchKeyword(keyword, 'Member');
      }
    }
  }, [keyword]);

  return (
    <SearchContainer>
      <BackgroundCover />
      <Header />
      <SearchBox>
        <SearchNaviContainer>
          <SearchNaviIconBox onClick={() => navigate(-1)}>
            <MdOutlineArrowBackIosNew className='icon' />
          </SearchNaviIconBox>
          <SearchNaviTitle>검색 결과</SearchNaviTitle>
          <SearchNaviGroup>
            {
              {
                Singer: (
                  <Fragment>
                    <SearchNaviSelect
                      onClick={() => onHandleSearchCategory('Singer')}
                    >
                      싱어({singerSearchIsLoaded ? singerSearchList.length : 0})
                    </SearchNaviSelect>
                    <SearchNaviVertical>|</SearchNaviVertical>
                    <SearchNavi onClick={() => onHandleSearchCategory('Maker')}>
                      메이커({makerSearchIsLoaded ? makerSearchList.length : 0})
                    </SearchNavi>
                    <SearchNaviVertical>|</SearchNaviVertical>
                    <SearchNavi
                      onClick={() => onHandleSearchCategory('Member')}
                    >
                      아티스트(
                      {memberSearchIsLoaded ? memberSearchList.length : 0})
                    </SearchNavi>
                  </Fragment>
                ),
                Maker: (
                  <Fragment>
                    <SearchNavi
                      onClick={() => onHandleSearchCategory('Singer')}
                    >
                      싱어({singerSearchIsLoaded ? singerSearchList.length : 0})
                    </SearchNavi>
                    <SearchNaviVertical>|</SearchNaviVertical>
                    <SearchNaviSelect
                      onClick={() => onHandleSearchCategory('Maker')}
                    >
                      메이커({makerSearchIsLoaded ? makerSearchList.length : 0})
                    </SearchNaviSelect>
                    <SearchNaviVertical>|</SearchNaviVertical>
                    <SearchNavi
                      onClick={() => onHandleSearchCategory('Member')}
                    >
                      아티스트(
                      {memberSearchIsLoaded ? memberSearchList.length : 0})
                    </SearchNavi>
                  </Fragment>
                ),
                Member: (
                  <Fragment>
                    <SearchNavi
                      onClick={() => onHandleSearchCategory('Singer')}
                    >
                      싱어({singerSearchIsLoaded ? singerSearchList.length : 0})
                    </SearchNavi>
                    <SearchNaviVertical>|</SearchNaviVertical>
                    <SearchNavi onClick={() => onHandleSearchCategory('Maker')}>
                      메이커({makerSearchIsLoaded ? makerSearchList.length : 0})
                    </SearchNavi>
                    <SearchNaviVertical>|</SearchNaviVertical>
                    <SearchNaviSelect
                      onClick={() => onHandleSearchCategory('Member')}
                    >
                      아티스트(
                      {memberSearchIsLoaded ? memberSearchList.length : 0})
                    </SearchNaviSelect>
                  </Fragment>
                ),
              }[category]
            }
            {/* {category === 'Singer' ? (
              <Fragment>
                <SearchNaviSelect
                  onClick={() => onHandleSearchCategory('Singer')}
                >
                  싱어({singerSearchIsLoaded ? singerSearchList.length : 0})
                </SearchNaviSelect>
                <SearchNaviVertical>|</SearchNaviVertical>
                <SearchNavi onClick={() => onHandleSearchCategory('Maker')}>
                  메이커({makerSearchIsLoaded ? makerSearchList.length : 0})
                </SearchNavi>
              </Fragment>
            ) : (
              <Fragment>
                <SearchNavi onClick={() => onHandleSearchCategory('Singer')}>
                  싱어({singerSearchIsLoaded ? singerSearchList.length : 0})
                </SearchNavi>
                <SearchNaviVertical>|</SearchNaviVertical>
                <SearchNaviSelect
                  onClick={() => onHandleSearchCategory('Maker')}
                >
                  메이커({makerSearchIsLoaded ? makerSearchList.length : 0})
                </SearchNaviSelect>
              </Fragment>
            )} */}
          </SearchNaviGroup>
        </SearchNaviContainer>
        <SearchInfo>
          <SearchInfoBox>
            {
              {
                Singer:
                  singerSearchList.length !== 0 ? (
                    <Fragment>
                      <SearchInfoNickname>
                        {keyword
                          ? keyword
                          : window.sessionStorage.getItem('keyword')}
                      </SearchInfoNickname>
                      <SearchInfoText>에 대한 검색 결과</SearchInfoText>
                    </Fragment>
                  ) : (
                    <Fragment />
                  ),
                Maker:
                  makerSearchList.length !== 0 ? (
                    <Fragment>
                      <SearchInfoNickname>
                        {keyword
                          ? keyword
                          : window.sessionStorage.getItem('keyword')}
                      </SearchInfoNickname>
                      <SearchInfoText>에 대한 검색 결과</SearchInfoText>
                    </Fragment>
                  ) : (
                    <Fragment />
                  ),
                Member:
                  memberSearchList.length !== 0 ? (
                    <Fragment>
                      <SearchInfoNickname>
                        {keyword
                          ? keyword
                          : window.sessionStorage.getItem('keyword')}
                      </SearchInfoNickname>
                      <SearchInfoText>에 대한 검색 결과</SearchInfoText>
                    </Fragment>
                  ) : (
                    <Fragment />
                  ),
              }[category]
            }
            {/* {category === 'Singer' ? (
              singerSearchList.length !== 0 ? (
                <Fragment>
                  <SearchInfoNickname>
                    {keyword
                      ? keyword
                      : window.sessionStorage.getItem('keyword')}
                  </SearchInfoNickname>
                  <SearchInfoText>에 대한 검색 결과</SearchInfoText>
                </Fragment>
              ) : (
                <Fragment />
              )
            ) : makerSearchList.length !== 0 ? (
              <Fragment>
                <SearchInfoNickname>
                  {keyword ? keyword : window.sessionStorage.getItem('keyword')}
                </SearchInfoNickname>
                <SearchInfoText>에 대한 검색 결과</SearchInfoText>
              </Fragment>
            ) : (
              <Fragment />
            )} */}
          </SearchInfoBox>
        </SearchInfo>
        {
          {
            Singer:
              getCookie('authorization') !== undefined ? (
                singerIsLikeIsLoaded ? (
                  singerSearchIsLoaded ? (
                    singerSearchList.length !== 0 ? (
                      <SearchDataContainer>
                        {singerSearchList.map((singer) => {
                          if (
                            [...singerIsLike, ...makerIsLike].indexOf(
                              singer.postId
                            ) > -1
                          ) {
                            return (
                              <Post
                                key={singer.postId}
                                postId={singer.postId}
                                likeCount={singer.makerlikeCnt}
                                imageUrl={singer.imageUrl}
                                mediaUrl={singer.mediaUrl}
                                nickname={singer.nickname}
                                collaborate={singer.collaborate}
                                title={singer.title}
                                position={'Singer'}
                                likeState={true}
                              />
                            );
                          } else {
                            return (
                              <Post
                                key={singer.postId}
                                postId={singer.postId}
                                likeCount={singer.makerlikeCnt}
                                imageUrl={singer.imageUrl}
                                mediaUrl={singer.mediaUrl}
                                nickname={singer.nickname}
                                collaborate={singer.collaborate}
                                title={singer.title}
                                position={'Singer'}
                                likeState={false}
                              />
                            );
                          }
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
                              한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                              보세요.
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
                    <Fragment />
                  )
                ) : (
                  <Fragment />
                )
              ) : singerSearchIsLoaded ? (
                singerSearchList.length !== 0 ? (
                  <SearchDataContainer>
                    {singerSearchList.map((singer) => {
                      return (
                        <Post
                          key={singer.postId}
                          postId={singer.postId}
                          likeCount={singer.makerlikeCnt}
                          imageUrl={singer.imageUrl}
                          mediaUrl={singer.mediaUrl}
                          nickname={singer.nickname}
                          collaborate={singer.collaborate}
                          title={singer.title}
                          position={'Singer'}
                          likeState={false}
                        />
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
                          한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                          보세요.
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
                <Fragment />
              ),
            Maker:
              getCookie('authorization') !== undefined ? (
                singerIsLikeIsLoaded ? (
                  makerSearchIsLoaded ? (
                    makerSearchList.length !== 0 ? (
                      <SearchDataContainer>
                        {makerSearchList.map((maker) => {
                          if (
                            [...singerIsLike, ...makerIsLike].indexOf(
                              maker.postId
                            ) > -1
                          ) {
                            return (
                              <Post
                                key={maker.postId}
                                postId={maker.postId}
                                likeCount={maker.makerlikeCnt}
                                imageUrl={maker.imageUrl}
                                mediaUrl={maker.mediaUrl}
                                nickname={maker.nickname}
                                collaborate={maker.collaborate}
                                title={maker.title}
                                position={'Maker'}
                                likeState={true}
                              />
                            );
                          } else {
                            return (
                              <Post
                                key={maker.postId}
                                postId={maker.postId}
                                likeCount={maker.makerlikeCnt}
                                imageUrl={maker.imageUrl}
                                mediaUrl={maker.mediaUrl}
                                nickname={maker.nickname}
                                collaborate={maker.collaborate}
                                title={maker.title}
                                position={'Maker'}
                                likeState={false}
                              />
                            );
                          }
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
                              한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                              보세요.
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
                    <Fragment />
                  )
                ) : (
                  <Fragment />
                )
              ) : makerSearchIsLoaded ? (
                makerSearchList.length !== 0 ? (
                  <SearchDataContainer>
                    {makerSearchList.map((maker) => {
                      return (
                        <Post
                          key={maker.postId}
                          postId={maker.postId}
                          likeCount={maker.makerlikeCnt}
                          imageUrl={maker.imageUrl}
                          mediaUrl={maker.mediaUrl}
                          nickname={maker.nickname}
                          collaborate={maker.collaborate}
                          title={maker.title}
                          position={'Maker'}
                        />
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
                          한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                          보세요.
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
                <Fragment />
              ),
            Member:
              getCookie('authorization') !== undefined ? (
                artistIsFollowIsLoaded ? (
                  memberSearchIsLoaded ? (
                    memberSearchList.length !== 0 ? (
                      <SearchDataContainer>
                        {memberSearchList.map((member, idx) => {
                          if (artistIsFollow.indexOf(member.nickname) < 0) {
                            return (
                              <HotArtistBig
                                key={idx}
                                nickname={member.nickname}
                                imageUrl={member.imageUrl}
                                follower={member.follower
                                  .toString()
                                  .replace(
                                    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                    ','
                                  )}
                                isFollow={false}
                              />
                            );
                          } else {
                            return (
                              <HotArtistBig
                                key={idx}
                                nickname={member.nickname}
                                imageUrl={member.imageUrl}
                                follower={member.follower
                                  .toString()
                                  .replace(
                                    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                    ','
                                  )}
                                isFollow={true}
                              />
                            );
                          }
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
                              한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                              보세요.
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
                    <Fragment />
                  )
                ) : (
                  <Fragment />
                )
              ) : memberSearchIsLoaded ? (
                memberSearchList.length !== 0 ? (
                  <SearchDataContainer>
                    {memberSearchList.map((member, idx) => {
                      return (
                        <HotArtistBig
                          key={idx}
                          nickname={member.nickname}
                          imageUrl={member.imageUrl}
                          follower={member.follower
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                        />
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
                          한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                          보세요.
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
                <Fragment />
              ),
          }[category]
        }
        {/* {category === 'Singer' ? (
          getCookie('authorization') !== undefined ? (
            singerIsLikeIsLoaded ? (
              singerSearchIsLoaded ? (
                singerSearchList.length !== 0 ? (
                  <SearchDataContainer>
                    {singerSearchList.map((singer) => {
                      if (
                        [...singerIsLike, ...makerIsLike].indexOf(
                          singer.postId
                        ) > -1
                      ) {
                        return (
                          <Post
                            key={singer.postId}
                            postId={singer.postId}
                            likeCount={singer.makerlikeCnt}
                            imageUrl={singer.imageUrl}
                            mediaUrl={singer.mediaUrl}
                            nickname={singer.nickname}
                            collaborate={singer.collaborate}
                            title={singer.title}
                            position={'Singer'}
                            likeState={true}
                          />
                        );
                      } else {
                        return (
                          <Post
                            key={singer.postId}
                            postId={singer.postId}
                            likeCount={singer.makerlikeCnt}
                            imageUrl={singer.imageUrl}
                            mediaUrl={singer.mediaUrl}
                            nickname={singer.nickname}
                            collaborate={singer.collaborate}
                            title={singer.title}
                            position={'Singer'}
                            likeState={false}
                          />
                        );
                      }
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
                          한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                          보세요.
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
                <Fragment />
              )
            ) : (
              <Fragment />
            )
          ) : singerSearchIsLoaded ? (
            singerSearchList.length !== 0 ? (
              <SearchDataContainer>
                {singerSearchList.map((singer) => {
                  return (
                    <Post
                      key={singer.postId}
                      postId={singer.postId}
                      likeCount={singer.makerlikeCnt}
                      imageUrl={singer.imageUrl}
                      mediaUrl={singer.mediaUrl}
                      nickname={singer.nickname}
                      collaborate={singer.collaborate}
                      title={singer.title}
                      position={'Singer'}
                      likeState={false}
                    />
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
            <Fragment />
          )
        ) : getCookie('authorization') !== undefined ? (
          singerIsLikeIsLoaded ? (
            makerSearchIsLoaded ? (
              makerSearchList.length !== 0 ? (
                <SearchDataContainer>
                  {makerSearchList.map((maker) => {
                    if (
                      [...singerIsLike, ...makerIsLike].indexOf(maker.postId) >
                      -1
                    ) {
                      return (
                        <Post
                          key={maker.postId}
                          postId={maker.postId}
                          likeCount={maker.makerlikeCnt}
                          imageUrl={maker.imageUrl}
                          mediaUrl={maker.mediaUrl}
                          nickname={maker.nickname}
                          collaborate={maker.collaborate}
                          title={maker.title}
                          position={'Maker'}
                          likeState={true}
                        />
                      );
                    } else {
                      return (
                        <Post
                          key={maker.postId}
                          postId={maker.postId}
                          likeCount={maker.makerlikeCnt}
                          imageUrl={maker.imageUrl}
                          mediaUrl={maker.mediaUrl}
                          nickname={maker.nickname}
                          collaborate={maker.collaborate}
                          title={maker.title}
                          position={'Maker'}
                          likeState={false}
                        />
                      );
                    }
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
                        한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                        보세요.
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
              <Fragment />
            )
          ) : (
            <Fragment />
          )
        ) : makerSearchIsLoaded ? (
          makerSearchList.length !== 0 ? (
            <SearchDataContainer>
              {makerSearchList.map((maker) => {
                return (
                  <Post
                    key={maker.postId}
                    postId={maker.postId}
                    likeCount={maker.makerlikeCnt}
                    imageUrl={maker.imageUrl}
                    mediaUrl={maker.mediaUrl}
                    nickname={maker.nickname}
                    collaborate={maker.collaborate}
                    title={maker.title}
                    position={'Maker'}
                  />
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
          <Fragment />
        )} */}
      </SearchBox>
    </SearchContainer>
  );
};

export default Search;
