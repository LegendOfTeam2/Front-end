// React
import { Fragment, useEffect, useRef, useState } from "react";
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
// Elements

// Shared

// Assests
import {
  BtmProfileArrowDiv,
  BtmProfileDivDiv,
  BtmProfileDivDivDiv,
  BtmProfileImgDiv,
  BtmProfileTextDiv,
  BtmProfileTextMake,
  BtmProfileTextNew,
  BtmProfileTextSinger,
  BtmProfileTextSingMakeDiv,
  BtmTextDivDivDiv,
  BtmTextDivDivSmDiv,
  BtmTextDivSmSpan,
  BtmTextDivSpan,
  MainContainer,
  MainContainerDiv,
  MainImgDiv,
  MainImgDivBtnDiv,
  MainImgDivDiv,
  MainImgDivDivDiv,
  MainImgDivImg,
  MainTagBox,
  MainTagBoxText,
  MainTagBoxTextSpan,
  Profileimg,
} from "../assets/styles/pages/Main.styled";


import ProfileSlider from "../components/ProfileSlider"





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
                    >

                    </MainImgDivImg>
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
          <ProfileSlider />
          <ProfileSlider />
          <BtmProfileImgDiv>
            <BtmProfileTextDiv>
              <BtmProfileTextNew>요즘 핫한 아티스트 </BtmProfileTextNew>
              <BtmProfileTextSingMakeDiv>
                <MdOutlineArrowForwardIos size={30} />
                <BtmProfileTextSinger>팔로워 급상승</BtmProfileTextSinger>
                <BtmProfileTextMake>좋아요 급상승</BtmProfileTextMake>
              </BtmProfileTextSingMakeDiv>
              <BtmProfileArrowDiv>
                <MdOutlineArrowBackIosNew
                  className='icon-prev'
                  size={30}
                  onClick={() => sliderRef.current.slickPrev()}
                />
                <MdOutlineArrowForwardIos
                  className='icon-next'
                  size={30}
                  onClick={() => sliderRef.current.slickNext()}
                />
              </BtmProfileArrowDiv>
            </BtmProfileTextDiv>

            <Slider {...Btmsettings}>
              {Array(6)
                .fill("")
                .map(() => (
                  <MainImgDivDiv>
                    <BtmProfileDivDiv>
                      <BtmProfileDivDivDiv>
                        <Profileimg
                          src='https://blog.kakaocdn.net/dn/bRSp9b/btqDbkIMBLv/uFGktm4owJCRMMsXkQBgKk/img.jpg'
                          alt=''
                        />
                      </BtmProfileDivDivDiv>
                      <BtmTextDivDivDiv>
                        <BtmTextDivSpan>youngi_2</BtmTextDivSpan>
                      </BtmTextDivDivDiv>
                      <BtmTextDivDivSmDiv>
                        <BtmTextDivSmSpan>4,000팔로워</BtmTextDivSmSpan>
                      </BtmTextDivDivSmDiv>
                    </BtmProfileDivDiv>
                  </MainImgDivDiv>
                ))}
            </Slider>
          </BtmProfileImgDiv>
          <BtmProfileImgDiv>
            <BtmProfileTextNew>인기 해쉬태그 </BtmProfileTextNew>
            <MainTagBox>
              <MainTagBoxText>
                <MainTagBoxTextSpan> # 태그</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 감성 커버</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 드라이브</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 힙합</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 재즈</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 락</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 태그</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 감성 커버</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 드라이브</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 힙합</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 재즈</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 락</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 태그</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 감성 커버</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 드라이브</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 힙합</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 재즈</MainTagBoxTextSpan>
                <MainTagBoxTextSpan> # 락</MainTagBoxTextSpan>
              </MainTagBoxText>
            </MainTagBox>
          </BtmProfileImgDiv>
          <PlayerMain />
        </MainContainer>
      </MainContainerDiv>
    </Fragment>
  );
};

export default Main;
