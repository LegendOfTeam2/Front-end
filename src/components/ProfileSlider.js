// React
import { Fragment, useRef } from "react";
// Packages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assests
import {
  ProfileArrowDiv,
  ProfileContainer,
  ProfileContainerDiv,
  ProfileImgDiv,
  ProfileTextDiv,
  ProfileTextMake,
  ProfileTextNew,
  ProfileTextSinger,
  ProfileTextSingMakeDiv,
} from "../assets/styles/components/ProfileSlider.styled";

import Post from "./Post";

const ProfileSlider = (props) => {
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
              <ProfileTextNew>{props.GrandTitle}</ProfileTextNew>
              <ProfileTextSingMakeDiv>
                <ProfileTextMake>더보기</ProfileTextMake>
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
                  <Post/>
                ))}
            </Slider>
          </ProfileImgDiv>
        </ProfileContainer>
      </ProfileContainerDiv>
    </Fragment>
  );
};

export default ProfileSlider;
