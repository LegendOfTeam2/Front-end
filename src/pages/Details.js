// React
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
// Zustand

// Packages
import {
  MdOutlineArrowBackIosNew,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
// Utils
import Button from "../elements/Button";
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

  const navigate = useNavigate();

  const HandelLyrics = () => {
    setLyrics(!lyrics);
  };

  const HandelMore = () => {
    setIntroduction(!introduction);
  };

  const HandelLike = () => {
    setLike(!like);
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
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB7pAaft41alybo-nWe0sQZg0kHIUUkrFvA&usqp=CAU'
                  alt='프로필'
                />
              </DetailProfileDiv>

              <DetailProfileImgTextTop>youngji_2</DetailProfileImgTextTop>
            </DetailProfileImgTextTopDiv>
            <DetailProfileBtnTopDiv>
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
            </DetailProfileBtnTopDiv>
          </DetailTopDiv>
          <PositionAllDiv>
            <PositionMarkerDiv>
              <PositionMarkerSpan>메이커</PositionMarkerSpan>
            </PositionMarkerDiv>
            <PositionMidDiv>
              <PositionMidLeftImgDiv>
                <PositionMidLeftImg
                  src='https://w.namu.la/s/f885d1340effed8f65a2618378a6eb82945b2a553a215b8870ca0722b6eb3fded6ace8c951efa49908336a961887a671967d1b534f69a6c194294f505c7ef3db9c8437c58ce64d7b6ed07ab375b1e23bd98b695b677834e6ba179aab13393ba0'
                  alt='앨범커버'
                />
              </PositionMidLeftImgDiv>
              <PositionMidRightDiv>
                <PositionMidRighTopTextDiv>
                  <PositionMidRighTopLeftTextDiv>
                    나는 기리보이
                  </PositionMidRighTopLeftTextDiv>
                  <PositionMidRighTopRigtTextDiv>
                    <PositionMidRighTopRightLeftTextSpan>
                      등록일
                    </PositionMidRighTopRightLeftTextSpan>
                    <PositionMidRighTopRightRightTextSpan>
                      2022. 08. 31
                    </PositionMidRighTopRightRightTextSpan>
                  </PositionMidRighTopRigtTextDiv>
                </PositionMidRighTopTextDiv>
                <PositionMidMidTextDiv>
                  <PositionMidMidLeftTextDiv>
                    youngji_2
                  </PositionMidMidLeftTextDiv>
                  <PositionMidMidRightTextDiv>
                    <DetailClickHover>
                      <img src={OnPlay96} alt='플레이 버튼' />
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
                    <DetailProfileBtmFirSpan>17.567</DetailProfileBtmFirSpan>
                  </DetailProfileBtmFirDiv>
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
                  <DetailProfileBtmFirDiv>
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
            <DetailBtmLyricsDivSpan>
              네가 참 궁금해 그건 너도 마찬가지
              <br />
              이거면 충분해 쫓고 쫓는 이런 놀이
              <br />
              참을 수 없는 이끌림과 호기심
              <br />
              묘한 너와 나 두고 보면 알겠지
              <br />
              <br />
              Woo 눈동자 아래로
              <br />
              Woo 감추고 있는 거<br />
              Woo yeah It’s so bad It’s good
              <br />
              난 그 맘을 좀 봐야겠어
              <br />
              <br />
              Narcissistic, my god I love it
              <br />
              서로를 비춘 밤<br />
              아름다운 까만 눈빛 더 빠져 깊이
              <br />
              (넌 내게로 난 네게로)
              <br />
              숨 참고 love dive
              <br />
              <br />
              Woo lalalalalalala
              <br />
              Woo 어서 와서 love dive
              <br />
              Woo oh perfect sacrifice yeah
              <br />
              숨 참고 love dive
              <br />
              <br />
              마음은 이렇게 알다가도 모르지
              <br />
              사랑이라는 건 한순간에 필 테니
              <br />
              직접 들어와 두 눈으로 확인해
              <br />
              내 맘 가장 깊은 데로 오면 돼<br />
              <br />
              Woo 망설일 시간은
              <br />
              Woo 3초면 되는 걸<br />
              Woo yeah It’s so bad It’s good
              <br />
              원하면 감히 뛰어들어
              <br />
              <br />
              Narcissistic, my god I love it
              <br />
              서로를 비춘 밤<br />
              아름다운 까만 눈빛 더 빠져 깊이
              <br />
              (넌 내게로 난 네게로)
              <br />
              숨 참고 love dive
              <br />
              <br />
              Woo lalalalalalala
              <br />
              Woo 어서 와서 love dive
              <br />
              Woo oh perfect sacrifice yeah
              <br />
              숨 참고 love dive
              <br />
              <br />
              숨 참고 love dive
              <br />
              숨 참고 love dive
              <br />
              숨 참고 love dive
              <br />
              숨 참고 love dive
              <br />
              <br />
              Woo lalalalalalala
              <br />
              Woo 어서 와서 love dive
              <br />
              Woo oh perfect sacrifice yeah
              <br />
              숨 참고 love dive
              <br />
            </DetailBtmLyricsDivSpan>
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
              <DetailBtmMoreDivSpan>
                안녕하세요.
                <br />
                노래하는 래퍼 이영지입니다.
                <br />
                <br />
                잘부탁드립니다.
                <br />
                <br />
                많관부~
                <br />
                <br />
                안녕하세요.
                <br />
                노래하는 래퍼 이영지입니다.
                <br />
                <br />
                잘부탁드립니다.
                <br />
                <br />
                많관부~
                <br />
                <br />
                안녕하세요.
                <br />
                노래하는 래퍼 이영지입니다.
                <br />
                <br />
                잘부탁드립니다.
                <br />
                <br />
                많관부~
                <br />
                <br />
                안녕하세요.
                <br />
                노래하는 래퍼 이영지입니다.
                <br />
                <br />
                잘부탁드립니다.
                <br />
                <br />
                많관부~
                <br />
                <br />
                안녕하세요.
                <br />
                노래하는 래퍼 이영지입니다.
                <br />
                <br />
                잘부탁드립니다.
                <br />
                <br />
                많관부~
                <br />
                <br />
                안녕하세요.
                <br />
                노래하는 래퍼 이영지입니다.
                <br />
                <br />
                잘부탁드립니다.
                <br />
                <br />
                많관부~
                <br />
                <br />
                안녕하세요.
                <br />
                노래하는 래퍼 이영지입니다.
                <br />
                <br />
                잘부탁드립니다.
                <br />
                <br />
                많관부~
                <br />
                <br />
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

export default Details;
