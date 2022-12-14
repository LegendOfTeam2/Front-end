// React
import { Fragment, useEffect, useRef } from 'react';

// Zustand
import usePostStore from '../zustand/post';
import useLikeStore from '../zustand/like';
import usePlayerStore from '../zustand/player';
import useMemberStore from '../zustand/member';

// Packages
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Utils
import { getCookie } from '../utils/cookie';

// Components
import Header from '../components/Header';
import ProfileSlider from '../components/ProfileSlider';
import HotArtist from '../components/HotArtist';
import PostSmall from '../components/PostSmall';

// Assests
import {
  MainProfileSliderGroup,
  BtmProfileImgDiv,
  BtmProfileTextDiv,
  BtmProfileTextNew,
  MainArowLeft,
  MainArowRight,
  MainContainer,
  MainContainerDiv,
  MainImgDiv,
  MainImgDivBtnDiv,
  MainImgDivDiv,
  MainImgDivDivDiv,
  MainImgDivImg,
  DisMainPostImgDivImgDiv,
  DisMainPostImgDivDiv,
  DisMainPostImgDivNew,
  DisMainPostImgDivMakeDiv,
  DisMainPostImgDivMake,
  DisMainPostImgDiv,
  MainHotArtistWrap,
  MainImgDivDivBtmDiv,
  MainImgDivBtmImgDiv,
  MainImgDivBtmImg,
  MainImgDivBtmSpanDiv,
  MainImgDivTopSpan,
  MainImgDivBtmSpan,
} from '../assets/styles/pages/Main.styled';
import {
  LeftArrow,
  MainBanner,
  MainBannerMini,
  RightArrow,
} from '../assets/images/image';

const Main = () => {
  const getBestSong = usePostStore((state) => state.getBestSong);
  const getRecentMaker = usePostStore((state) => state.getRecentMaker);
  const getRecentSinger = usePostStore((state) => state.getRecentSinger);
  const getBestMaker = usePostStore((state) => state.getBestMaker);
  const getBestSinger = usePostStore((state) => state.getBestSinger);
  const getPowerArtist = usePostStore((state) => state.getPowerArtist);
  const getSingerLikePost = useLikeStore((state) => state.getSingerLikePost);
  const getMakerLikePost = useLikeStore((state) => state.getMakerLikePost);
  const getFollowerList = usePostStore((state) => state.getFollowerList);
  const bestSongIsLoaded = usePostStore((state) => state.bestSongIsLoaded);
  const bestSong = usePostStore((state) => state.bestSong);
  const recentMaker = usePostStore((state) => state.recentMaker);
  const recentSinger = usePostStore((state) => state.recentSinger);
  const bestMaker = usePostStore((state) => state.bestMaker);
  const bestSinger = usePostStore((state) => state.bestSinger);
  const powerArtist = usePostStore((state) => state.powerArtist);
  const artistIsFollow = usePostStore((state) => state.artistIsFollow);
  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const postPlayList = usePlayerStore((state) => state.postPlayList);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const bestMakerIsLoaded = usePostStore((state) => state.bestMakerIsLoaded);
  const bestSingerIsLoaded = usePostStore((state) => state.bestSingerIsLoaded);
  const powerArtistLoaded = usePostStore((state) => state.powerArtistLoaded);
  const random = useMemberStore((state) => state.random);
  const recentMakerIsLoaded = usePostStore(
    (state) => state.recentMakerIsLoaded
  );
  const recentSingerIsLoaded = usePostStore(
    (state) => state.recentSingerIsLoaded
  );
  const artistIsFollowIsLoaded = usePostStore(
    (state) => state.artistIsFollowIsLoaded
  );
  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );
  const makerIsLikeIsLoaded = useLikeStore(
    (state) => state.makerIsLikeIsLoaded
  );
  

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1920px)',
  });

  const navigate = useNavigate();

  const sliderRef = useRef();

  const Btmsettings = {
    className: 'center',
    initialSlide: 2,
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    centerPadding: '-28px',
    draggable: true,
    ref: sliderRef,
  };

  const play = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    addPlayList({
      postId: bestSong[0].postId,
      title: bestSong[0].title,
      nickname: bestSong[0].nickname,
      mediaUrl: bestSong[0].mediaUrl.mediaUrl,
      imageUrl: bestSong[0].imageUrl.imageUrl,
      position: bestSong[0].position,
    });
  };

  const playMember = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    postPlayList({
      postId: bestSong[0].postId,
      title: bestSong[0].title,
      nickname: bestSong[0].nickname,
      mediaUrl: bestSong[0].mediaUrl.mediaUrl,
      imageUrl: bestSong[0].imageUrl.imageUrl,
      position: bestSong[0].position,
    });
  };

  const gotoProfilPage = (nickname) => {
    if (bestSongIsLoaded) {
      navigate(`/mypage/${nickname}`); 
    }
  };

  const goToSinger = (category) => {
    navigate(`/morepage/singer/${category}`);
  };

  const goToMaker = (category) => {
    navigate(`/morepage/maker/${category}`);
  };

  useEffect(() => {
    if (getCookie('authorization') === undefined) {
      getRecentSinger();
      getRecentMaker();
      getBestMaker();
      getBestSinger();
      getPowerArtist();
      getBestSong();
    } else {
      getSingerLikePost().then((res) => {
        getBestSong();
        if (res.success) {
          getRecentSinger();
          getBestSinger();
        }
      });
      getMakerLikePost().then((res) => {
        if (res.success) {
          getRecentMaker();
          getBestMaker();
        }
      });
      getFollowerList().then((res) => {
        if (res.success) {
          getPowerArtist();
        }
      });
    }
  }, []);
  return (
    <Fragment>
      <ToastContainer />
      <Header />
      <MainContainerDiv>
        <MainContainer>
          {bestSongIsLoaded ? (
            <MainImgDiv>
              {bestSong.map((x) => (
                <MainImgDivDiv key={x.postId}>
                  <MainImgDivImg
                    img={
                      x.imageUrl.imageUrl === null
                        ? profileImgArr[random]
                        : x.imageUrl.imageUrl === ''
                        ? profileImgArr[random]
                        : x.imageUrl.imageUrl
                    }
                  ></MainImgDivImg>
                  <MainImgDivDivDiv>????????? ???</MainImgDivDivDiv>
                  <MainImgDivDivBtmDiv>
                    ??????????????? ?????? ?????? ????????? ???????????? ??????!
                  </MainImgDivDivBtmDiv>
                  <MainImgDivBtmImgDiv onClick= {() => gotoProfilPage(x.nickname)}>
                    <MainImgDivBtmImg
                      src={x.profileImage}
                      alt='????????? ?????????'
                    />
                    <MainImgDivBtmSpanDiv>
                      <MainImgDivTopSpan>{x.title}</MainImgDivTopSpan>
                      <MainImgDivBtmSpan>{x.nickname}</MainImgDivBtmSpan>
                    </MainImgDivBtmSpanDiv>
                  </MainImgDivBtmImgDiv>
                  <MainImgDivBtnDiv>
                    {isSmallScreen ? (
                      getCookie('authorization') !== undefined ? (
                        <img
                          src={MainBannerMini}
                          alt='?????? ????????? ??????'
                          onClick={playMember}
                        />
                      ) : (
                        <img
                          src={MainBannerMini}
                          alt='?????? ????????? ??????'
                          onClick={play}
                        />
                      )
                    ) : getCookie('authorization') !== undefined ? (
                      <img
                        src={MainBanner}
                        alt='?????? ????????? ??????'
                        onClick={playMember}
                      />
                    ) : (
                      <img
                        src={MainBanner}
                        alt='?????? ????????? ??????'
                        onClick={play}
                      />
                    )}
                  </MainImgDivBtnDiv>
                </MainImgDivDiv>
              ))}
            </MainImgDiv>
          ) : (
            <MainImgDiv />
          )}
          {getCookie('authorization') !== undefined ? (
            artistIsFollowIsLoaded ? (
              powerArtist.length < 5 ? (
                <BtmProfileImgDiv>
                  <BtmProfileTextDiv>
                    <BtmProfileTextNew>?????? ?????? ????????????</BtmProfileTextNew>
                  </BtmProfileTextDiv>
                  <MainHotArtistWrap>
                    {powerArtistLoaded ? (
                      powerArtist.map((x, idx) => {
                        if (artistIsFollow.indexOf(x.nickname) < 0) {
                          return (
                            <HotArtist
                              key={idx}
                              nickname={x.nickname}
                              imageUrl={x.imageUrl}
                              follower={x.follower
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
                            <HotArtist
                              key={idx}
                              nickname={x.nickname}
                              imageUrl={x.imageUrl}
                              follower={x.follower
                                .toString()
                                .replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  ','
                                )}
                              isFollow={true}
                            />
                          );
                        }
                      })
                    ) : (
                      <Fragment />
                    )}
                  </MainHotArtistWrap>
                </BtmProfileImgDiv>
              ) : (
                <BtmProfileImgDiv>
                  <BtmProfileTextDiv>
                    <BtmProfileTextNew>?????? ?????? ????????????</BtmProfileTextNew>
                  </BtmProfileTextDiv>
                  <MainArowLeft>
                    <img
                      src={LeftArrow}
                      alt='???????????????'
                      onClick={() => sliderRef.current.slickPrev()}
                    />
                  </MainArowLeft>
                  <Slider {...Btmsettings}>
                    {powerArtistLoaded ? (
                      powerArtist.map((x, idx) => {
                        if (artistIsFollow.indexOf(x.nickname) < 0) {
                          return (
                            <HotArtist
                              key={idx}
                              nickname={x.nickname}
                              imageUrl={x.imageUrl}
                              follower={x.follower
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
                            <HotArtist
                              key={idx}
                              nickname={x.nickname}
                              imageUrl={x.imageUrl}
                              follower={x.follower
                                .toString()
                                .replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  ','
                                )}
                              isFollow={true}
                            />
                          );
                        }
                      })
                    ) : (
                      <Fragment />
                    )}
                  </Slider>
                  <MainArowRight>
                    <img
                      src={RightArrow}
                      alt='??????????????????'
                      onClick={() => sliderRef.current.slickNext()}
                    />
                  </MainArowRight>
                </BtmProfileImgDiv>
              )
            ) : (
              <Fragment />
            )
          ) : powerArtistLoaded ? (
            powerArtist.length < 5 ? (
              <BtmProfileImgDiv>
                <BtmProfileTextDiv>
                  <BtmProfileTextNew>?????? ?????? ????????????</BtmProfileTextNew>
                </BtmProfileTextDiv>
                <MainHotArtistWrap>
                  {powerArtist.map((x, idx) => {
                    if (artistIsFollow.indexOf(x.nickname) < 0) {
                      return (
                        <HotArtist
                          key={idx}
                          nickname={x.nickname}
                          imageUrl={x.imageUrl}
                          follower={x.follower
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                          isFollow={false}
                        />
                      );
                    } else {
                      return (
                        <HotArtist
                          key={idx}
                          nickname={x.nickname}
                          imageUrl={x.imageUrl}
                          follower={x.follower
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                          isFollow={false}
                        />
                      );
                    }
                  })}
                </MainHotArtistWrap>
              </BtmProfileImgDiv>
            ) : (
              <BtmProfileImgDiv>
                <BtmProfileTextDiv>
                  <BtmProfileTextNew>?????? ?????? ????????????</BtmProfileTextNew>
                </BtmProfileTextDiv>
                <MainArowLeft>
                  <img
                    src={LeftArrow}
                    alt='???????????????'
                    onClick={() => sliderRef.current.slickPrev()}
                  />
                </MainArowLeft>
                <Slider {...Btmsettings}>
                  {powerArtist.map((x, idx) => {
                    if (artistIsFollow.indexOf(x.nickname) < 0) {
                      return (
                        <HotArtist
                          key={idx}
                          nickname={x.nickname}
                          imageUrl={x.imageUrl}
                          follower={x.follower
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                          isFollow={false}
                        />
                      );
                    } else {
                      return (
                        <HotArtist
                          key={idx}
                          nickname={x.nickname}
                          imageUrl={x.imageUrl}
                          follower={x.follower
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                          isFollow={false}
                        />
                      );
                    }
                  })}
                </Slider>
                <MainArowRight>
                  <img
                    src={RightArrow}
                    alt='??????????????????'
                    onClick={() => sliderRef.current.slickNext()}
                  />
                </MainArowRight>
              </BtmProfileImgDiv>
            )
          ) : (
            <Fragment />
          )}
          <MainProfileSliderGroup>
            {getCookie('authorization') !== undefined ? (
              singerIsLikeIsLoaded ? (
                recentSingerIsLoaded ? (
                  recentSinger.length < 5 ? (
                    <DisMainPostImgDivImgDiv>
                      <DisMainPostImgDivDiv>
                        <DisMainPostImgDivNew>
                          ?????? ????????????
                        </DisMainPostImgDivNew>
                        <DisMainPostImgDivMakeDiv>
                          <DisMainPostImgDivMake
                            onClick={() => goToSinger('new')}
                          >
                            ?????????
                          </DisMainPostImgDivMake>
                        </DisMainPostImgDivMakeDiv>
                      </DisMainPostImgDivDiv>
                      <DisMainPostImgDiv>
                        {recentSinger.map((x, idx) => {
                          if (
                            [...singerIsLike, ...makerIsLike].indexOf(
                              x.postId
                            ) > -1
                          ) {
                            return (
                              <PostSmall
                                key={idx}
                                imageUrl={x.imageUrl.imageUrl}
                                likes={x.likes}
                                nickname={x.nickname}
                                title={x.title}
                                collaborate={x.collaborate}
                                mediaUrl={x.mediaUrl.mediaUrl}
                                postId={x.postId}
                                position={x.position}
                                likeState={true}
                              />
                            );
                          } else {
                            return (
                              <PostSmall
                                key={idx}
                                imageUrl={x.imageUrl.imageUrl}
                                likes={x.likes}
                                nickname={x.nickname}
                                title={x.title}
                                collaborate={x.collaborate}
                                mediaUrl={x.mediaUrl.mediaUrl}
                                postId={x.postId}
                                position={x.position}
                                likeState={false}
                              />
                            );
                          }
                        })}
                      </DisMainPostImgDiv>
                    </DisMainPostImgDivImgDiv>
                  ) : (
                    <Fragment>
                      <ProfileSlider
                        name={'?????? ????????????'}
                        position={'singer'}
                        postList={recentSinger}
                        GrandTitle='?????? ????????????'
                        ctg='new'
                      />
                    </Fragment>
                  )
                ) : (
                  <Fragment />
                )
              ) : (
                <Fragment />
              )
            ) : recentSingerIsLoaded ? (
              recentSinger.length < 5 ? (
                <DisMainPostImgDivImgDiv>
                  <DisMainPostImgDivDiv>
                    <DisMainPostImgDivNew>?????? ????????????</DisMainPostImgDivNew>
                    <DisMainPostImgDivMakeDiv>
                      <DisMainPostImgDivMake onClick={() => goToSinger('new')}>
                        ?????????
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {recentSinger.map((x, idx) => {
                      if ([...singerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <PostSmall
                            key={idx}
                            imageUrl={x.imageUrl.imageUrl}
                            likes={x.likes}
                            nickname={x.nickname}
                            title={x.title}
                            collaborate={x.collaborate}
                            mediaUrl={x.mediaUrl.mediaUrl}
                            postId={x.postId}
                            position={x.position}
                            likeState={true}
                          />
                        );
                      } else {
                        return (
                          <PostSmall
                            key={idx}
                            imageUrl={x.imageUrl.imageUrl}
                            likes={x.likes}
                            nickname={x.nickname}
                            title={x.title}
                            collaborate={x.collaborate}
                            mediaUrl={x.mediaUrl.mediaUrl}
                            postId={x.postId}
                            position={x.position}
                            likeState={false}
                          />
                        );
                      }
                    })}
                  </DisMainPostImgDiv>
                </DisMainPostImgDivImgDiv>
              ) : (
                <Fragment>
                  <ProfileSlider
                    name={'?????? ????????????'}
                    position={'singer'}
                    postList={recentSinger}
                    GrandTitle='?????? ????????????'
                    ctg='new'
                  />
                </Fragment>
              )
            ) : (
              <Fragment />
            )}

            {getCookie('authorization') !== undefined ? (
              singerIsLikeIsLoaded ? (
                bestSingerIsLoaded ? (
                  bestSinger.length < 5 ? (
                    <DisMainPostImgDivImgDiv>
                      <DisMainPostImgDivDiv>
                        <DisMainPostImgDivNew>
                          ?????? ????????????
                        </DisMainPostImgDivNew>
                        <DisMainPostImgDivMakeDiv>
                          <DisMainPostImgDivMake
                            onClick={() => goToSinger('popular')}
                          >
                            ?????????
                          </DisMainPostImgDivMake>
                        </DisMainPostImgDivMakeDiv>
                      </DisMainPostImgDivDiv>
                      <DisMainPostImgDiv>
                        {bestSinger.map((x, idx) => {
                          if (
                            [...singerIsLike, ...makerIsLike].indexOf(
                              x.postId
                            ) > -1
                          ) {
                            return (
                              <PostSmall
                                key={idx}
                                imageUrl={x.imageUrl.imageUrl}
                                likes={x.likes}
                                nickname={x.nickname}
                                title={x.title}
                                collaborate={x.collaborate}
                                mediaUrl={x.mediaUrl.mediaUrl}
                                postId={x.postId}
                                position={x.position}
                                likeState={true}
                              />
                            );
                          } else {
                            return (
                              <PostSmall
                                key={idx}
                                imageUrl={x.imageUrl.imageUrl}
                                likes={x.likes}
                                nickname={x.nickname}
                                title={x.title}
                                collaborate={x.collaborate}
                                mediaUrl={x.mediaUrl.mediaUrl}
                                postId={x.postId}
                                position={x.position}
                                likeState={false}
                              />
                            );
                          }
                        })}
                      </DisMainPostImgDiv>
                    </DisMainPostImgDivImgDiv>
                  ) : (
                    <Fragment>
                      <ProfileSlider
                        name={'?????? ????????????'}
                        position={'singer'}
                        postList={bestSinger}
                        GrandTitle='?????? ????????????'
                        ctg='popular'
                      />
                    </Fragment>
                  )
                ) : (
                  <Fragment />
                )
              ) : (
                <Fragment />
              )
            ) : bestSingerIsLoaded ? (
              bestSinger.length < 5 ? (
                <DisMainPostImgDivImgDiv>
                  <DisMainPostImgDivDiv>
                    <DisMainPostImgDivNew>?????? ????????????</DisMainPostImgDivNew>
                    <DisMainPostImgDivMakeDiv>
                      <DisMainPostImgDivMake
                        onClick={() => goToSinger('popular')}
                      >
                        ?????????
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {bestSinger.map((x, idx) => {
                      if ([...singerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <PostSmall
                            key={idx}
                            imageUrl={x.imageUrl.imageUrl}
                            likes={x.likes}
                            nickname={x.nickname}
                            title={x.title}
                            collaborate={x.collaborate}
                            mediaUrl={x.mediaUrl.mediaUrl}
                            postId={x.postId}
                            position={x.position}
                            likeState={true}
                          />
                        );
                      } else {
                        return (
                          <PostSmall
                            key={idx}
                            imageUrl={x.imageUrl.imageUrl}
                            likes={x.likes}
                            nickname={x.nickname}
                            title={x.title}
                            collaborate={x.collaborate}
                            mediaUrl={x.mediaUrl.mediaUrl}
                            postId={x.postId}
                            position={x.position}
                            likeState={false}
                          />
                        );
                      }
                    })}
                  </DisMainPostImgDiv>
                </DisMainPostImgDivImgDiv>
              ) : (
                <Fragment>
                  <ProfileSlider
                    name={'?????? ????????????'}
                    position={'singer'}
                    postList={bestSinger}
                    GrandTitle='?????? ????????????'
                    ctg='popular'
                  />
                </Fragment>
              )
            ) : (
              <Fragment />
            )}

            {getCookie('authorization') !== undefined ? (
              makerIsLikeIsLoaded ? (
                recentMakerIsLoaded ? (
                  recentMaker.length < 5 ? (
                    <DisMainPostImgDivImgDiv>
                      <DisMainPostImgDivDiv>
                        <DisMainPostImgDivNew>
                          ????????? ????????????
                        </DisMainPostImgDivNew>
                        <DisMainPostImgDivMakeDiv>
                          <DisMainPostImgDivMake
                            onClick={() => goToMaker('new')}
                          >
                            ?????????
                          </DisMainPostImgDivMake>
                        </DisMainPostImgDivMakeDiv>
                      </DisMainPostImgDivDiv>
                      <DisMainPostImgDiv>
                        {recentMaker.map((x, idx) => {
                          if (
                            [...singerIsLike, ...makerIsLike].indexOf(
                              x.postId
                            ) > -1
                          ) {
                            return (
                              <PostSmall
                                key={idx}
                                imageUrl={x.imageUrl.imageUrl}
                                likes={x.likes}
                                nickname={x.nickname}
                                title={x.title}
                                collaborate={x.collaborate}
                                mediaUrl={x.mediaUrl.mediaUrl}
                                postId={x.postId}
                                position={x.position}
                                likeState={true}
                              />
                            );
                          } else {
                            return (
                              <PostSmall
                                key={idx}
                                imageUrl={x.imageUrl.imageUrl}
                                likes={x.likes}
                                nickname={x.nickname}
                                title={x.title}
                                collaborate={x.collaborate}
                                mediaUrl={x.mediaUrl.mediaUrl}
                                postId={x.postId}
                                position={x.position}
                                likeState={false}
                              />
                            );
                          }
                        })}
                      </DisMainPostImgDiv>
                    </DisMainPostImgDivImgDiv>
                  ) : (
                    <Fragment>
                      <ProfileSlider
                        name={'????????? ????????????'}
                        position={'maker'}
                        postList={recentMaker}
                        GrandTitle='????????? ????????????'
                        ctg='new'
                      />
                    </Fragment>
                  )
                ) : (
                  <Fragment />
                )
              ) : (
                <Fragment />
              )
            ) : recentMakerIsLoaded ? (
              recentMaker.length < 5 ? (
                <DisMainPostImgDivImgDiv>
                  <DisMainPostImgDivDiv>
                    <DisMainPostImgDivNew>????????? ????????????</DisMainPostImgDivNew>
                    <DisMainPostImgDivMakeDiv>
                      <DisMainPostImgDivMake onClick={() => goToMaker('new')}>
                        ?????????
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {recentMaker.map((x, idx) => {
                      if ([...makerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <PostSmall
                            key={idx}
                            imageUrl={x.imageUrl.imageUrl}
                            likes={x.likes}
                            nickname={x.nickname}
                            title={x.title}
                            collaborate={x.collaborate}
                            mediaUrl={x.mediaUrl.mediaUrl}
                            postId={x.postId}
                            position={x.position}
                            likeState={true}
                          />
                        );
                      } else {
                        return (
                          <PostSmall
                            key={idx}
                            imageUrl={x.imageUrl.imageUrl}
                            likes={x.likes}
                            nickname={x.nickname}
                            title={x.title}
                            collaborate={x.collaborate}
                            mediaUrl={x.mediaUrl.mediaUrl}
                            postId={x.postId}
                            position={x.position}
                            likeState={false}
                          />
                        );
                      }
                    })}
                  </DisMainPostImgDiv>
                </DisMainPostImgDivImgDiv>
              ) : (
                <Fragment>
                  <ProfileSlider
                    name={'????????? ????????????'}
                    position={'maker'}
                    postList={recentMaker}
                    GrandTitle='????????? ????????????'
                    ctg='new'
                  />
                </Fragment>
              )
            ) : (
              <Fragment />
            )}
            {getCookie('authorization') !== undefined ? (
              makerIsLikeIsLoaded ? (
                bestMakerIsLoaded ? (
                  bestMaker.length < 5 ? (
                    <DisMainPostImgDivImgDiv>
                      <DisMainPostImgDivDiv>
                        <DisMainPostImgDivNew>
                          ????????? ????????????
                        </DisMainPostImgDivNew>
                        <DisMainPostImgDivMakeDiv>
                          <DisMainPostImgDivMake
                            onClick={() => goToMaker('popular')}
                          >
                            ?????????
                          </DisMainPostImgDivMake>
                        </DisMainPostImgDivMakeDiv>
                      </DisMainPostImgDivDiv>
                      <DisMainPostImgDiv>
                        {bestMaker.map((x, idx) => {
                          if (
                            [...singerIsLike, ...makerIsLike].indexOf(
                              x.postId
                            ) > -1
                          ) {
                            return (
                              <PostSmall
                                key={idx}
                                imageUrl={x.imageUrl.imageUrl}
                                likes={x.likes}
                                nickname={x.nickname}
                                title={x.title}
                                collaborate={x.collaborate}
                                mediaUrl={x.mediaUrl.mediaUrl}
                                postId={x.postId}
                                position={x.position}
                                likeState={true}
                              />
                            );
                          } else {
                            return (
                              <PostSmall
                                key={idx}
                                imageUrl={x.imageUrl.imageUrl}
                                likes={x.likes}
                                nickname={x.nickname}
                                title={x.title}
                                collaborate={x.collaborate}
                                mediaUrl={x.mediaUrl.mediaUrl}
                                postId={x.postId}
                                position={x.position}
                                likeState={false}
                              />
                            );
                          }
                        })}
                      </DisMainPostImgDiv>
                    </DisMainPostImgDivImgDiv>
                  ) : (
                    <Fragment>
                      <ProfileSlider
                        name={'????????? ????????????'}
                        position={'maker'}
                        postList={bestMaker}
                        GrandTitle='????????? ????????????'
                        ctg='popular'
                      />
                    </Fragment>
                  )
                ) : (
                  <Fragment />
                )
              ) : (
                <Fragment />
              )
            ) : bestMakerIsLoaded ? (
              bestMaker.length < 5 ? (
                <DisMainPostImgDivImgDiv>
                  <DisMainPostImgDivDiv>
                    <DisMainPostImgDivNew>????????? ????????????</DisMainPostImgDivNew>
                    <DisMainPostImgDivMakeDiv>
                      <DisMainPostImgDivMake
                        onClick={() => goToMaker('popular')}
                      >
                        ?????????
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {bestMaker.map((x, idx) => {
                      if ([...makerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <PostSmall
                            key={idx}
                            imageUrl={x.imageUrl.imageUrl}
                            likes={x.likes}
                            nickname={x.nickname}
                            title={x.title}
                            collaborate={x.collaborate}
                            mediaUrl={x.mediaUrl.mediaUrl}
                            postId={x.postId}
                            position={x.position}
                            likeState={true}
                          />
                        );
                      } else {
                        return (
                          <PostSmall
                            key={idx}
                            imageUrl={x.imageUrl.imageUrl}
                            likes={x.likes}
                            nickname={x.nickname}
                            title={x.title}
                            collaborate={x.collaborate}
                            mediaUrl={x.mediaUrl.mediaUrl}
                            postId={x.postId}
                            position={x.position}
                            likeState={false}
                          />
                        );
                      }
                    })}
                  </DisMainPostImgDiv>
                </DisMainPostImgDivImgDiv>
              ) : (
                <Fragment>
                  <ProfileSlider
                    name={'????????? ????????????'}
                    position={'maker'}
                    postList={bestMaker}
                    GrandTitle='????????? ????????????'
                    ctg='popular'
                  />
                </Fragment>
              )
            ) : (
              <Fragment />
            )}
          </MainProfileSliderGroup>
        </MainContainer>
      </MainContainerDiv>
    </Fragment>
  );
};

export default Main;
