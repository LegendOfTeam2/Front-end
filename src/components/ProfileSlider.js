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
// Components
import PostSlider from "./PostSlider";
// Assests
import {
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
} from "../assets/styles/components/ProfileSlider.styled";

const ProfileSlider = ({postList, name}) => {
  const sliderRef = useRef();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    centerPadding: "-30px",
    ref: sliderRef,
    slideToScroll: 1,
    draggable: true,
  };
  return (
    <Fragment>
      <ProfileContainerDiv>
        <ProfileContainer>
          <ProfileImgDiv>
            <ProfileTextDiv>
              <ProfileTextNew>{name}</ProfileTextNew>
              <ProfileTextSingMakeDiv>
                <ProfileTextMake>더보기</ProfileTextMake>
              </ProfileTextSingMakeDiv>
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
              {postList.map((x) => (
                  <PostSlider width='167' height='167' key={x.postId}
                  imageUrl={x.imageUrl.imageUrl}
                  likes={x.likes}
                  nickname={x.nickname}
                  title={x.title}
                  collaborate={x.collaborate}
                  mediaUrl={x.mediaUrl.mediaUrl}
                  postId={x.postId}
                  position={x.position} />
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
