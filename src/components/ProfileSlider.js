// React
import { Fragment, useRef } from 'react';
//zustand
import useLikeStore from '../zustand/like';
// Packages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Components
import PostSlider from './PostSlider';
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
} from '../assets/styles/components/ProfileSlider.styled';
import { useNavigate } from 'react-router-dom';
import { LeftArrow, RightArrow } from '../assets/images/image';
import { getCookie } from '../utils/cookie';

const ProfileSlider = ({ postList, name, position, ctg }) => {
  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );
  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);

  const sliderRef = useRef();
  const navigate = useNavigate();

  const goToPosition = () => {
    navigate(`/morepage/${position}/${ctg}`);
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    centerPadding: '-30px',
    ref: sliderRef,
    slideToScroll: 1,
    draggable: true,
    initialSlide: 2,
  };
  return (
    <Fragment>
      <ProfileContainerDiv>
        <ProfileContainer>
          <ProfileImgDiv>
            <ProfileTextDiv>
              <ProfileTextNew>{name}</ProfileTextNew>
              <ProfileTextSingMakeDiv>
                <ProfileTextMake onClick={goToPosition}>더보기</ProfileTextMake>
              </ProfileTextSingMakeDiv>
            </ProfileTextDiv>
            <ArowLeft>
              <img
                src={LeftArrow}
                alt='왼쪽 화살표'
                onClick={() => sliderRef.current.slickPrev()}
              />
            </ArowLeft>
            <Slider {...settings}>
              {getCookie('authorization') !== undefined ? (
                singerIsLikeIsLoaded ? (
                  postList.map((x, idx) => {
                    if (
                      [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                    ) {
                      return (
                        <PostSlider
                          ket={idx}
                          width='167'
                          height='167'
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
                        <PostSlider
                          ket={idx}
                          width='167'
                          height='167'
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
                  })
                ) : (
                  <></>
                )
              ) : (
                postList.map((x, idx) => {
                  return (
                    <PostSlider
                      ket={idx}
                      width='167'
                      height='167'
                      key={x.postId}
                      imageUrl={x.imageUrl.imageUrl}
                      likes={x.likes}
                      nickname={x.nickname}
                      title={x.title}
                      collaborate={x.collaborate}
                      mediaUrl={x.mediaUrl.mediaUrl}
                      postId={x.postId}
                      position={x.position}
                    />
                  );
                })
              )}
            </Slider>
            <ArowRight>
              <img
                src={RightArrow}
                alt='오른쪽 화살표'
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
