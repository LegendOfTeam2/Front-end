// React
import { Fragment, useEffect, useRef } from "react";

// Zustand
import usePostStore from "../zustand/post";
import useLikeStore from "../zustand/like";

// Packages
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shortId from "shortid";
import jwt_decode from 'jwt-decode';

// Utils
import Button from "../elements/Button";
import { getCookie } from "../utils/cookie";

// Pages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

// Components
import Header from "../components/Header";
import PlayerMain from "../components/audioplayer/PlayerMain";
import ProfileSlider from "../components/ProfileSlider";
import HotArtist from "../components/HotArtist";
// Assests
import styled from "styled-components";
import {
  MainProfileSliderGroup,
  BtmProfileImgDiv,
  BtmProfileTextDiv,
  BtmProfileTextMake,
  BtmProfileTextNew,
  BtmProfileTextSingMakeDiv,
  MainArowLeft,
  MainArowRight,
  MainAudioPlay,
  MainContainer,
  MainContainerDiv,
  MainImgDiv,
  // MainImgFade,
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
} from "../assets/styles/pages/Main.styled";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";
import usePlayerStore from "../zustand/player";

const Main = () => {
  const sliderRef = useRef();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    arrows: false,
    centerPadding: "80px",
  };
  const Btmsettings = {
    className: "center",
    initialSlide: 2,
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    centerPadding: "-30px",
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

  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie("authorization") === undefined) {
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
        if (res) {
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


  const goToSinger = () => {
    navigate(`/morepage/singer`);
  };

  const goToMaker = () => {
    navigate(`/morepage/maker`);
  };




  return (
    <Fragment>
      <Header />
      <MainContainerDiv>
        <MainContainer>
          {bestSongIsLoaded ? (
            <MainImgDiv>
              <Slider {...settings}>
                {bestSong.map((x) => (
                  <MainImgDivDiv key={shortId.generate()}>
                    <MainImgDivImg img={x.imageUrl.imageUrl}></MainImgDivImg>
                    <MainImgDivDivDiv>Best Song</MainImgDivDivDiv>
                    <MainImgDivBtnDiv>
                      <Button
                        _style={{
                          width: "140px",
                          height: "36px",
                          bg_color: "rgba(255, 255, 255, 1)",
                          bd_radius: "43px",
                          color: "rgba(0, 0, 0, 1)",
                          ft_weight: "700",
                          ft_size: "12",
                          bd_px: "1.5px",
                          bd_color: "transparent",
                        }}
                        _text={"감상하기"}
                        _onClick={play}
                      />
                    </MainImgDivBtnDiv>
                  </MainImgDivDiv>
                ))}
              </Slider>
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
                      <DisMainPostImgDivMake onClick={goToSinger}>
                        더보기
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {recentSinger.map((x) => {
                      if ([...singerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <Post
                            key={x.postId}
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
                            key={x.postId}
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
                    name={"싱어 최신작품"}
                    position={"singer"}
                    postList={recentSinger}
                    GrandTitle='싱어 최신작품'
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
                      <DisMainPostImgDivMake onClick={goToSinger}>
                        더보기
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {bestSinger.map((x) => {
                      if ([...singerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <Post
                            key={x.postId}
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
                            key={x.postId}
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
                    name={"싱어 인기작품"}
                    position={"singer"}
                    postList={bestSinger}
                    GrandTitle='싱어 인기작품'
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
                      <DisMainPostImgDivMake onClick={goToMaker}>
                        더보기
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {recentMaker.map((x) => {
                      if ([...makerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <Post
                            key={x.postId}
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
                            key={x.postId}
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
                    name={"메이커 최신작품"}
                    position={"maker"}
                    postList={recentMaker}
                    GrandTitle='메이커 최신작품'
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
                      <DisMainPostImgDivMake onClick={goToMaker}>
                        더보기
                      </DisMainPostImgDivMake>
                    </DisMainPostImgDivMakeDiv>
                  </DisMainPostImgDivDiv>
                  <DisMainPostImgDiv>
                    {bestMaker.map((x) => {
                      if ([...makerIsLike].indexOf(x.postId) !== -1) {
                        return (
                          <Post
                            key={x.postId}
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
                            key={x.postId}
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
                    name={"메이커 인기작품"}
                    position={"maker"}
                    postList={bestMaker}
                    GrandTitle='메이커 인기작품'
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
                  <BtmProfileTextSingMakeDiv>
                    <BtmProfileTextMake>더보기</BtmProfileTextMake>
                  </BtmProfileTextSingMakeDiv>
                </BtmProfileTextDiv>
                <MainHotArtistWrap>
                  {PowerArtist.map((x) => (
                    <HotArtist
                      key={x.nickname}
                      nickname={x.nickname}
                      follower={x.follower
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    />
                  ))}
                </MainHotArtistWrap>
              </BtmProfileImgDiv>
            ) : (
              <BtmProfileImgDiv>
                <BtmProfileTextDiv>
                  <BtmProfileTextNew>요즘 핫한 아티스트 </BtmProfileTextNew>
                  <BtmProfileTextSingMakeDiv>
                    <BtmProfileTextMake>더보기</BtmProfileTextMake>
                  </BtmProfileTextSingMakeDiv>
                </BtmProfileTextDiv>
                <MainArowLeft>
                  <MdOutlineArrowBackIosNew
                    className='icon-prev'
                    color='rgba(180, 180, 180, 1)'
                    size={30}
                    onClick={() => sliderRef.current.slickPrev()}
                  />
                </MainArowLeft>
                <Slider {...Btmsettings}>
                  {PowerArtist.map((x) => (
                    <HotArtist
                      key={x.nickname}
                      nickname={x.nickname}
                      follower={x.follower
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                      imageUrl={x.imageUrl}
                    />
                  ))}
                </Slider>
                <MainArowRight>
                  <MdOutlineArrowForwardIos
                    className='icon-next'
                    color='rgba(180, 180, 180, 1)'
                    size={30}
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
