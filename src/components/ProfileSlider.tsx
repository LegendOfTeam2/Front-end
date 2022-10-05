// React
import { Fragment, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

//zustand
import useLikeStore from '../zustand/like';

// Packages
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Utils
import { getCookie } from '../utils/cookie';

// Components
import PostSlider from './PostSlider';

// Assests
import {
  ArowLeft,
  ArowRight,
  ProfileContainer,
  ProfileContainerDiv,
  ProfileImgDiv,
  ProfileTextDiv,
  ProfileTextMake,
  ProfileTextNew,
  ProfileTextSingMakeDiv,
} from '../assets/styles/components/ProfileSlider.styled';
import { LeftArrow, RightArrow } from '../assets/images/image';

interface ProfileSliderProps {
  postList: any;
  name: any;
  position: any;
  ctg: any;
}

const ProfileSlider = ({
  postList,
  name,
  position,
  ctg,
}: ProfileSliderProps) => {
  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);

  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );

  const sliderRef : any = useRef();

  const navigate = useNavigate();

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

  const goToPosition = () => {
    navigate(`/morepage/${position}/${ctg}`);
  };

  return (
    <Fragment>
      <ToastContainer />
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
                  postList.map((x : any, idx : any) => {
                    if (
                      [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                    ) {
                      return (
                        <PostSlider
                          key={x.postId}
                          imageUrl={x.imageUrl.imageUrl}
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
                          key={x.postId}
                          imageUrl={x.imageUrl.imageUrl}
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
                  <Fragment />
                )
              ) : (
                postList.map((x : any, idx : any) => {
                  return (
                    <PostSlider
                      key={x.postId}
                      imageUrl={x.imageUrl.imageUrl}
                      nickname={x.nickname}
                      title={x.title}
                      collaborate={x.collaborate}
                      mediaUrl={x.mediaUrl.mediaUrl}
                      postId={x.postId}
                      position={x.position}
                      likeState={null}
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
