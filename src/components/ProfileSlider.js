import { Fragment, useRef } from "react";
import Header from "./Header";

import styled from "styled-components";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { AiFillLike } from "react-icons/ai";

import { BsFillAlarmFill, BsFillArchiveFill,BsFillPlayCircleFill } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfileSlider = () => {
  const sliderRef = useRef();

  const settings = {
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
      <ProfileContainerDiv>
        <ProfileContainer>
          <ProfileImgDiv>
            <ProfileTextDiv>
              <ProfileTextNew>최신작품 </ProfileTextNew>
              <ProfileTextSingMakeDiv>
                <MdOutlineArrowForwardIos size={30} />
                <ProfileTextSinger>메이커</ProfileTextSinger>
                <ProfileTextMake>싱어</ProfileTextMake>
              </ProfileTextSingMakeDiv>
              <ProfileArrowDiv>
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
              </ProfileArrowDiv>
            </ProfileTextDiv>
            <Slider {...settings}>
              {Array(6)
                .fill("")
                .map(() => (
                  <ProfileImgDivDiv>
                    <Profileimg
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjg6vTEXL8y0oEnq67IOyZm2cIghFI3KTlg&usqp=CAU'
                      alt=''
                    />
                    <ImgMainBtmRight><BsFillPlayCircleFill size={25}/></ImgMainBtmRight>
                    <ImgTopLeft>나는 페페</ImgTopLeft>
                    <ImgTopRight>
                      <BsFillAlarmFill color='white' />
                    </ImgTopRight>
                    <ImgBtmLeft>
                      <AiFillLike color='white' />
                      372
                    </ImgBtmLeft>
                    <ImgBtmRight>
                      <BsFillArchiveFill color='white' />
                    </ImgBtmRight>
                  </ProfileImgDivDiv>
                ))}
            </Slider>
          </ProfileImgDiv>
        </ProfileContainer>
      </ProfileContainerDiv>
    </Fragment>
  );
};

export default ProfileSlider;

export const ProfileContainerDiv = styled.div`
  width: 100%;
  background-color: #eeeceb;
  display: flex;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
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

export const ProfileImgDiv = styled.div`
  width: 856px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileImgDivDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;

`;

export const ImgMainBtmRight = styled.div`
  position: absolute;
  bottom: 8%;
  right: 35%;
  display: block;
  ${ProfileImgDivDiv}:hover & {
    display: none;
    cursor: pointer;
  }
`;

export const ImgTopLeft = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  color: white;
  display: none;
  ${ProfileImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const ImgTopRight = styled.div`
  position: absolute;
  top: 8%;
  right: 35%;
  display: none;
  ${ProfileImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const ImgBtmLeft = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;
  display: none;
  ${ProfileImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const ImgBtmRight = styled.div`
  position: absolute;
  bottom: 7%;
  right: 35%;
  display: none;
  ${ProfileImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const Profileimg = styled.img`
  width: 167px;
  height: 167px;
  border-radius: 19px;
  ${ProfileImgDivDiv}:hover & {
    filter: brightness(50%);
  }
`;
export const ProfileTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 26px;
  margin-top: 23px;
`;

export const ProfileTextNew = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
`;

export const ProfileTextSinger = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-top: 3px;
`;

export const ProfileTextMake = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-top: 3px;
  color: rgba(204, 204, 204, 1);
`;

export const ProfileTextSingMakeDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 3px;
`;

export const ProfileArrowDiv = styled.div`
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
