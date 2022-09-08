// React
import { Fragment, useRef } from 'react';
// Packages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Assests
import {
  ArowDiv,
  ArowLeft,
  ArowRight,
  ProfileArrowDiv,
  ProfileContainer,
  ProfileContainerDiv,
  ProfileImgDiv,
  ProfileTextDiv,
  ProfileTextMake,
  ProfileTextNew,
  ProfileTextSingMakeDiv,
} from '../assets/styles/components/ProfileSlider.styled';

import PostSlider from './PostSlider';

const ProfileSlider = (props) => {
  const sliderRef = useRef();

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    centerPadding: '-30px',
    ref: sliderRef,
    slideToScroll: 1,
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
              <ProfileArrowDiv></ProfileArrowDiv>
            </ProfileTextDiv>

            <ArowLeft>
              <MdOutlineArrowBackIosNew
                className='icon-prev'
                color='rgba(180, 180, 180, 1)'
                size={30}
                onClick={() => sliderRef.current.slickPrev()}
              />
            </ArowLeft>
            <Slider {...settings}>
              {Array(6)
                .fill('')
                .map(() => (
                  <PostSlider width='167' height='167' />
                ))}
            </Slider>
            <ArowRight>
              <MdOutlineArrowForwardIos
                className='icon-next'
                color='rgba(180, 180, 180, 1)'
                size={30}
                onClick={() => sliderRef.current.slickNext()}
              />
            </ArowRight>
          </ProfileImgDiv>
        </ProfileContainer>
      </ProfileContainerDiv>
    </Fragment>
  );
};

export default ProfileSlider;
