// React
import { Fragment, useEffect, useState } from 'react';

// Zustand
import useMyPageStore from '../zustand/mypage';
import useMemberStore from '../zustand/member';
import useFollowStore from '../zustand/follow';
import useChatStore from '../zustand/chat';
import useLikeStore from '../zustand/like';
import usePostStore from '../zustand/post';
import usePlayerStore from '../zustand/player';

// Packages
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from 'jwt-decode';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

// Utils
import { getCookie } from '../utils/cookie';
import { warning, info } from '../utils/toast';

// Components
import Header from '../components/Header';
import Post from '../components/Post';
import PostBig from '../components/PostBig';
import NoticeModal from '../components/modal/NoticeModal';

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
  SingerMarker1,
  SingerMarker2,
  SingerMarker3,
  SingerMarker4,
  SingerMarker5,
  SingerMarker6,
  SingerMarker7,
  SingerMarker8,
  SingerMarker9,
  SingerMarker10,
  MakerMarker1,
  MakerMarker2,
  MakerMarker3,
  MakerMarker4,
  MakerMarker5,
  MakerMarker6,
  MakerMarker7,
  MakerMarker8,
  MakerMarker9,
  MakerMarker10,
} from '../assets/images/image';

const MyPage = () => {
  const mainPost = useMyPageStore((state) => state.mainPost);
  const getProfileInfo = useMyPageStore((state) => state.getProfileInfo);
  const profileInfo = useMyPageStore((state) => state.profileInfo);
  const getSingerLikePost = useLikeStore((state) => state.getSingerLikePost);
  const getMakerLikePost = useLikeStore((state) => state.getMakerLikePost);
  const getUploadPost = useMyPageStore((state) => state.getUploadPost);
  const uploadPost = useMyPageStore((state) => state.uploadPost);
  const getLikePost = useMyPageStore((state) => state.getLikePost);
  const likePost = useMyPageStore((state) => state.likePost);
  const getFollowerList = usePostStore((state) => state.getFollowerList);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);
  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);
  const follow = useFollowStore((state) => state.follow);
  const makeRoom = useChatStore((state) => state.makeRoom);
  const likePostIsLoaded = useMyPageStore((state) => state.likePostIsLoaded);
  const playListModalHandle = usePlayerStore(
    (state) => state.playListModalHandle
  );
  const profileInfoIsLoaded = useMyPageStore(
    (state) => state.profileInfoIsLoaded
  );
  const uploadPostIsLoaded = useMyPageStore(
    (state) => state.uploadPostIsLoaded
  );
  const artistIsFollowIsLoaded = usePostStore(
    (state) => state.artistIsFollowIsLoaded
  );
  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );

  const [category, setCategory] = useState('upload');
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const [isSingerMarker, setSingerMarker] = useState();
  const [isMakerMarker, setMakerMarker] = useState();

  const { nickname } = useParams();
  const navigate = useNavigate();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '10px',
    arrows: false,
    variableWidth: true,
    draggable: true,
  };

  const onCancel = () => {
    setNoticeOpen(false);
  };

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
    // if (getCookie('authorization') !== undefined) {
    //   const sender = jwt_decode(getCookie('authorization')).sub;
    //   makeRoom({ sender, receiver: nickname }).then((res) => {
    //     if (res?.success) {
    //       navigate('/chat');
    //     } else {
    //       navigate('/chat');
    //     }
    //   });
    // } else {
    //   warning(`로그인 후에 이용 가능합니다.`);
    // }
    setNoticeOpen(true);
  };

  const onHandleFollow = () => {
    if (getCookie('authorization') !== undefined) {
      follow(nickname).then((res) => {
        if (res.success) {
          if (res.data) {
            setIsFollow(true);
            info(`${nickname.slice(0, 9)}님을 팔로우 하였습니다.`);
          } else {
            setIsFollow(false);
            info(`${nickname.slice(0, 9)}님 팔로우를 취소하였습니다.`);
          }
        }
      });
    } else {
      warning('로그인 후 이용해 주세요.');
    }
  };

  useEffect(() => {
    playListModalHandle(false);
    getFollowerList().then((res) => {
      if (res.success) {
        const tempFollowerArr = res.data.map((element) => {
          return element.nickname;
        });
        if (tempFollowerArr.indexOf(nickname) !== -1) setIsFollow(true);
        getProfileInfo(nickname);
      }
    });
  }, [nickname]);

  useEffect(() => {
    if (category === 'upload') {
      if (getCookie('authorization') !== undefined) {
        getSingerLikePost().then((res) => {
          if (res.success) {
            getMakerLikePost().then((res) => {
              if (res.success) {
                getUploadPost(nickname);
              }
            });
          }
        });
      } else {
        getUploadPost(nickname);
      }
    } else {
      getLikePost(nickname);
    }
  }, [category]);

  useEffect(() => {
    getProfileInfo(nickname);
    if (profileInfoIsLoaded) {
      if (profileInfo.singerPostCnt === 0 || profileInfo.singerPostCnt === 1) {
        setSingerMarker(SingerMarker1);
      }
      if (profileInfo.singerPostCnt === 2) {
        setSingerMarker(SingerMarker2);
      }
      if (profileInfo.singerPostCnt === 3) {
        setSingerMarker(SingerMarker3);
      }
      if (profileInfo.singerPostCnt === 4) {
        setSingerMarker(SingerMarker4);
      }
      if (profileInfo.singerPostCnt === 5) {
        setSingerMarker(SingerMarker5);
      }
      if (profileInfo.singerPostCnt === 6) {
        setSingerMarker(SingerMarker6);
      }
      if (profileInfo.singerPostCnt === 7) {
        setSingerMarker(SingerMarker7);
      }
      if (profileInfo.singerPostCnt === 8) {
        setSingerMarker(SingerMarker8);
      }
      if (profileInfo.singerPostCnt === 9) {
        setSingerMarker(SingerMarker9);
      }
      if (profileInfo.singerPostCnt > 9) {
        setSingerMarker(SingerMarker10);
      }
      if (profileInfo.makerPostCnt === 0 || profileInfo.makerPostCnt === 1) {
        setMakerMarker(MakerMarker1);
      }
      if (profileInfo.makerPostCnt === 2) {
        setMakerMarker(MakerMarker2);
      }
      if (profileInfo.makerPostCnt === 3) {
        setMakerMarker(MakerMarker3);
      }
      if (profileInfo.makerPostCnt === 4) {
        setMakerMarker(MakerMarker4);
      }
      if (profileInfo.makerPostCnt === 5) {
        setMakerMarker(MakerMarker5);
      }
      if (profileInfo.makerPostCnt === 6) {
        setMakerMarker(MakerMarker6);
      }
      if (profileInfo.makerPostCnt === 7) {
        setMakerMarker(MakerMarker7);
      }
      if (profileInfo.makerPostCnt === 8) {
        setMakerMarker(MakerMarker8);
      }
      if (profileInfo.makerPostCnt === 9) {
        setMakerMarker(MakerMarker9);
      }
      if (profileInfo.makerPostCnt === 10) {
        setMakerMarker(MakerMarker10);
      }
    }
  }, [
    getProfileInfo,
    nickname,
    profileInfo.makerPostCnt,
    profileInfo.singerPostCnt,
    profileInfoIsLoaded,
  ]);

  return (
    <Fragment>
      <Header />
      <NoticeModal isOpen={noticeOpen} onCancel={onCancel} />
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
                        팔로워 {profileInfo.following}
                      </MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>|</MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>
                        팔로우 {profileInfo.follower}
                      </MyRightTopBtmDivSpan>
                    </MyRightTopBtmDiv>
                  </MyRightTopDiv>
                  <MyBadgeContainer>
                    {profileInfoIsLoaded ? (
                      <img src={isSingerMarker} alt='싱어마커' />
                    ) : (
                      <Fragment />
                    )}
                    {profileInfoIsLoaded ? (
                      <img src={isMakerMarker} alt='메이커마커' />
                    ) : (
                      <Fragment />
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
                                bg_color: '#28CA7C',
                                bd_radius: '10px',
                                color: '#ffffff',
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
                                bg_color: '#ffffff',
                                bd_radius: '10px',
                                bd_px: '1px',
                                bd_color: '#28CA7C',
                                color: '#28CA7C',
                                ft_size: '15',
                                ft_weight: '700',
                              }}
                              _text={'팔로우'}
                              _onClick={onHandleFollow}
                            />
                          )
                        ) : (
                          <Fragment />
                        )}
                        <Button
                          _style={{
                            width: '280px',
                            height: '42px',
                            bg_color: '#ffffff',
                            bd_radius: '10px',
                            color: '#121212',
                            bd_px: '1px',
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
                              width: '280px',
                              height: '42px',
                              bg_color: '#28CA7C',
                              bd_radius: '10px',
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
                          height: '42px',
                          bg_color: '#ffffff',
                          bd_radius: '10px',
                          bd_px: '1px',
                          bd_color: '#28CA7C',
                          color: '#28CA7C',
                          ft_size: '15',
                          ft_weight: '700',
                        }}
                        _text={'팔로우'}
                        _onClick={onHandleFollow}
                      />
                      <Button
                        _style={{
                          width: '280px',
                          height: '42px',
                          bg_color: '#ffffff',
                          bd_radius: '10px',
                          color: '#121212',
                          bd_px: '1px',
                          ft_size: '15',
                          ft_weight: '700',
                        }}
                        _text={'메시지 보내기'}
                        _onClick={onHandleChat}
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
                        <Fragment />
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
              {getCookie('authorization') !== undefined ? (
                singerIsLikeIsLoaded ? (
                  uploadPostIsLoaded ? (
                    mainPost.map((x, idx) => {
                      if (idx < 4) {
                        if (
                          [...singerIsLike, ...makerIsLike].indexOf(x.postId) >
                          -1
                        ) {
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
                              likeState={true}
                            />
                          );
                        } else {
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
                              likeState={false}
                            />
                          );
                        }
                      }
                    })
                  ) : (
                    <Fragment />
                  )
                ) : (
                  <Fragment />
                )
              ) : uploadPostIsLoaded ? (
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
                        likeState={false}
                      />
                    );
                  }
                })
              ) : (
                <Fragment />
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
              getCookie('authorization') !== undefined ? (
                uploadPostIsLoaded ? (
                  <MyBtmImgDiv>
                    {uploadPost.map((x) => {
                      if (
                        [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                      ) {
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
                            likeState={true}
                          />
                        );
                      } else {
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
                            likeState={false}
                          />
                        );
                      }
                    })}
                  </MyBtmImgDiv>
                ) : (
                  <Fragment />
                )
              ) : uploadPostIsLoaded ? (
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
                <Fragment />
              )
            ) : getCookie('authorization') !== undefined ? (
              likePostIsLoaded ? (
                <MyBtmImgDiv>
                  {likePost.map((x) => {
                    if (
                      [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                    ) {
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
                          likeState={true}
                        />
                      );
                    } else {
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
                          likeState={false}
                        />
                      );
                    }
                  })}
                </MyBtmImgDiv>
              ) : (
                <Fragment />
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
              <Fragment />
            )}
          </MyPostContainer>
        </MyContainer>
      </MyContainerDiv>
    </Fragment>
  );
};

export default MyPage;
