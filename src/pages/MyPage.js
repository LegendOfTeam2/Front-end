// React
import { Fragment, useRef, useEffect, useState } from 'react';
// Zustand
import useMyPageStore from '../zustand/mypage';
import useMemberStore from '../zustand/member';
// Packages
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Utils
import Button from '../elements/Button';
import { getCookie } from '../utils/cookie';
// Pages
import jwt_decode from 'jwt-decode';
// Components
import Header from '../components/Header';
import Post from '../components/Post';
import PostBig from '../components/PostBig';
// Assests
import {
  MyBtmDataDiv,
  MyBtmImgDiv,
  MyBtmTextDiv,
  MyBtmTextDivDiv,
  MyContainer,
  MyContainerDiv,
  Myleft,
  MyleftDiv,
  MyleftDivImg,
  MyMidTextDiv,
  MyMidTextDivDiv,
  MyMidTextDivDivSpan,
  MyProfileContainer,
  MyRight,
  MyRightBtmDiv,
  MyRightBtmDivSpan,
  MyRightTopBtmDiv,
  MyRightTopBtmDivSpan,
  MyRightTopButDiv,
  MyRightTopButDivNotMember,
  MyRightTopDiv,
  MyRightTopDivCl,
  MyRightTopDivClDiv,
  MyRightTopDivSpan,
  MyRightTopDivSpanDiv,
  MyRightTopIconDiv,
  MyTagBox,
  MyTagBoxTextSlide,
  MyTagBoxTextSlideDiv,
  MyTagBoxTextSpanSlide,
  MyTextDiv,
} from '../assets/styles/pages/MyPage.styled';
import {
  albumCover_1,
  albumCover_2,
  albumCover_3,
  DisMakerMarke,
  DisSingerMarker,
} from '../assets/images/image';
import { useParams } from 'react-router-dom';

const MyPage = () => {
  const [page, setPage] = useState(0);
  const [isLeftRef, setLeftREf] = useState(false);
  const [isMidRef, setMidref] = useState(false);
  const getProfilPost = useMyPageStore((state) => state.getProfilPost);
  const profilPost = useMyPageStore((state) => state.profilPost);
  const profilPosteIsLoaded = useMyPageStore(
    (state) => state.profilPosteIsLoaded
  );
  const getUploadPost = useMyPageStore((state) => state.getUploadPost);
  const getLikePost = useMyPageStore((state) => state.getLikePost);
  const likePost = useMyPageStore((state) => state.likePost);

  const likePostIsLoaded = useMyPageStore((state) => state.likePostIsLoaded);
  const pofilUploadPost = useMyPageStore((state) => state.pofilUploadPost);

  const playListPostIsLoaded = useMyPageStore(
    (state) => state.playListPostIsLoaded
  );
  const nickName = useParams();

  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const leftRef = useRef();
  const midRef = useRef();
  const rightRef = useRef();

  // const handleScroll = () => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     setPage((page) => page + 1);
  //   }
  // };

  useEffect(() => {
    getProfilPost(nickName);
    getUploadPost(nickName);
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  // useEffect(() => {
  // getUploadPost(page);
  // }, [page]);

  const settings = {
    className: 'center',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '10px',
    arrows: false,
    variableWidth: true,
  };
  const categoryHandle = (state) => {
    switch (state) {
      case 'work': {
        leftRef.current.style.borderTopColor = 'black';
        midRef.current.style.borderTopColor = 'transparent';
        rightRef.current.style.borderTopColor = 'transparent';
        leftRef.current.style.color = 'black';
        midRef.current.style.color = 'rgba(180, 180, 180, 1)';
        rightRef.current.style.color = 'rgba(180, 180, 180, 1)';
        setLeftREf(true);
        setMidref(false);
        break;
      }
      case 'like': {
        leftRef.current.style.borderTopColor = 'transparent';
        midRef.current.style.borderTopColor = 'black';
        rightRef.current.style.borderTopColor = 'transparent';
        leftRef.current.style.color = 'rgba(180, 180, 180, 1)';
        midRef.current.style.color = 'black';
        rightRef.current.style.color = 'rgba(180, 180, 180, 1)';
        setLeftREf(false);
        setMidref(true);
        getLikePost(nickName);
        break;
      }
      case 'save': {
        leftRef.current.style.borderTopColor = 'transparent';
        midRef.current.style.borderTopColor = 'transparent';
        rightRef.current.style.borderTopColor = 'black';
        leftRef.current.style.color = 'rgba(180, 180, 180, 1)';
        midRef.current.style.color = 'rgba(180, 180, 180, 1)';
        rightRef.current.style.color = 'black';
        setLeftREf(false);
        setMidref(false);
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    leftRef.current.style.borderTopColor = 'black';
    leftRef.current.style.color = 'black';
    setLeftREf(true);
  }, []);

  return (
    <Fragment>
      <Header />
      <MyContainerDiv>
        <MyContainer>
          <MyProfileContainer>
            <Myleft>
              <MyleftDiv>
                <MyleftDivImg
                  src={
                    profilPost.imageUrl === null
                      ? profileImgArr[random]
                      : profilPost.imageUrl
                  }
                  alt='프로필 이미지'
                />
              </MyleftDiv>
            </Myleft>

            <MyRight>
              <MyRightTopDivCl>
                <MyRightTopDivClDiv>
                  <MyRightTopDiv>
                    <MyRightTopDivSpanDiv>
                      <MyRightTopDivSpan>
                        {profilPost.nickname}
                      </MyRightTopDivSpan>
                    </MyRightTopDivSpanDiv>
                    <img src={DisSingerMarker} backgrond='white' alt='이미지' />
                    <img
                      src={DisMakerMarke}
                      backgrond='white'
                      alt='로고이미지'
                    />

                    <MyRightTopBtmDiv>
                      <MyRightTopBtmDivSpan>
                        곡 작업 {profilPost.myPostConunt}
                      </MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>
                        팔로워 {profilPost.follower}
                      </MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>
                        팔로우 {profilPost.following}
                      </MyRightTopBtmDivSpan>
                    </MyRightTopBtmDiv>
                  </MyRightTopDiv>
                  {getCookie('authorization') !== undefined ? (
                    jwt_decode(getCookie('authorization')).sub !==
                    'KAKAO775572255' ? (
                      <MyRightTopButDiv>
                        <Button
                          _style={{
                            width: '122px',
                            height: '45px',
                            bg_color: '#E7E7E7',
                            bd_radius: '11px',
                            color: '#121212',
                            ft_size: '12',
                            ft_weight: '700',
                          }}
                          _text={'메세지'}
                        />
                        <Button
                          _style={{
                            width: '122px',
                            height: '45px',
                            bg_color: '#28CA7C',
                            bd_radius: '11px',
                            color: 'rgba(255, 255, 255, 1)',
                            ft_size: '12',
                            ft_weight: '700',
                          }}
                          _text={'팔로우'}
                        />
                      </MyRightTopButDiv>
                    ) : (
                      <MyRightTopButDivNotMember>
                        {' '}
                        <Button
                          _style={{
                            width: '261px',
                            height: '45px',
                            bg_color: '#28CA7C',
                            bd_radius: '11px',
                            color: 'rgba(255, 255, 255, 1)',
                            ft_size: '12',
                            ft_weight: '700',
                          }}
                          _text={'프로필 수정'}
                        />
                      </MyRightTopButDivNotMember>
                    )
                  ) : (
                    <MyRightTopButDiv>
                      <Button
                        _style={{
                          width: '122px',
                          height: '45px',
                          bg_color: '#E7E7E7',
                          bd_radius: '11px',
                          color: '#121212',
                          ft_size: '12',
                          ft_weight: '700',
                        }}
                        _text={'메세지'}
                      />
                      <Button
                        _style={{
                          width: '122px',
                          height: '45px',
                          bg_color: '#28CA7C',
                          bd_radius: '11px',
                          color: 'rgba(255, 255, 255, 1)',
                          ft_size: '12',
                          ft_weight: '700',
                        }}
                        _text={'팔로우'}
                      />
                    </MyRightTopButDiv>
                  )}
                </MyRightTopDivClDiv>
                <MyTagBox>
                  <MyTagBoxTextSlide>
                    <Slider {...settings}>
                      {profilPosteIsLoaded ? (
                        profilPost.hashtag === [] ? (
                          <Fragment></Fragment>
                        ) : (
                          profilPost.hashtag.map((x) => {
                            return (
                              <MyTagBoxTextSlideDiv>
                                <MyTagBoxTextSpanSlide>
                                  {x}
                                </MyTagBoxTextSpanSlide>
                              </MyTagBoxTextSlideDiv>
                            );
                          })
                        )
                      ) : (
                        <Fragment></Fragment>
                      )}
                    </Slider>
                  </MyTagBoxTextSlide>
                </MyTagBox>
                <MyRightBtmDiv>
                  <MyRightBtmDivSpan>
                    {profilPost.introduce !== null ? (
                      <>{profilPost.introduce}</>
                    ) : (
                      <>
                        아직 자기 소개를 작성하지 않았습니다 -ˋˏ * ٩( ◡̉̈ )۶ * ˎˊ-
                      </>
                    )}
                  </MyRightBtmDivSpan>
                </MyRightBtmDiv>
              </MyRightTopDivCl>
            </MyRight>
          </MyProfileContainer>
          <MyMidTextDiv>
            <MyMidTextDivDiv>
              <MyMidTextDivDivSpan>메인 게시물</MyMidTextDivDivSpan>
            </MyMidTextDivDiv>
            <MyTextDiv>
              {pofilUploadPost.map((x) => (
                <Post
                  key={x.postId}
                  imageUrl={x.imageUrl}
                  likes={x.likeCount}
                  nickname={x.nickname}
                  title={x.title}
                  collaborate={x.collaborate}
                  mediaUrl={x.mediaUrl.mediaUrl}
                  postId={x.postId}
                />
              ))}
            </MyTextDiv>
          </MyMidTextDiv>
          <MyBtmTextDiv>
            <MyBtmTextDivDiv ref={leftRef}>
              <MyBtmDataDiv onClick={() => categoryHandle('work')}>
                작업물
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            <MyBtmTextDivDiv ref={midRef}>
              <MyBtmDataDiv onClick={() => categoryHandle('like')}>
                좋아요
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            <MyBtmTextDivDiv ref={rightRef}>
              <MyBtmDataDiv onClick={() => categoryHandle('save')}>
                보관함
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
          </MyBtmTextDiv>

          <MyBtmImgDiv>
            {isLeftRef ? (
              pofilUploadPost.map((x) => (
                <PostBig
                  key={x.postId}
                  imageUrl={x.imageUrl}
                  likeCount={x.likeCount}
                  nickname={x.nickname}
                  title={x.title}
                  collaborate={x.collaborate}
                  mediaUrl={x.mediaUrl.mediaUrl}
                  postId={x.postId}
                />
              ))
            ) : (
              <></>
            )}

            {isMidRef ? (
              likePost.map((x) => (
                <PostBig
                  key={x.postId}
                  imageUrl={x.imageUrl}
                  likeCount={x.likeCount}
                  nickname={x.nickname}
                  title={x.title}
                  collaborate={x.collaborate}
                  mediaUrl={x.mediaUrl.mediaUrl}
                  postId={x.postId}
                />
              ))
            ) : (
              <></>
            )}
          </MyBtmImgDiv>
        </MyContainer>
      </MyContainerDiv>
    </Fragment>
  );
};

export default MyPage;
