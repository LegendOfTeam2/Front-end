// React
import { Fragment, useRef } from "react";
// Packages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import {
  BsFillAlarmFill,
  BsFillArchiveFill,
  BsFillPlayCircleFill,
} from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assests
import {
  ImgBtmLeft,
  ImgBtmRight,
  ImgMainBtmRight,
  ImgTopLeft,
  ImgTopRight,
  ProfileArrowDiv,
  ProfileContainer,
  ProfileContainerDiv,
  ProfileImgDiv,
  ProfileTextDiv,
  ProfileTextMake,
  ProfileTextNew,
  ProfileTextSinger,
  ProfileTextSingMakeDiv,
  Profileimg,
  ProfileImgDivDiv,
} from "../assets/styles/components/ProfileSlider.styled";

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
                    <ImgMainBtmRight>
                      <BsFillPlayCircleFill size={25} />
                    </ImgMainBtmRight>
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
