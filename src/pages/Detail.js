// React
import { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Zustand
import usePlayerStore from '../zustand/player';
import useMemberStore from '../zustand/member';
import usePostStore from '../zustand/post';

// Packages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import jwt_decode from 'jwt-decode';
// Utils
import Button from '../elements/Button';
import { getCookie } from '../utils/cookie';
// Components
import Header from '../components/Header';
// Assests
import {
  OnPlay96,
  DisCollaboration38,
  DisLike38,
  Share38,
  Putting,
  Like38,
} from '../assets/images/image';
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
  DetailProfileBtnTopDivBtn,
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
} from '../assets/styles/pages/Detail.styled';

const Detail = () => {
  const [lyrics, setLyrics] = useState(false);
  const [introduction, setIntroduction] = useState(false);
  const [like, setLike] = useState(false);
  const Params = useParams();

  const getDetail = usePostStore((state) => state.getDetail);
  const detailListLoaded = usePostStore((state) => state.detailListLoaded);
  const detailList = usePostStore((state) => state.detailList);
  const deleteDetail = usePostStore((state) => state.deleteDetail);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const setIsAutoplay = usePlayerStore((state) => state.setIsAutoplay);
  const random = useMemberStore((state) => state.random);
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);

  const navigate = useNavigate();
  const lyricsRef = useRef();
  const contentRef = useRef();

  console.dir(contentRef.current);

  const deletePost = {
    postId: detailList.postId,
    position: detailList.position,
  };

  const goToModify = () => {
    navigate(`/ModifyWrite/${detailList.position}/${Params.postid}`);
  };

  const HandelLyrics = () => {
    setLyrics(!lyrics);
  };

  const HandelMore = () => {
    setIntroduction(!introduction);
  };

  const onHandelLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    getDetail(Params);
  }, []);

  const clip = () => {
    navigator.clipboard
      .writeText(
        `http://localhost:3000/detail/${Params.position}/${Params.postid}`
      )
      .then(() => {
        alert('링크 복사 완료');
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

  const deleteDetailClick = () => {
    deleteDetail(deletePost).then((res) => {
      if (res) {
        alert('게시글이 삭제되었습니다.');
        navigate('/');
      }
    });
  };

  return (
    <Fragment>
      <Header />
      <DetailContainerDiv>
        <DetailContainer>
          <DetailTopDiv>
            <DetailProfileImgTextTopDiv>
              <DetailClickHover>
                <MdOutlineArrowBackIosNew
                  size={36}
                  color='rgba(180, 180, 180, 1)'
                  onClick={() => navigate(-1)}
                />
              </DetailClickHover>
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
                  onClick={ProfilPage}
                />
              </DetailProfileDiv>

              <DetailProfileImgTextTop>
                {detailList.nickname}
              </DetailProfileImgTextTop>
            </DetailProfileImgTextTopDiv>
            <DetailProfileBtnTopDiv>
              {getCookie('authorization') !== undefined ? (
                jwt_decode(getCookie('authorization')).sub ===
                detailList.nickname ? (
                  <DetailProfileBtnTopDivBtn>
                    <Button
                      _style={{
                        width: '122px',
                        height: '45px',
                        bg_color: '#28CA7C',
                        bd_radius: '11px',
                        color: 'rgba(255, 255, 255, 1)',
                        ft_size: '12',
                      }}
                      _text={'게시글 수정'}
                      _onClick={goToModify}
                    />
                    <Button
                      _style={{
                        width: '122px',
                        height: '45px',
                        bg_color: '#cc0000',
                        bd_radius: '11px',
                        color: 'rgba(255, 255, 255, 1)',
                        ft_size: '12',
                      }}
                      _text={'게시글 삭제'}
                      _onClick={deleteDetailClick}
                    />
                  </DetailProfileBtnTopDivBtn>
                ) : (
                  <Button
                    _style={{
                      width: '122px',
                      height: '45px',
                      bg_color: '#28CA7C',
                      bd_radius: '11px',
                      color: 'rgba(255, 255, 255, 1)',
                      ft_size: '12',
                    }}
                    _text={'메세지'}
                  />
                )
              ) : (
                <></>
              )}
            </DetailProfileBtnTopDiv>
          </DetailTopDiv>
          <PositionAllDiv>
            <PositionMarkerDiv>
              <PositionMarkerSpan>{detailList.position}</PositionMarkerSpan>
            </PositionMarkerDiv>
            <PositionMidDiv>
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
                <DetailProfileBtmDiv>
                  <DetailProfileBtmFirDiv>
                    {like ? (
                      <DetailClickHover>
                        {' '}
                        <img
                          src={Like38}
                          onClick={onHandelLike}
                          alt='좋아요'
                        />{' '}
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
                      {detailList.likes}
                    </DetailProfileBtmFirSpan>
                  </DetailProfileBtmFirDiv>
                  {detailList.collaborate ? (
                    <DetailProfileBtmFirDiv>
                      <DetailClickHover>
                        <img
                          src={DisCollaboration38}
                          backgrond='white'
                          alt='콜라보'
                        />
                      </DetailClickHover>

                      <DetailProfileBtmSecSpan>콜라보</DetailProfileBtmSecSpan>
                    </DetailProfileBtmFirDiv>
                  ) : (
                    <></>
                  )}
                  <DetailProfileBtmFirDiv onClick={clip}>
                    <DetailClickHover>
                      <img src={Share38} backgrond='white' alt='공유하기' />
                    </DetailClickHover>
                    <DetailProfileBtmSecSpan>공유하기</DetailProfileBtmSecSpan>
                  </DetailProfileBtmFirDiv>
                  <DetailProfileBtmFirDiv>
                    <DetailClickHover>
                      <img src={Putting} backgrond='white' alt='담기' />
                    </DetailClickHover>
                    <DetailProfileBtmSecSpan>담기</DetailProfileBtmSecSpan>
                  </DetailProfileBtmFirDiv>
                </DetailProfileBtmDiv>
              </PositionMidRightDiv>
            </PositionMidDiv>
          </PositionAllDiv>

          <DetailTopLyrics>가사</DetailTopLyrics>

          <DetailBtmLyricsDivDiv lyrics={lyrics}>
            <DetailBtmLyricsDivSpan>{detailList.lyrics}</DetailBtmLyricsDivSpan>
          </DetailBtmLyricsDivDiv>
          <DetailBtmLyricsDivDivDiv>
            {detailListLoaded ? (
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
            )}
          </DetailBtmLyricsDivDivDiv>
          <DetailTopLyrics>소개글</DetailTopLyrics>
          <DetailBtmMoreDiv>
            <DetailBtmMoreDivDiv introduction={introduction}>
              <DetailBtmMoreDivSpan>
                가라사대가라사대가라사대가라사대가라사대가라사대가라사대가
              </DetailBtmMoreDivSpan>
            </DetailBtmMoreDivDiv>
          </DetailBtmMoreDiv>
          <DetailBtmMoreDivDivDiv>
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
          </DetailBtmMoreDivDivDiv>
        </DetailContainer>
      </DetailContainerDiv>
    </Fragment>
  );
};

export default Detail;