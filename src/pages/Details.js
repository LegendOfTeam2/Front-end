// React
import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Zustand
import useDetailStore from "../zustand/details";
import usePlayerStore from "../zustand/player";
import useMemberStore from "../zustand/member";
// Packages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import jwt_decode from "jwt-decode";
// Utils
import Button from "../elements/Button";
import { getCookie } from "../utils/cookie";
// Components
import Header from "../components/Header";
// Assests
import {
  OnPlay96,
  DisCollaboration38,
  DisLike38,
  Share38,
  Putting,
  Like38,
} from "../assets/images/image";
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
} from "../assets/styles/pages/Details.styled";

const Details = () => {
  const [lyrics, setLyrics] = useState(false);
  const [introduction, setIntroduction] = useState(false);
  const [like, setLike] = useState(false);
  const Params = useParams();

  const getDetail = useDetailStore((state) => state.getDetail);
  const detailListLoaded = useDetailStore((state) => state.detailListLoaded);
  const detailList = useDetailStore((state) => state.detailList);
  const deleteDetail = useDetailStore((state) => state.deleteDetail);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const navigate = useNavigate();

  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const addPlayList = usePlayerStore((state) => state.addPlayList);

  const goToModify = () => {
    navigate(`/ModifyWrite/${detailList.position}/${Params.postid}`);
  };

  const HandelLyrics = () => {
    setLyrics(!lyrics);
  };

  const HandelMore = () => {
    setIntroduction(!introduction);
  };

  const HandelLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    getDetail(Params);
  }, []);

  const clip = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/details/${Params.position}/${Params.postid}`
    );
    alert("공유하기 url 완료");
  };

  const Play = () => {
    viewStateChange(true);
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
    deleteDetail({
      postId: detailList.postId,
      position: detailList.position,
      nickname: detailList.nickname,
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
              {getCookie("authorization") !== undefined ? (
                jwt_decode(getCookie("authorization")).sub ===
                detailList.nickname ? (
                  <DetailProfileBtnTopDivBtn>
                    <Button
                      _style={{
                        width: "122px",
                        height: "45px",
                        bg_color: "#28CA7C",
                        bd_radius: "11px",
                        color: "rgba(255, 255, 255, 1)",
                        ft_size: "12",
                      }}
                      _text={"게시글 수정"}
                      _onClick={goToModify}
                    />
                    <Button
                      _style={{
                        width: "122px",
                        height: "45px",
                        bg_color: "#cc0000",
                        bd_radius: "11px",
                        color: "rgba(255, 255, 255, 1)",
                        ft_size: "12",
                      }}
                      _text={"게시글 삭제"}
                      _onClick={deleteDetailClick}
                    />
                  </DetailProfileBtnTopDivBtn>
                ) : (
                  <Button
                    _style={{
                      width: "122px",
                      height: "45px",
                      bg_color: "#28CA7C",
                      bd_radius: "11px",
                      color: "rgba(255, 255, 255, 1)",
                      ft_size: "12",
                    }}
                    _text={"메세지"}
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
                      : detailList.imageUrl === ""
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
                    {detailListLoaded ? (detailList.createdAt.substr(0, 11)):<></>}
                      
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
                        {" "}
                        <img
                          src={Like38}
                          onClick={HandelLike}
                          alt='좋아요'
                        />{" "}
                      </DetailClickHover>
                    ) : (
                      <DetailClickHover>
                        <img
                          src={DisLike38}
                          onClick={HandelLike}
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
            <DetailBtmClickLyricsSpan onClick={HandelLyrics}>
              {lyrics ? (
                <>
                  <DetailBtmLyricsSpan>접기</DetailBtmLyricsSpan>
                  <MdOutlineKeyboardArrowUp size={40} />
                </>
              ) : (
                <>
                  {" "}
                  <DetailBtmLyricsSpan>펼치기</DetailBtmLyricsSpan>
                  <MdOutlineKeyboardArrowDown size={40} />
                </>
              )}
            </DetailBtmClickLyricsSpan>
          </DetailBtmLyricsDivDivDiv>
          <DetailTopLyrics>소개글</DetailTopLyrics>
          <DetailBtmMoreDiv>
            <DetailBtmMoreDivDiv introduction={introduction}>
              <DetailBtmMoreDivSpan>{detailList.content}</DetailBtmMoreDivSpan>
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

export default Details;
