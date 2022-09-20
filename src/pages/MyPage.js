// React
import { Fragment, useRef, useEffect, useState } from 'react';

// Zustand
import useMyPageStore from '../zustand/mypage';
import useMemberStore from '../zustand/member';
import useFollowStore from '../zustand/follow';

// Packages
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from 'jwt-decode';

// Utils
import { getCookie } from '../utils/cookie';

// Components
import Header from '../components/Header';
import Post from '../components/Post';
import PostBig from '../components/PostBig';

// Elements
import Button from '../elements/Button';

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
  MyTagBox,
  MyTagBoxTextSlide,
  MyTagBoxTextSlideDiv,
  MyTagBoxTextSpanSlide,
  MyTextDiv,
} from '../assets/styles/pages/MyPage.styled';
import {
  DisMakerMarke,
  DisSingerMarker,
  MakerMarke,
  SingerMarker,
} from '../assets/images/image';
import { useNavigate, useParams } from 'react-router-dom';
import useLikeStore from '../zustand/like';
import usePostStore from '../zustand/post';

const MyPage = () => {
  const getProfileInfo = useMyPageStore((state) => state.getProfileInfo);
  const profileInfo = useMyPageStore((state) => state.profileInfo);
  const profileInfoIsLoaded = useMyPageStore(
    (state) => state.profileInfoIsLoaded
  );

  const getUploadPost = useMyPageStore((state) => state.getUploadPost);
  const uploadPost = useMyPageStore((state) => state.uploadPost);
  const uploadPostIsLoaded = useMyPageStore((state) => state.uploadPostIsLoaded);

  const getLikePost = useMyPageStore((state) => state.getLikePost);
  const likePost = useMyPageStore((state) => state.likePost);
  const likePostIsLoaded = useMyPageStore((state) => state.likePostIsLoaded);

  const getFollowerList = usePostStore((state) => state.getFollowerList);
  const artistIsFollow = usePostStore((state) => state.artistIsFollow);
  const artistIsFollowIsLoaded = usePostStore(
    (state) => state.artistIsFollowIsLoaded
  );

  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);

  const follow = useFollowStore((state) => state.follow);

  // const [isLeftRef, setLeftREf] = useState(false);
  // const [isMidRef, setMidref] = useState(false);
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState('upload');

  const { nickname } = useParams();
  const navigate = useNavigate();

  // const leftRef = useRef();
  // const midRef = useRef();
  // const rightRef = useRef();
  const followButtonRef = useRef();

  const settings = {
    className: 'center',
    centerMode: true,
    slidesToShow: profileInfoIsLoaded ? profileInfo.hashtag.length : 0,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '10px',
    arrows: false,
    variableWidth: true,
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // setLeftREf(true);
    // leftRef.current.style.borderTopColor = 'black';
    // midRef.current.style.borderTopColor = 'transparent';
    // rightRef.current.style.borderTopColor = 'transparent';
    // leftRef.current.style.color = 'black';
    // midRef.current.style.color = 'rgba(180, 180, 180, 1)';
    // rightRef.current.style.color = 'rgba(180, 180, 180, 1)';
    getFollowerList().then((res) => {
      if (res) {
        getProfileInfo(nickname);
      }
    });
  }, [nickname]);

  useEffect(() => {
    if (category === 'upload') {
      getUploadPost({ nickname, page });
    } else {
      getLikePost({ nickname, page });
    }
  }, [page]);

  const categoryHandle = (state) => {
    switch (state) {
      case 'upload': {
        // leftRef.current.style.borderTopColor = 'black';
        // midRef.current.style.borderTopColor = 'transparent';
        // rightRef.current.style.borderTopColor = 'transparent';
        // leftRef.current.style.color = 'black';
        // midRef.current.style.color = 'rgba(180, 180, 180, 1)';
        // rightRef.current.style.color = 'rgba(180, 180, 180, 1)';
        // setLeftREf(true);
        // setMidref(false);
        setCategory('upload');
        setPage(0);
        break;
      }
      case 'like': {
        // leftRef.current.style.borderTopColor = 'transparent';
        // midRef.current.style.borderTopColor = 'black';
        // rightRef.current.style.borderTopColor = 'transparent';
        // leftRef.current.style.color = 'rgba(180, 180, 180, 1)';
        // midRef.current.style.color = 'black';
        // rightRef.current.style.color = 'rgba(180, 180, 180, 1)';
        // setLeftREf(false);
        // setMidref(true);
        setCategory('like');
        setPage(0);
        break;
      }
      // case 'save': {
      //   leftRef.current.style.borderTopColor = 'transparent';
      //   midRef.current.style.borderTopColor = 'transparent';
      //   rightRef.current.style.borderTopColor = 'black';
      //   leftRef.current.style.color = 'rgba(180, 180, 180, 1)';
      //   midRef.current.style.color = 'rgba(180, 180, 180, 1)';
      //   rightRef.current.style.color = 'black';
      //   setLeftREf(false);
      //   setMidref(false);
      //   break;
      // }
      default:
        break;
    }
  };

  const onHandleModify = () => {
    navigate('/myinfomodify');
  };

  const onHandleChat = () => {
    if (getCookie('authorization') === undefined) {
      alert('로그인 후에 이용 가능합니다.');
      navigate('/signin');
    } else {
      navigate('/chat');
    }
  };

  // useEffect(() => {
  //   leftRef.current.style.borderTopColor = 'black';
  //   leftRef.current.style.color = 'black';
  //   setLeftREf(true);
  // }, []);

  const onHandleFollow = () => {
    follow(nickname).then((res) => {
      if (res) {
        followButtonRef.current.innerText = '팔로잉';
        followButtonRef.current.style.backgroundColor = '#CC0000';
        toast.info(`${nickname.slice(0, 9)}님을 팔로우 하였습니다.`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1500,
          draggablePercent: 60,
          hideProgressBar: true,
        });
      } else {
        followButtonRef.current.innerText = '팔로우';
        followButtonRef.current.style.backgroundColor = '#28CA7C';
        toast.info(`${nickname.slice(0, 9)}님 팔로우를 취소하였습니다.`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1500,
          draggablePercent: 60,
          hideProgressBar: true,
        });
      }
    });
  };


  return (
    <Fragment>
      <Header />
      <ToastContainer />
      <MyContainerDiv>
        <MyContainer>
          <MyProfileContainer>
            <Myleft>
              <MyleftDiv>
                <MyleftDivImg
                  src={
                    profileInfo.imageUrl === null
                      ? profileImgArr[random]
                      : profileInfo.imageUrl === ''
                      ? profileImgArr[random]
                      : profileInfo.imageUrl
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
                        {profileInfoIsLoaded
                          ? profileInfo.nickname.slice(0, 9)
                          : ''}
                      </MyRightTopDivSpan>
                    </MyRightTopDivSpanDiv>
                    {profileInfo.singerPostCnt > 10 ? (
                      <img src={SingerMarker} backgrond='white' alt='이미지' />
                    ) : (
                      <img
                        src={DisSingerMarker}
                        backgrond='white'
                        alt='이미지'
                      />
                    )}
                    {profileInfo.makerPostCnt > 10 ? (
                      <img src={MakerMarke} backgrond='white' alt='이미지' />
                    ) : (
                      <img
                        src={DisMakerMarke}
                        backgrond='white'
                        alt='로고이미지'
                      />
                    )}

                    <MyRightTopBtmDiv>
                      <MyRightTopBtmDivSpan>
                        곡 작업 {profileInfo.allPostCnt}
                      </MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>
                        팔로워 {profileInfo.follower}
                      </MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>
                        팔로우 {profileInfo.following}
                      </MyRightTopBtmDivSpan>
                    </MyRightTopBtmDiv>
                  </MyRightTopDiv>
                  {getCookie('authorization') !== undefined ? (
                    jwt_decode(getCookie('authorization')).sub !==
                    profileInfo.nickname ? (
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
                          _onClick={onHandleChat}
                        />
                        {artistIsFollowIsLoaded ? (
                          artistIsFollow.indexOf(nickname) !== -1 ? (
                            <Button
                              _style={{
                                width: '122px',
                                height: '45px',
                                bg_color: '#cc0000',
                                bd_radius: '11px',
                                color: 'rgba(255, 255, 255, 1)',
                                ft_size: '12',
                                ft_weight: '700',
                              }}
                              _text={'팔로잉'}
                              _onClick={onHandleFollow}
                              _ref={followButtonRef}
                            />
                          ) : (
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
                              _onClick={onHandleFollow}
                              _ref={followButtonRef}
                            />
                          )
                        ) : (
                          <Button
                            _style={{
                              width: '122px',
                              height: '45px',
                              bg_color: '#cecece',
                              bd_radius: '11px',
                              color: 'rgba(255, 255, 255, 1)',
                              ft_size: '12',
                              ft_weight: '700',
                            }}
                            _text={''}
                            _ref={followButtonRef}
                          />
                        )}
                      </MyRightTopButDiv>
                    ) : (
                      <MyRightTopButDiv>
                        <MyRightTopButDivNotMember>
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
                            _onClick={onHandleModify}
                          />
                        </MyRightTopButDivNotMember>
                      </MyRightTopButDiv>
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
                        _onClick={onHandleChat}
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
                      {profileInfoIsLoaded ? (
                        profileInfo.hashtag === [] ? (
                          <Fragment></Fragment>
                        ) : (
                          profileInfo.hashtag.map((x, idx) => {
                            return (
                              <MyTagBoxTextSlideDiv key={idx}>
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
                    {profileInfo.introduce !== null ? (
                      <Fragment>{profileInfo.introduce}</Fragment>
                    ) : (
                      <Fragment>
                        아직 자기 소개를 작성하지 않았습니다 -ˋˏ * ٩( ◡̉̈ )۶ * ˎˊ-
                      </Fragment>
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
              {uploadPostIsLoaded ? (
                uploadPost.map((x) => (
                  <Post
                    key={x.postId}
                    imageUrl={x.imageUrl}
                    likes={x.likeCount}
                    nickname={x.nickname}
                    title={x.title}
                    collaborate={x.collaborate}
                    mediaUrl={x.mediaUrl}
                    postId={x.postId}
                    position={x.position}
                  />
                ))
              ) : (
                <Fragment></Fragment>
              )}
            </MyTextDiv>
          </MyMidTextDiv>
          <MyBtmTextDiv>
            <MyBtmTextDivDiv>
              <MyBtmDataDiv onClick={() => categoryHandle('upload')}>
                작업물
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            <MyBtmTextDivDiv>
              <MyBtmDataDiv onClick={() => categoryHandle('like')}>
                좋아요
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            {/* <MyBtmTextDivDiv>
              <MyBtmDataDiv onClick={() => categoryHandle('save')}>
                보관함
              </MyBtmDataDiv>
            </MyBtmTextDivDiv> */}
          </MyBtmTextDiv>

          <MyBtmImgDiv>
            {category === 'upload' ? (
              uploadPostIsLoaded ? (
                uploadPost.map((x) => {
                  return (
                    <PostBig
                      key={x.postId}
                      imageUrl={x.imageUrl}
                      likeCount={x.likeCount}
                      nickname={x.nickname}
                      title={x.title}
                      collaborate={x.collaborate}
                      mediaUrl={x.mediaUrl}
                      postId={x.postId}
                      position={x.position}
                    />
                  );
                })
              ) : (
                <></>
              )
            ) : likePostIsLoaded ? (
              likePost.map((x) => (
                <PostBig
                  key={x.postId}
                  imageUrl={x.imageUrl}
                  likeCount={x.likeCount}
                  nickname={x.nickname}
                  title={x.title}
                  collaborate={x.collaborate}
                  mediaUrl={x.mediaUrl}
                  postId={x.postId}
                  position={x.position}
                />
              ))
            ) : (
              <Fragment></Fragment>
            )}
          </MyBtmImgDiv>
        </MyContainer>
      </MyContainerDiv>
    </Fragment>
  );
};

export default MyPage;
