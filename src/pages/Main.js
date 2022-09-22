// React
import { Fragment, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Zustand
import usePostStore from '../zustand/post';
import useLikeStore from '../zustand/like';
import usePlayerStore from '../zustand/player';
// Packages
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Utils
import Button from '../elements/Button';
import { getCookie } from '../utils/cookie';
// Pages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
// Components
import Header from '../components/Header';
import ProfileSlider from '../components/ProfileSlider';
import HotArtist from '../components/HotArtist';
import Post from '../components/Post';
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
import { LeftArrow, MainBanner, RightArrow } from '../assets/images/image';

const Main = () => {
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

  const recentMakerIsLoaded = usePostStore(
    (state) => state.recentMakerIsLoaded
  );
  const recentMaker = usePostStore((state) => state.recentMaker);

  const recentSingerIsLoaded = usePostStore(
    (state) => state.recentSingerIsLoaded
  );
  const recentSinger = usePostStore((state) => state.recentSinger);

  const bestMakerIsLoaded = usePostStore((state) => state.bestMakerIsLoaded);
  const bestMaker = usePostStore((state) => state.bestMaker);

  const bestSingerIsLoaded = usePostStore((state) => state.bestSingerIsLoaded);
  const bestSinger = usePostStore((state) => state.bestSinger);

  const PowerArtistLoaded = usePostStore((state) => state.PowerArtistLoaded);
  const PowerArtist = usePostStore((state) => state.PowerArtist);

  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);
  const artistIsFollow = usePostStore((state) => state.artistIsFollow);

  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const postPlayList = usePlayerStore((state) => state.postPlayList);

  const navigate = useNavigate();

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
        if (res) {
          getRecentSinger();
          getBestSinger();
        }
      });
      getMakerLikePost().then((res) => {
        if (res) {
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

  const PlayMember = () => {
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

  const goToSinger = (category) => {
    navigate(`/morepage/singer/${category}`);
  };

  const goToMaker = (category) => {
    navigate(`/morepage/maker/${category}`);
  };

  return (
    <Fragment>
      <Header />
      <MainContainerDiv>
        <MainContainer>
          {bestSongIsLoaded ? (
            <MainImgDiv>
              {/* <Slider {...settings}> */}
              {bestSong.map((x) => (
                <MainImgDivDiv key={x.postId}>
                  <MainImgDivImg img={x.imageUrl.imageUrl}></MainImgDivImg>
                  <MainImgDivDivDiv>베스트 송</MainImgDivDivDiv>
                  <MainImgDivDivBtmDiv>
                    리드미에서 가장 많이 재생된 아티스트 추천!
                  </MainImgDivDivBtmDiv>
                  <MainImgDivBtmImgDiv>
                    <MainImgDivBtmImg
                      src={x.profileImage}
                      alt='프로필 이미지'
                    />
                    <MainImgDivBtmSpanDiv>
                      <MainImgDivTopSpan>{x.title}</MainImgDivTopSpan>
                      <MainImgDivBtmSpan>{x.nickname}</MainImgDivBtmSpan>
                    </MainImgDivBtmSpanDiv>
                  </MainImgDivBtmImgDiv>
                  <MainImgDivBtnDiv>
                    {getCookie('authorization') !== undefined ? (
                      <img
                        src={MainBanner}
                        alt='배너 플레이 버튼'
                        onClick={PlayMember}
                      />
                    ) : (
                      <img
                        src={MainBanner}
                        alt='배너 플레이 버튼'
                        onClick={play}
                      />
                    )}
                  </MainImgDivBtnDiv>
                </MainImgDivDiv>
              ))}
              {/* </Slider> */}
            </MainImgDiv>
          ) : (
            <MainImgDiv></MainImgDiv>
          )}
          <MainProfileSliderGroup>
            {recentSingerIsLoaded ? (
              recentSinger.length < 5 ? (
                <DisMainPostImgDivImgDiv>
                  <DisMainPostImgDivDiv>
                    <DisMainPostImgDivNew>싱어 최신작품</DisMainPostImgDivNew>
                    <DisMainPostImgDivMakeDiv>
                      <DisMainPostImgDivMake onClick={() => goToSinger('new')}>
                        더보기
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {recentSinger.map((x, idx) => {
                      if ([...singerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <Post
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
                          <Post
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
                <>
                  <ProfileSlider
                    name={'싱어 최신작품'}
                    position={'singer'}
                    postList={recentSinger}
                    GrandTitle='싱어 최신작품'
                    ctg='new'
                  />
                </>
              )
            ) : (
              <> </>
            )}

            {bestSingerIsLoaded ? (
              bestSinger.length < 5 ? (
                <DisMainPostImgDivImgDiv>
                  <DisMainPostImgDivDiv>
                    <DisMainPostImgDivNew>싱어 인기작품</DisMainPostImgDivNew>
                    <DisMainPostImgDivMakeDiv>
                      <DisMainPostImgDivMake
                        onClick={() => goToSinger('popular')}
                      >
                        더보기
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {bestSinger.map((x, idx) => {
                      if ([...singerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <Post
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
                          <Post
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
                <>
                  <ProfileSlider
                    name={'싱어 인기작품'}
                    position={'singer'}
                    postList={bestSinger}
                    GrandTitle='싱어 인기작품'
                    ctg='popular'
                  />
                </>
              )
            ) : (
              <></>
            )}

            {recentMakerIsLoaded ? (
              recentMaker.length < 5 ? (
                <DisMainPostImgDivImgDiv>
                  <DisMainPostImgDivDiv>
                    <DisMainPostImgDivNew>메이커 최신작품</DisMainPostImgDivNew>
                    <DisMainPostImgDivMakeDiv>
                      <DisMainPostImgDivMake onClick={() => goToMaker('new')}>
                        더보기
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {recentMaker.map((x, idx) => {
                      if ([...makerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <Post
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
                          <Post
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
                <>
                  <ProfileSlider
                    name={'메이커 최신작품'}
                    position={'maker'}
                    postList={recentMaker}
                    GrandTitle='메이커 최신작품'
                    ctg='new'
                  />
                </>
              )
            ) : (
              <></>
            )}

            {bestMakerIsLoaded ? (
              bestMaker.length < 5 ? (
                <DisMainPostImgDivImgDiv>
                  <DisMainPostImgDivDiv>
                    <DisMainPostImgDivNew>메이커 인기작품</DisMainPostImgDivNew>
                    <DisMainPostImgDivMakeDiv>
                      <DisMainPostImgDivMake
                        onClick={() => goToMaker('popular')}
                      >
                        더보기
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {bestMaker.map((x, idx) => {
                      if ([...makerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <Post
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
                          <Post
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
                <>
                  <ProfileSlider
                    name={'메이커 인기작품'}
                    position={'maker'}
                    postList={bestMaker}
                    GrandTitle='메이커 인기작품'
                    ctg='popular'
                  />
                </>
              )
            ) : (
              <></>
            )}
          </MainProfileSliderGroup>
          {PowerArtistLoaded ? (
            PowerArtist.length < 5 ? (
              <BtmProfileImgDiv>
                <BtmProfileTextDiv>
                  <BtmProfileTextNew>요즘 핫한 아티스트 </BtmProfileTextNew>
                </BtmProfileTextDiv>
                <MainHotArtistWrap>
                  {PowerArtist.map((x) => {
                    if (artistIsFollow.indexOf(x.nickname) < 0) {
                      return (
                        <HotArtist
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
                          nickname={x.nickname}
                          imageUrl={x.imageUrl}
                          follower={x.follower
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                          isFollow={true}
                        />
                      );
                    }
                  })}
                </MainHotArtistWrap>
              </BtmProfileImgDiv>
            ) : (
              <BtmProfileImgDiv>
                <BtmProfileTextDiv>
                  <BtmProfileTextNew>요즘 핫한 아티스트 </BtmProfileTextNew>
                </BtmProfileTextDiv>
                <MainArowLeft>
                  <img
                    src={LeftArrow}
                    alt='오른쪽화살표'
                    onClick={() => sliderRef.current.slickPrev()}
                  />
                </MainArowLeft>
                <Slider {...Btmsettings}>
                  {PowerArtist.map((x, idx) => {
                    if (artistIsFollow.indexOf(x.nickname) < 0) {
                      return (
                        <HotArtist
                          key={idx}
                          nickname={x.nickname}
                          follower={x.follower
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                          imageUrl={x.imageUrl}
                          isFollow={false}
                        />
                      );
                    } else {
                      return (
                        <HotArtist
                          key={idx}
                          nickname={x.nickname}
                          follower={x.follower
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                          imageUrl={x.imageUrl}
                          isFollow={true}
                        />
                      );
                    }
                  })}
                </Slider>
                <MainArowRight>
                  <img
                    src={RightArrow}
                    alt='오른쪽화살표'
                    onClick={() => sliderRef.current.slickNext()}
                  />
                </MainArowRight>
              </BtmProfileImgDiv>
            )
          ) : (
            <></>
          )}
        </MainContainer>
      </MainContainerDiv>
    </Fragment>
  );
};

export default Main;
