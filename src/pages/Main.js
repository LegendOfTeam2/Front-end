// React
import { Fragment, useRef } from "react";
// Zustand

// Packages
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Utils
import Button from "../elements/Button";
// Pages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
// Components
import Header from "../components/Header";
import PlayerMain from "../components/audioplayer/PlayerMain";
// Assests
import {
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
  MainImgDivBtnDiv,
  MainImgDivDiv,
  MainImgDivDivDiv,
  MainImgDivImg,
} from "../assets/styles/pages/Main.styled";

import ProfileSlider from "../components/ProfileSlider";
import HotArtist from "../components/HotArtist";



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
    centerPadding: "85px",
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

  return (
    <Fragment>
      <Header />
      <MainContainerDiv>
        <MainContainer>
          <MainImgDiv>
            <Slider {...settings}>
              {Array(4)
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

          <ProfileSlider GrandTitle='싱어 최신작품' />
          <ProfileSlider GrandTitle='싱어 인기작품' />
          <ProfileSlider GrandTitle='메이커 최신작품' />
          <ProfileSlider GrandTitle='메이커 인기작품' />

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

          <MainAudioPlay>
            <PlayerMain />
          </MainAudioPlay>
        </MainContainer>
      </MainContainerDiv>
    </Fragment>
  );
};

export default Main;
