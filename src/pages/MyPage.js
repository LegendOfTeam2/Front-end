// React
import { Fragment, useEffect, useState } from 'react';

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
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

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
  NaviContainer,
  NaviIconBox,
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
  MyBadgeContainer,
  MyIntroContainer,
  MyIntroBox,
  MyIntroText,
  MyPostContainer,
  MyBtmTextDivDivSelect,
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
  const mainPost = useMyPageStore((state) => state.mainPost);

  const getProfileInfo = useMyPageStore((state) => state.getProfileInfo);
  const profileInfo = useMyPageStore((state) => state.profileInfo);
  const profileInfoIsLoaded = useMyPageStore(
    (state) => state.profileInfoIsLoaded
  );

  const getUploadPost = useMyPageStore((state) => state.getUploadPost);
  const uploadPost = useMyPageStore((state) => state.uploadPost);
  const uploadPostIsLoaded = useMyPageStore(
    (state) => state.uploadPostIsLoaded
  );

  const getLikePost = useMyPageStore((state) => state.getLikePost);
  const likePost = useMyPageStore((state) => state.likePost);
  const likePostIsLoaded = useMyPageStore((state) => state.likePostIsLoaded);

  const getFollowerList = usePostStore((state) => state.getFollowerList);
  const artistIsFollowIsLoaded = usePostStore(
    (state) => state.artistIsFollowIsLoaded
  );

  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);

  const follow = useFollowStore((state) => state.follow);

  const [category, setCategory] = useState('upload');
  const [isFollow, setIsFollow] = useState(false);

  const { nickname } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    getFollowerList().then((res) => {
      if (res.success) {
        const tempFollowerArr = res.data.map((element) => {
          return element.nickname;
        })
        if(tempFollowerArr.indexOf(nickname) !== -1) setIsFollow(true);
        getProfileInfo(nickname);
      }
    });
  }, [nickname]);

  useEffect(() => {
    if (category === 'upload') {
      getUploadPost(nickname);
    } else {
      getLikePost(nickname);
    }
  }, [category]);

  const onHandleCategory = (state) => {
    switch (state) {
      case 'upload': {
        setCategory('upload');
        break;
      }
      case 'like': {
        setCategory('like');
        break;
      }
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

  const onHandleFollow = () => {
    if(getCookie('authorization') !== undefined) {
      follow(nickname).then((res) => {
        if (res) {
          setIsFollow(true);
          toast.info(`${nickname.slice(0, 9)}님을 팔로우 하였습니다.`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1500,
            draggablePercent: 60,
            hideProgressBar: true,
          });
        } else {
          setIsFollow(false);
          toast.info(`${nickname.slice(0, 9)}님 팔로우를 취소하였습니다.`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1500,
            draggablePercent: 60,
            hideProgressBar: true,
          });
        }
      });
    } else {
      toast.warning(`로그인 후에 이용 가능합니다.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1500,
        draggablePercent: 60,
        hideProgressBar: true,
      });
    }
  };

  return (
    <Fragment>
      <Header />
      <ToastContainer />
      <MyContainerDiv>
        <MyContainer>
          <NaviContainer>
            <NaviIconBox onClick={() => navigate(-1)}>
              <MdOutlineArrowBackIosNew className='icon' />
            </NaviIconBox>
          </NaviContainer>
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
                    <MyRightTopBtmDiv>
                      <MyRightTopBtmDivSpan>
                        곡 작업 {profileInfo.allPostCnt}
                      </MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>|</MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>
                        팔로워 {profileInfo.follower}
                      </MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>|</MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>
                        팔로우 {profileInfo.following}
                      </MyRightTopBtmDivSpan>
                    </MyRightTopBtmDiv>
                  </MyRightTopDiv>
                  <MyBadgeContainer>
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
                  </MyBadgeContainer>
                  {getCookie('authorization') !== undefined ? (
                    jwt_decode(getCookie('authorization')).sub !==
                    profileInfo.nickname ? (
                      <MyRightTopButDiv>
                        {artistIsFollowIsLoaded ? (
                          isFollow ? (
                            <Button
                              _style={{
                                width: '280px',
                                height: '42px',
                                bg_color: '#cc0000',
                                bd_radius: '11px',
                                color: 'rgba(255, 255, 255, 1)',
                                ft_size: '15',
                                ft_weight: '700',
                              }}
                              _text={'팔로잉'}
                              _onClick={onHandleFollow}
                            />
                          ) : (
                            <Button
                              _style={{
                                width: '280px',
                                height: '42px',
                                bg_color: '#28CA7C',
                                bd_radius: '11px',
                                color: 'rgba(255, 255, 255, 1)',
                                ft_size: '15',
                                ft_weight: '700',
                              }}
                              _text={'팔로우'}
                              _onClick={onHandleFollow}
                            />
                          )
                        ) : (
                          <Fragment></Fragment>
                        )}
                        <Button
                          _style={{
                            width: '280px',
                            height: '42px',
                            bg_color: '#E7E7E7',
                            bd_radius: '11px',
                            color: '#121212',
                            ft_size: '15',
                            ft_weight: '700',
                          }}
                          _text={'메시지 보내기'}
                          _onClick={onHandleChat}
                        />
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
                          width: '280px',
                          height: '45px',
                          bg_color: '#28CA7C',
                          bd_radius: '11px',
                          color: 'rgba(255, 255, 255, 1)',
                          ft_size: '15',
                          ft_weight: '700',
                        }}
                        _onClick={onHandleFollow}
                        _text={'팔로우'}
                      />
                      <Button
                        _style={{
                          width: '280px',
                          height: '45px',
                          bg_color: '#E7E7E7',
                          bd_radius: '11px',
                          color: '#121212',
                          ft_size: '15',
                          ft_weight: '700',
                        }}
                        _onClick={onHandleChat}
                        _text={'메시지 보내기'}
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
                                  # {x}
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
              </MyRightTopDivCl>
            </MyRight>
          </MyProfileContainer>
          <MyIntroContainer>
            <MyIntroBox>
              <MyIntroText>
                {profileInfo.introduce !== null ? (
                  <Fragment>{profileInfo.introduce}</Fragment>
                ) : (
                  <Fragment>
                    아직 자기 소개를 작성하지 않았습니다 -ˋˏ * ٩( ◡̉̈ )۶ * ˎˊ-
                  </Fragment>
                )}
              </MyIntroText>
            </MyIntroBox>
          </MyIntroContainer>
          <MyMidTextDiv>
            <MyMidTextDivDiv>
              <MyMidTextDivDivSpan>메인 작업물</MyMidTextDivDivSpan>
            </MyMidTextDivDiv>
            <MyTextDiv>
              {uploadPostIsLoaded ? (
                mainPost.map((x, idx) => {
                  if (idx < 4) {
                    return (
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
                    );
                  }
                })
              ) : (
                <Fragment></Fragment>
              )}
            </MyTextDiv>
          </MyMidTextDiv>
          <MyPostContainer>
            <MyBtmTextDiv>
              {category === 'upload' ? (
                <Fragment>
                  <MyBtmTextDivDivSelect>
                    <MyBtmDataDiv onClick={() => onHandleCategory('upload')}>
                      작업물
                    </MyBtmDataDiv>
                  </MyBtmTextDivDivSelect>
                  <MyBtmTextDivDiv>
                    <MyBtmDataDiv onClick={() => onHandleCategory('like')}>
                      좋아요
                    </MyBtmDataDiv>
                  </MyBtmTextDivDiv>
                </Fragment>
              ) : (
                <Fragment>
                  <MyBtmTextDivDiv>
                    <MyBtmDataDiv onClick={() => onHandleCategory('upload')}>
                      작업물
                    </MyBtmDataDiv>
                  </MyBtmTextDivDiv>
                  <MyBtmTextDivDivSelect>
                    <MyBtmDataDiv onClick={() => onHandleCategory('like')}>
                      좋아요
                    </MyBtmDataDiv>
                  </MyBtmTextDivDivSelect>
                </Fragment>
              )}
            </MyBtmTextDiv>

            {category === 'upload' ? (
              uploadPostIsLoaded ? (
                <MyBtmImgDiv>
                  {uploadPost.map((x) => (
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
                  ))}
                </MyBtmImgDiv>
              ) : (
                <></>
              )
            ) : likePostIsLoaded ? (
              <MyBtmImgDiv>
                {likePost.map((x) => (
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
                ))}
              </MyBtmImgDiv>
            ) : (
              <Fragment></Fragment>
            )}
          </MyPostContainer>
        </MyContainer>
      </MyContainerDiv>
    </Fragment>
  );
};

export default MyPage;
