// React
import { Fragment, useEffect, useRef } from "react";

// Zustand
import usePostStore from "../zustand/post";
import usePlayerStore from "../zustand/player";

// Packages
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
} from "../assets/styles/pages/Main.styled";
import Post from "../components/Post";

const Main = () => {
  const sliderRef = useRef();

  const viewState = usePlayerStore((state) => state.viewState);
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);

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
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    centerPadding: "-30px",
    ref: sliderRef,
  };

  const getBestSong = usePostStore((state) => state.getBestSong);
  const getRecentMaker = usePostStore((state) => state.getRecentMaker);
  const getRecentSinger = usePostStore((state) => state.getRecentSinger);
  const getBestMaker = usePostStore((state) => state.getBestMaker);
  const getBestSinger = usePostStore((state) => state.getBestSinger);
  const getPowerArtist = usePostStore((state) => state.getPowerArtist);

  const getSingerLikePost = usePostStore((state) => state.getSingerLikePost);
  const getMakerLikePost = usePostStore((state) => state.getMakerLikePost);
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

  const singerIsLike = usePostStore((state) => state.singerIsLike);
  const makerIsLike = usePostStore((state) => state.makerIsLike);
  const artistIsFollow = usePostStore((state) => state.artistIsFollow);

  useEffect(() => {
    if (getCookie("authorization") === undefined) {
      getRecentSinger();
      getRecentMaker();
      getBestMaker();
      getBestSinger();
      getPowerArtist();
    } else {
      getSingerLikePost().then((res) => {
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

  const mockDate = [
    {
      postId: "1",
      imageUrl:
        "https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/0_JTh3JET7ZCHaT_IJhG4VbhEpI.png",
    },
    {
      postId: "2",
      imageUrl:
        "https://post-phinf.pstatic.net/MjAyMDA5MDRfMjcx/MDAxNTk5MjE4MDE5Mzcw.jLTW8nXn80IriL-CBHj88OG6mAcsrc4lLclqk25tAmUg.15AvCfPQCS31Ina-TeCFdha94JXUYgtANVS0Xa3vq9Ig.JPEG/f26f6953cc1ff7579f4582f476f2de46359cfb21c88707f25a0aa02a9c77b540_v1.jpg?type=w1200",
    },
    {
      postId: "3",
      imageUrl:
        "https://images.khan.co.kr/article/2022/05/12/l_2022051202000700600130251.jpg",
    },
    {
      postId: "4",
      imageUrl:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMjM1/MDAxNTY0NzE0ODEyMDk4.5nXLk7-27EPK8Q0NyLFVaeE_umpkqwfV73UWtu0ZD5Ug.j9RXuTc1EAgw66FZB0wl32sLBNaY4R9HZYvzOkei38Ag.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_8.jpg?type=w1200",
    },
  ];

  const mockDate2 = [
    {
      postId: "1",
      imageUrl:
        "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/M7kpICX4bbcXfuMgX2DH0NT0qeg.png",
    },
    {
      postId: "2",
      imageUrl:
        "http://image.kyobobook.co.kr/newimages/music/large/9155/2551925.jpg",
    },
    {
      postId: "3",
      imageUrl:
        "http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/665/579/81665579_1603496381499_1_600x600.JPG",
    },
    {
      postId: "4",
      imageUrl:
        "https://cdnimg.melon.co.kr/cm/album/images/100/82/152/10082152_500.jpg?b9df75751e7cbc77a992502fcceccc02",
    },
  ];

  return (
    <Fragment>
      <Header />
      <MainContainerDiv>
        <MainContainer>
          <MainImgDiv>
            <Slider {...settings}>
              {Array(1)
                .fill("")
                .map(() => (
                  <MainImgDivDiv>
                    <MainImgDivImg
                      img={
                        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpS97M%2FbtqSdupzCez%2FuqPigp7AcjhIZnlzCYdvd0%2Fimg.jpg"
                      }
                    ></MainImgDivImg>
                    <MainImgDivDivDiv>Bast Song</MainImgDivDivDiv>
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
                      />
                    </MainImgDivBtnDiv>
                  </MainImgDivDiv>
                ))}
            </Slider>
          </MainImgDiv>
          <MainProfileSliderGroup>
            {mockDate.length < 5 ? (
              <DisMainPostImgDivImgDiv>
                <DisMainPostImgDivDiv>
                  <DisMainPostImgDivNew>싱어 최신작품</DisMainPostImgDivNew>
                  <DisMainPostImgDivMakeDiv>
                    <DisMainPostImgDivMake>더보기</DisMainPostImgDivMake>
                  </DisMainPostImgDivMakeDiv>
                </DisMainPostImgDivDiv>
                <DisMainPostImgDiv>
                  {mockDate.map((x) => (
                    <Post key={x.postId} imageUrl={x.imageUrl} />
                  ))}
                </DisMainPostImgDiv>
              </DisMainPostImgDivImgDiv>
            ) : (
              <>
                <ProfileSlider GrandTitle='싱어 최신작품' />
              </>
            )}

            {mockDate.length < 5 ? (
              <DisMainPostImgDivImgDiv>
                <DisMainPostImgDivDiv>
                  <DisMainPostImgDivNew>싱어 인기작품</DisMainPostImgDivNew>
                  <DisMainPostImgDivMakeDiv>
                    <DisMainPostImgDivMake>더보기</DisMainPostImgDivMake>
                  </DisMainPostImgDivMakeDiv>
                </DisMainPostImgDivDiv>
                <DisMainPostImgDiv>
                  {mockDate.map((x) => (
                    <Post key={x.postId} imageUrl={x.imageUrl} />
                  ))}
                </DisMainPostImgDiv>
              </DisMainPostImgDivImgDiv>
            ) : (
              <>
                <ProfileSlider GrandTitle='싱어 인기작품' />
              </>
            )}

            {mockDate2.length < 5 ? (
              <DisMainPostImgDivImgDiv>
                <DisMainPostImgDivDiv>
                  <DisMainPostImgDivNew>메이커 최신작품</DisMainPostImgDivNew>
                  <DisMainPostImgDivMakeDiv>
                    <DisMainPostImgDivMake>더보기</DisMainPostImgDivMake>
                  </DisMainPostImgDivMakeDiv>
                </DisMainPostImgDivDiv>
                <DisMainPostImgDiv>
                  {mockDate2.map((x) => (
                    <Post key={x.postId} imageUrl={x.imageUrl} />
                  ))}
                </DisMainPostImgDiv>
              </DisMainPostImgDivImgDiv>
            ) : (
              <>
                <ProfileSlider GrandTitle='메이커 최신작품' />
              </>
            )}

            {mockDate2.length < 5 ? (
              <DisMainPostImgDivImgDiv>
                <DisMainPostImgDivDiv>
                  <DisMainPostImgDivNew>메이커 인기작품</DisMainPostImgDivNew>
                  <DisMainPostImgDivMakeDiv>
                    <DisMainPostImgDivMake>더보기</DisMainPostImgDivMake>
                  </DisMainPostImgDivMakeDiv>
                </DisMainPostImgDivDiv>
                <DisMainPostImgDiv>
                  {mockDate2.map((x) => (
                    <Post key={x.postId} imageUrl={x.imageUrl} />
                  ))}
                </DisMainPostImgDiv>
              </DisMainPostImgDivImgDiv>
            ) : (
              <>
                <ProfileSlider GrandTitle='메이커 인기작품' />
              </>
            )}
          </MainProfileSliderGroup>
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
              {Array(6)
                .fill("")
                .map(() => (
                  <HotArtist />
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

          <MainAudioPlay yIndex={viewState ? "0" : "100%"}>
            <PlayerMain />
          </MainAudioPlay>
        </MainContainer>
      </MainContainerDiv>
    </Fragment>
  );
};

export default Main;
