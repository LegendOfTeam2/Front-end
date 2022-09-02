import { Fragment, useEffect, useRef, useState } from "react";
import Header from "../components/Header";

import styled from "styled-components";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileSlider from "../components/ProfileSlider";
import Button from "../elements/Button";
import PlayerMain from "../components/audioplayer/PlayerMain";

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
                      {" "}
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
                  <ProfileImgDivDiv>
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
                  </ProfileImgDivDiv>
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
            <PlayerMain/>
        </MainContainer>
      </MainContainerDiv>
    </Fragment>
  );
};

export default Main;

export const MainContainerDiv = styled.div`
  width: 100%;
  background-color: #eeeceb;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 175px;
`;

export const MainContainer = styled.div`
  width: ${(props) => props.theme.deviceSizes.tabletL};
  height: auto;
  display: flex;
  flex-direction: column;
  .center {
    /* center 모드일때 center 외 속성에게 사용 */
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(0.99);
  }
`;

export const MainImgDiv = styled.div`
  width: 100%;
  margin-bottom: 26px;
  .slick-list {
    margin-right: -40px;
  }
`;

export const MainImgDivDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const MainImgDivDivDiv = styled.div`
  position: absolute;
  top: 8%;
  left: 4%;
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;

export const MainImgDivBtnDiv = styled.div`
  position: absolute;
  bottom: 8%;
  right: 8%;
`;

export const MainImgDivImg = styled.div`
  width: 856px;
  height: 261px;
  border-radius: 24px;
  opacity: 0.5;
  background-size: cover;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
`;

export const BtmProfileImgDiv = styled.div`
  width: 856px;
  height: auto;
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
`;

export const BtmProfileTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const BtmProfileDivDiv = styled.div`
  width: 167px;
  height: auto;
  border: 1px solid #cccccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const BtmProfileDivDivDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 21px;
  margin-bottom: 10px;
`;

export const BtmTextDivDivDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;
export const BtmTextDivSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const BtmTextDivDivSmDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 21px;
`;
export const BtmTextDivSmSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: rgba(204, 204, 204, 1);
`;

export const Profileimg = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;
`;
export const ProfileImgDivDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 26px;
  margin-top: 23px;
  &:hover {
      cursor: pointer;
    }
`;

export const BtmProfileTextNew = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
`;

export const BtmProfileTextSinger = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-top: 3px;
  &:hover {
      cursor: pointer;
    }
`;

export const BtmProfileTextMake = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-top: 3px;
  color: rgba(204, 204, 204, 1);
  &:hover {
      cursor: pointer;
    }
`;

export const BtmProfileTextSingMakeDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 3px;
`;

export const BtmProfileArrowDiv = styled.div`
  margin-left: auto;
  gap: 30px;
  margin-top: 4px;
  .icon-prev {
    size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
  .icon-next {
    size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MainTagBox = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin-bottom: 120px;
  width: 100%;
`;

export const MainTagBoxText = styled.div`
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MainTagBoxTextSpan = styled.span`
  width: auto;
  height: auto;
  padding: 9px;
  border: 2px solid #000000;
  border-radius: 24px;
  &:hover {
    cursor: pointer;
    background-color: #aaa4a4;
  }
`;
