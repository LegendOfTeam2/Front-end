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
import shortid from 'shortid';

// Utils
import { getCookie } from '../utils/cookie';
import { warning, info } from '../utils/toast';

// Components
import Header from '../components/Header';

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

const Detail = () => {
  const getDetail = usePostStore((state) => state.getDetail);
  const detailList = usePostStore((state) => state.detailList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);
  const postPlayList = usePlayerStore((state) => state.postPlayList);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);
  const addLike = useLikeStore((state) => state.addLike);
  const getSingerLikePost = useLikeStore((state) => state.getSingerLikePost);
  const getMakerLikePost = useLikeStore((state) => state.getMakerLikePost);
  const detailListLoaded = usePostStore((state) => state.detailListLoaded);

  const [lyrics, setLyrics] = useState(false);
  const [introduction, setIntroduction] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [counter, setCounter] = useState(0);

  const params = useParams();
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

  const goToModify = () => {
    navigate(`/ModifyWrite/${params.position}/${params.postId}`);
  };

  const handelLyrics = () => {
    setLyrics(!lyrics);
  };

  const handelMore = () => {
    setIntroduction(!introduction);
  };

  const onHandelLike = () => {
    if (getCookie('authorization') === undefined) {
      warning('????????? ??? ????????? ?????????.');
    } else {
      addLike({
        postId: detailList.postId,
        position: detailList.position,
      }).then((res) => {
        if (res.success && res.data) {
          info('???????????? ???????????? ???????????????.');
          setIsLike(true);
          setCounter((prev) => prev + 1);
        } else {
          info('???????????? ???????????? ??????????????????.');
          setIsLike(false);
          setCounter((prev) => prev - 1);
        }
      });
    }
  };

  const clip = () => {
    navigator.clipboard
      .writeText(
        `https://rhythme.shop/detail/${params.position}/${params.postId}`
      )
      .then(() => {
        info('URL ????????? ?????????????????????.');
      });
  };

  const play = () => {
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

  const playMember = () => {
    viewStateChange(true);
    setPlaying(true);
    setIsAutoplay(true);
    postPlayList({
      postId: detailList.postId,
      title: detailList.title,
      nickname: detailList.nickname,
      mediaUrl: detailList.mediaUrl,
      imageUrl: detailList.imageUrl,
      position: detailList.position,
    });
  };

  const profilPage = () => {
    navigate(`/mypage/${detailList.nickname}`);
  };

  useEffect(() => {
    if (params.position === 'Singer') {
      getSingerLikePost().then((res) => {
        if (res) {
          const likePostArr = res.data.map((element) => {
            return element.postId;
          });
          getDetail(params).then((res) => {
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

          getDetail(params).then((res) => {
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
            <DetailProfileBtnTopDiv />
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
                    alt='????????????'
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
                        {getCookie('authorization') !== undefined ? (
                          <img
                            src={OnPlay96}
                            alt='????????? ??????'
                            onClick={playMember}
                          />
                        ) : (
                          <img
                            src={OnPlay96}
                            alt='????????? ??????'
                            onClick={play}
                          />
                        )}
                      </DetailClickHover>
                    </PositionMidMidRightTextDiv>
                  </PositionMidMidTextDiv>
                  <PositionMidRighTopRigtTextDiv>
                    <PositionMidRighTopRightLeftTextSpan>
                      ?????????:
                    </PositionMidRighTopRightLeftTextSpan>
                    <PositionMidRighTopRightRightTextSpan>
                      {detailListLoaded ? (
                        detailList.createdAt.substr(0, 11)
                      ) : (
                        <Fragment />
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
                            alt='?????????'
                          />
                        </DetailClickHover>
                      ) : (
                        <DetailClickHover>
                          <img
                            src={DisLike38}
                            onClick={onHandelLike}
                            alt='?????????'
                          />
                        </DetailClickHover>
                      )}
                      <DetailProfileBtmFirSpan>
                        {counter}
                      </DetailProfileBtmFirSpan>
                    </DetailProfileBtmFirDiv>
                    <DetailProfileBtmFirDiv onClick={clip}>
                      <DetailClickHover>
                        <img src={Share38} backgrond='white' alt='????????????' />
                      </DetailClickHover>
                      <DetailProfileBtmSecSpan>
                        ????????????
                      </DetailProfileBtmSecSpan>
                    </DetailProfileBtmFirDiv>
                  </DetailProfileBtmDiv>
                </PositionMidRightDiv>
              </PositionMidInfoDiv>
              <DetailHashtagContainer>
                <Slider {...settings}>
                  {detailListLoaded ? (
                    detailList.tags === [] ? (
                      <Fragment />
                    ) : (
                      detailList.tags.reverse().map((x) => {
                        return (
                          <DetailHashTagBox key={shortid.generate()}>
                            <DetailHashTag># {x}</DetailHashTag>
                          </DetailHashTagBox>
                        );
                      })
                    )
                  ) : (
                    <Fragment />
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
                  alt='?????????'
                  onClick={profilPage}
                />
              </DetailProfileDiv>
              <DetailProfileImgTextTop>
                {detailList.nickname}
              </DetailProfileImgTextTop>
            </DetailProfileBox>
            <DetailProfileBtnGroup>
              <DetailProfileBtmFirDiv>
                <DetailClickHover onClick={profilPage}>
                  <img src={ShowPw38} backgrond='white' alt='????????????' />
                </DetailClickHover>
                <DetailProfileBtmSecSpan>???????????? ??????</DetailProfileBtmSecSpan>
              </DetailProfileBtmFirDiv>
              {getCookie('authorization') !== undefined ? (
                jwt_decode(getCookie('authorization')).sub ===
                detailList.nickname ? (
                  <DetailProfileBtmFirDiv>
                    <DetailClickHover onClick={goToModify}>
                      <img src={Modify} backgrond='white' alt='????????? ??????' />
                    </DetailClickHover>
                    <DetailProfileBtmSecSpan>
                      ????????? ????????????
                    </DetailProfileBtmSecSpan>
                  </DetailProfileBtmFirDiv>
                ) : detailListLoaded ? (
                  detailList.collaborate ? (
                    <DetailProfileBtmFirDiv>
                      <DetailClickHover>
                        <img
                          src={DisCollaboration38}
                          backgrond='white'
                          alt='?????????'
                        />
                      </DetailClickHover>

                      <DetailProfileBtmSecSpan>
                        ????????? ????????????
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
                        alt='?????????'
                      />
                    </DetailClickHover>

                    <DetailProfileBtmSecSpan>
                      ????????? ????????????
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
                <DetailTopLyrics>??????</DetailTopLyrics>
                <DetailHorizonLine />
                <DetailBtmLyricsDivDiv lyrics={lyrics}>
                  <DetailBtmLyricsDivSpan>
                    {detailList.lyrics}
                  </DetailBtmLyricsDivSpan>
                </DetailBtmLyricsDivDiv>
                <DetailBtmLyricsDivDivDiv>
                  {detailListLoaded ? (
                    detailList.lyrics.length > 65 ? (
                      <DetailBtmClickLyricsSpan onClick={handelLyrics}>
                        {lyrics ? (
                          <Fragment>
                            <DetailBtmLyricsSpan>??????</DetailBtmLyricsSpan>
                            <MdOutlineKeyboardArrowUp size={40} />
                          </Fragment>
                        ) : (
                          <Fragment>
                            <DetailBtmLyricsSpan>?????????</DetailBtmLyricsSpan>
                            <MdOutlineKeyboardArrowDown size={40} />
                          </Fragment>
                        )}
                      </DetailBtmClickLyricsSpan>
                    ) : (
                      <Fragment />
                    )
                  ) : (
                    <Fragment />
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
            <DetailTopLyrics>?????????</DetailTopLyrics>
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
                  <DetailBtmClickMoreSpan onClick={handelMore}>
                    {introduction ? (
                      <Fragment>
                        <DetailBtmMoreSpan>??????</DetailBtmMoreSpan>
                        <MdOutlineKeyboardArrowUp size={40} />
                      </Fragment>
                    ) : (
                      <Fragment>
                        <DetailBtmMoreSpan>?????????</DetailBtmMoreSpan>
                        <MdOutlineKeyboardArrowDown size={40} />
                      </Fragment>
                    )}
                  </DetailBtmClickMoreSpan>
                ) : (
                  <Fragment />
                )
              ) : (
                <Fragment />
              )}
            </DetailBtmMoreDivDivDiv>
          </DetailIntroContainer>
        </DetailContainer>
      </DetailContainerDiv>
    </Fragment>
  );
};
export default Detail;
