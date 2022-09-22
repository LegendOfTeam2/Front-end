// React
import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Zustand
import usePlayerStore from '../zustand/player';
import useMemberStore from '../zustand/member';
import usePostStore from '../zustand/post';
import useLikeStore from '../zustand/like';

// Packages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import jwt_decode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Components
import Header from '../components/Header';

// Utils
import { getCookie } from '../utils/cookie';

// Assests
import {
  DetailBtmClickLyricsSpan,
  DetailBtmClickMoreSpan,
  DetailBtmLyricsDivDiv,
  DetailBtmLyricsDivDivDiv,
  DetailBtmLyricsDivSpan,
  DetailBtmLyricsSpan,
  DetailBtmMoreDiv,
  DetailBtmMoreDivDiv,
  DetailBtmMoreDivDivDiv,
  DetailBtmMoreDivSpan,
  DetailBtmMoreSpan,
  DetailClickHover,
  DetailContainer,
  DetailContainerDiv,
  DetailProfileBtmDiv,
  DetailProfileBtmFirDiv,
  DetailProfileBtmFirSpan,
  DetailProfileBtmSecSpan,
  DetailProfileBtnTopDiv,
  DetailProfileDiv,
  DetailProfileImg,
  DetailProfileImgTextTop,
  DetailProfileImgTextTopDiv,
  DetailTopDiv,
  DetailTopLyrics,
  PositionAllDiv,
  PositionMarkerDiv,
  PositionMarkerSpan,
  PositionMidDiv,
  PositionMidLeftImg,
  PositionMidLeftImgDiv,
  PositionMidMidLeftTextDiv,
  PositionMidMidRightTextDiv,
  PositionMidMidTextDiv,
  PositionMidRightDiv,
  PositionMidRighTopLeftTextDiv,
  PositionMidRighTopRightLeftTextSpan,
  PositionMidRighTopRightRightTextSpan,
  PositionMidRighTopRigtTextDiv,
  PositionMidRighTopTextDiv,
  PositionMidInfoDiv,
  DetailHashtagContainer,
  DetailHashTagBox,
  DetailHashTag,
  DetailProfileContainer,
  DetailProfileBox,
  DetailProfileBtnGroup,
  DetailLyricsContainer,
  DetailHorizonLine,
  DetailIntroContainer,
} from '../assets/styles/pages/Detail.styled';
import {
  OnPlay96,
  DisCollaboration38,
  DisLike38,
  Share38,
  Like38,
  ShowPw38,
  Modify,
} from '../assets/images/image';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const Detail = () => {
  const getDetail = usePostStore((state) => state.getDetail);
  const detailListLoaded = usePostStore((state) => state.detailListLoaded);
  const detailList = usePostStore((state) => state.detailList);

  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);

  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);
  const addLike = useLikeStore((state) => state.addLike);
  const getSingerLikePost = useLikeStore((state) => state.getSingerLikePost);
  const getMakerLikePost = useLikeStore((state) => state.getMakerLikePost);

  const [lyrics, setLyrics] = useState(false);
  const [introduction, setIntroduction] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [counter, setCounter] = useState(0);

  const Params = useParams();
  const navigate = useNavigate();

  const settings = {
    className: 'center',
    centerMode: true,
    slidesToShow: detailListLoaded ? detailList.tags.length : 0,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '10px',
    arrows: false,
    variableWidth: true,
  };

  const goToModify = () => {
    navigate(`/ModifyWrite/${Params.position}/${Params.postId}`);
  };

  const HandelLyrics = () => {
    setLyrics(!lyrics);
  };

  const HandelMore = () => {
    setIntroduction(!introduction);
  };

  const onHandelLike = () => {
    if (getCookie('authorization') === undefined) {
      alert('로그인 후 이용해 주세요.');
      navigate('/signin');
    } else {
      addLike({
        postId: detailList.postId,
        position: detailList.position,
      }).then((res) => {
        if (res.success && res.data) {
          toast.info('게시글에 좋아요를 눌렀습니다.', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1500,
            draggablePercent: 60,
            hideProgressBar: true,
          });
          setIsLike(true);
          setCounter((prev) => prev + 1);
        } else {
          toast.info('게시글에 좋아요를 취소했습니다.', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1500,
            draggablePercent: 60,
            hideProgressBar: true,
          });
          setIsLike(false);
          setCounter((prev) => prev - 1);
        }
      });
    }
  };

  useEffect(() => {
    if (Params.position === 'Singer') {
      getSingerLikePost().then((res) => {
        if (res) {
          const likePostArr = res.data.map((element) => {
            return element.postId;
          });
          getDetail(Params).then((res) => {
            if (res.success) {
              setCounter(res.data.likes);
              if (likePostArr.indexOf(res.data.postId) > -1) {
                setIsLike(true);
              }
            }
          });
        }
      });
    } else {
      getMakerLikePost().then((res) => {
        if (res) {
          const likePostArr = res.data.map((element) => {
            return element.postId;
          });

          getDetail(Params).then((res) => {
            if (res.success) {
              setCounter(res.data.likes);
              if (likePostArr.indexOf(res.data.postId) > -1) {
                setIsLike(true);
              }
            }
          });
        }
      });
    }
  }, []);

  const clip = () => {
    navigator.clipboard
      .writeText(
        `https://rhythme.shop/detail/${Params.position}/${Params.postId}`
      )
      .then(() => {
        toast.info('URL 복사가 완료되었습니다.', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1500,
          draggablePercent: 60,
          hideProgressBar: true,
        });
      });
  };

  const Play = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    addPlayList({
      postId: detailList.postId,
      title: detailList.title,
      nickname: detailList.nickname,
      mediaUrl: detailList.mediaUrl,
      imageUrl: detailList.imageUrl,
      position: detailList.position,
    });
  };

  const ProfilPage = () => {
    navigate(`/mypage/${detailList.nickname}`);
  };

  return (
    <Fragment>
      <Header />
      <ToastContainer />
      <DetailContainerDiv>
        <DetailContainer>
          <DetailTopDiv>
            <DetailProfileImgTextTopDiv>
              <DetailClickHover>
                <MdOutlineArrowBackIosNew
                  size={36}
                  onClick={() => navigate(-1)}
                />
              </DetailClickHover>
            </DetailProfileImgTextTopDiv>
            <DetailProfileBtnTopDiv></DetailProfileBtnTopDiv>
          </DetailTopDiv>
          <PositionAllDiv>
            <PositionMarkerDiv>
              <PositionMarkerSpan>{detailList.position}</PositionMarkerSpan>
            </PositionMarkerDiv>
            <PositionMidDiv>
              <PositionMidInfoDiv>
                <PositionMidLeftImgDiv>
                  <PositionMidLeftImg
                    src={
                      detailList.imageUrl === null
                        ? profileImgArr[random]
                        : detailList.imageUrl === ''
                        ? profileImgArr[random]
                        : detailList.imageUrl
                    }
                    alt='앨범커버'
                  />
                </PositionMidLeftImgDiv>
                <PositionMidRightDiv>
                  <PositionMidRighTopTextDiv>
                    <PositionMidRighTopLeftTextDiv>
                      {detailList.title}
                    </PositionMidRighTopLeftTextDiv>
                  </PositionMidRighTopTextDiv>
                  <PositionMidMidTextDiv>
                    <PositionMidMidLeftTextDiv>
                      {detailList.nickname}
                    </PositionMidMidLeftTextDiv>
                    <PositionMidMidRightTextDiv>
                      <DetailClickHover>
                        <img src={OnPlay96} alt='플레이 버튼' onClick={Play} />
                      </DetailClickHover>
                    </PositionMidMidRightTextDiv>
                  </PositionMidMidTextDiv>
                  <PositionMidRighTopRigtTextDiv>
                    <PositionMidRighTopRightLeftTextSpan>
                      등록일:
                    </PositionMidRighTopRightLeftTextSpan>
                    <PositionMidRighTopRightRightTextSpan>
                      {detailListLoaded ? (
                        detailList.createdAt.substr(0, 11)
                      ) : (
                        <></>
                      )}
                    </PositionMidRighTopRightRightTextSpan>
                  </PositionMidRighTopRigtTextDiv>
                  <DetailProfileBtmDiv>
                    <DetailProfileBtmFirDiv>
                      {isLike ? (
                        <DetailClickHover>
                          <img
                            src={Like38}
                            onClick={onHandelLike}
                            alt='좋아요'
                          />
                        </DetailClickHover>
                      ) : (
                        <DetailClickHover>
                          <img
                            src={DisLike38}
                            onClick={onHandelLike}
                            alt='싫어요'
                          />
                        </DetailClickHover>
                      )}
                      <DetailProfileBtmFirSpan>
                        {counter}
                      </DetailProfileBtmFirSpan>
                    </DetailProfileBtmFirDiv>
                    <DetailProfileBtmFirDiv onClick={clip}>
                      <DetailClickHover>
                        <img src={Share38} backgrond='white' alt='공유하기' />
                      </DetailClickHover>
                      <DetailProfileBtmSecSpan>
                        공유하기
                      </DetailProfileBtmSecSpan>
                    </DetailProfileBtmFirDiv>
                  </DetailProfileBtmDiv>
                </PositionMidRightDiv>
              </PositionMidInfoDiv>
              <DetailHashtagContainer>
                <Slider {...settings}>
                  {detailListLoaded ? (
                    detailList.tags === [] ? (
                      <Fragment></Fragment>
                    ) : (
                      detailList.tags.map((x, idx) => {
                        return (
                          <DetailHashTagBox key={idx}>
                            <DetailHashTag># {x}</DetailHashTag>
                          </DetailHashTagBox>
                        );
                      })
                    )
                  ) : (
                    <Fragment></Fragment>
                  )}
                </Slider>
              </DetailHashtagContainer>
            </PositionMidDiv>
          </PositionAllDiv>
          <DetailProfileContainer>
            <DetailProfileBox>
              <DetailProfileDiv>
                <DetailProfileImg
                  src={
                    detailList.memberImageUrl === null
                      ? profileImgArr[random]
                      : detailList.memberImageUrl === ''
                      ? profileImgArr[random]
                      : detailList.memberImageUrl
                  }
                  alt='프로필'
                />
              </DetailProfileDiv>
              <DetailProfileImgTextTop>
                {detailList.nickname}
              </DetailProfileImgTextTop>
            </DetailProfileBox>
            <DetailProfileBtnGroup>
              <DetailProfileBtmFirDiv>
                <DetailClickHover onClick={ProfilPage}>
                  <img src={ShowPw38} backgrond='white' alt='아티스트' />
                </DetailClickHover>

                <DetailProfileBtmSecSpan>아티스트 보기</DetailProfileBtmSecSpan>
              </DetailProfileBtmFirDiv>
              {getCookie('authorization') !== undefined ? (
                jwt_decode(getCookie('authorization')).sub ===
                detailList.nickname ? (
                  <DetailProfileBtmFirDiv>
                    <DetailClickHover onClick={goToModify}>
                      <img src={Modify} backgrond='white' alt='게시글 수정' />
                    </DetailClickHover>

                    <DetailProfileBtmSecSpan>
                      게시글 수정하기
                    </DetailProfileBtmSecSpan>
                  </DetailProfileBtmFirDiv>
                ) : detailListLoaded ? (
                  detailList.collaborate ? (
                    <DetailProfileBtmFirDiv>
                      <DetailClickHover>
                        <img
                          src={DisCollaboration38}
                          backgrond='white'
                          alt='콜라보'
                        />
                      </DetailClickHover>

                      <DetailProfileBtmSecSpan>
                        콜라보 요청하기
                      </DetailProfileBtmSecSpan>
                    </DetailProfileBtmFirDiv>
                  ) : (
                    <Fragment />
                  )
                ) : (
                  <Fragment />
                )
              ) : detailListLoaded ? (
                detailList.collaborate ? (
                  <DetailProfileBtmFirDiv>
                    <DetailClickHover>
                      <img
                        src={DisCollaboration38}
                        backgrond='white'
                        alt='콜라보'
                      />
                    </DetailClickHover>

                    <DetailProfileBtmSecSpan>
                      콜라보 요청하기
                    </DetailProfileBtmSecSpan>
                  </DetailProfileBtmFirDiv>
                ) : (
                  <Fragment />
                )
              ) : (
                <Fragment />
              )}
            </DetailProfileBtnGroup>
          </DetailProfileContainer>
          {detailListLoaded ? (
            detailList.lyrics.length !== 0 ? (
              <DetailLyricsContainer>
                <DetailTopLyrics>가사</DetailTopLyrics>
                <DetailHorizonLine />
                <DetailBtmLyricsDivDiv lyrics={lyrics}>
                  <DetailBtmLyricsDivSpan>
                    {detailList.lyrics}
                  </DetailBtmLyricsDivSpan>
                </DetailBtmLyricsDivDiv>
                <DetailBtmLyricsDivDivDiv>
                  {detailListLoaded ? (
                    detailList.lyrics.length > 65 ? (
                      <DetailBtmClickLyricsSpan onClick={HandelLyrics}>
                        {lyrics ? (
                          <>
                            <DetailBtmLyricsSpan>접기</DetailBtmLyricsSpan>
                            <MdOutlineKeyboardArrowUp size={40} />
                          </>
                        ) : (
                          <>
                            <DetailBtmLyricsSpan>펼치기</DetailBtmLyricsSpan>
                            <MdOutlineKeyboardArrowDown size={40} />
                          </>
                        )}
                      </DetailBtmClickLyricsSpan>
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}
                </DetailBtmLyricsDivDivDiv>
              </DetailLyricsContainer>
            ) : (
              <Fragment />
            )
          ) : (
            <Fragment />
          )}
          <DetailIntroContainer>
            <DetailTopLyrics>소개글</DetailTopLyrics>
            <DetailHorizonLine />
            <DetailBtmMoreDiv>
              <DetailBtmMoreDivDiv introduction={introduction}>
                <DetailBtmMoreDivSpan>
                  {detailList.content}
                </DetailBtmMoreDivSpan>
              </DetailBtmMoreDivDiv>
            </DetailBtmMoreDiv>
            <DetailBtmMoreDivDivDiv>
              {detailListLoaded ? (
                detailList.content.length > 65 ? (
                  <DetailBtmClickMoreSpan onClick={HandelMore}>
                    {introduction ? (
                      <>
                        <DetailBtmMoreSpan>접기</DetailBtmMoreSpan>
                        <MdOutlineKeyboardArrowUp size={40} />
                      </>
                    ) : (
                      <>
                        <DetailBtmMoreSpan>펼치기</DetailBtmMoreSpan>
                        <MdOutlineKeyboardArrowDown size={40} />
                      </>
                    )}
                  </DetailBtmClickMoreSpan>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </DetailBtmMoreDivDivDiv>
          </DetailIntroContainer>
        </DetailContainer>
      </DetailContainerDiv>
    </Fragment>
  );
};

export default Detail;
