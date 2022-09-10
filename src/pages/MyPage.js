// React
import { Fragment, useRef, useEffect, useState } from "react";
// Zustand
import useMyPageStore from "../zustand/mypage";
// Packages
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Utils
import Button from "../elements/Button";
import { getCookie } from "../utils/cookie";
// Pages
import jwt_decode from "jwt-decode";
// Components
import Header from "../components/Header";
import Post from "../components/Post";
import PostBig from "../components/PostBig";
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
  MyRightTopIconDiv,
  MyTagBox,
  MyTagBoxTextSlide,
  MyTagBoxTextSlideDiv,
  MyTagBoxTextSpanSlide,
  MyTextDiv,
} from "../assets/styles/pages/MyPage.styled";
import { DisMakerMarke,DisSingerMarker } from '../assets/images/image';

const MyPage = () => {
  const [tagSlider, setTagSlider] = useState(false);
  const [page, setPage] = useState(0);

  const getUploadPost = useMyPageStore((state) => state.getUploadPost);

  const leftRef = useRef();
  const midRef = useRef();
  const rightRef = useRef();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getUploadPost(page);
  }, [page]);

  const clickTag = () => {
    setTagSlider(!tagSlider);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "-10px",
    arrows: false,
    variableWidth: true,
  };
  const categoryHandle = (state) => {
    switch (state) {
      case "work": {
        leftRef.current.style.borderTopColor = "black";
        midRef.current.style.borderTopColor = "transparent";
        rightRef.current.style.borderTopColor = "transparent";
        leftRef.current.style.color = "black";
        midRef.current.style.color = "rgba(180, 180, 180, 1)";
        rightRef.current.style.color = "rgba(180, 180, 180, 1)";
        break;
      }
      case "like": {
        leftRef.current.style.borderTopColor = "transparent";
        midRef.current.style.borderTopColor = "black";
        rightRef.current.style.borderTopColor = "transparent";
        leftRef.current.style.color = "rgba(180, 180, 180, 1)";
        midRef.current.style.color = "black";
        rightRef.current.style.color = "rgba(180, 180, 180, 1)";
        break;
      }
      case "save": {
        leftRef.current.style.borderTopColor = "transparent";
        midRef.current.style.borderTopColor = "transparent";
        rightRef.current.style.borderTopColor = "black";
        leftRef.current.style.color = "rgba(180, 180, 180, 1)";
        midRef.current.style.color = "rgba(180, 180, 180, 1)";
        rightRef.current.style.color = "black";
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    leftRef.current.style.borderTopColor = "black";
    leftRef.current.style.color = "black";
  }, []);

  const mockDate = [
    {
      postId: "1",
      imageUrl:
        "https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/0_JTh3JET7ZCHaT_IJhG4VbhEpI.png",
    },
    {
      postId: "2",
      imageUrl:
        "https://post-phinf.pstatic.net/MjAyMDA5MDRfMjcx/MDAxNTk5MjE4MDE5Mzcw.jLTW8nXn80IriL-CBHj88OG6mAcsrc4lLclqk25tAmUg.15AvCfPQCS31Ina-TeCFdha94JXUYgtANVS0Xa3vq9Ig.JPEG/f26f6953cc1ff7579f4582f476f2de46359cfb21c88707f25a0aa02a9c77b540_v1.jpg?type=w1200",
    },
    {
      postId: "3",
      imageUrl:
        "https://images.khan.co.kr/article/2022/05/12/l_2022051202000700600130251.jpg",
    },
    {
      postId: "4",
      imageUrl:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMjM1/MDAxNTY0NzE0ODEyMDk4.5nXLk7-27EPK8Q0NyLFVaeE_umpkqwfV73UWtu0ZD5Ug.j9RXuTc1EAgw66FZB0wl32sLBNaY4R9HZYvzOkei38Ag.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_8.jpg?type=w1200",
    },
  ];

  return (
    <Fragment>
      <Header />
      <MyContainerDiv>
        <MyContainer>
          <MyProfileContainer>
            <Myleft>
              <MyleftDiv>
                <MyleftDivImg
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXC4jJpUonPTloaWOqn7U5jyshqEL0mPfqg&usqp=CAU'
                  alt='프로필 이미지'
                />
              </MyleftDiv>
            </Myleft>

            <MyRight>
              <MyRightTopDivCl>
                <MyRightTopDivClDiv>
                  <MyRightTopDiv>
                    <div>
                      <MyRightTopDivSpan>baekyeriiin</MyRightTopDivSpan>
                    </div>
                    <img src={DisSingerMarker} backgrond='white' alt='이미지' />
                    <img src={DisMakerMarke} backgrond='white' alt='로고이미지' />

                    <MyRightTopBtmDiv>
                      <MyRightTopBtmDivSpan>곡 작업 10</MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>팔로워 4,000</MyRightTopBtmDivSpan>
                      <MyRightTopBtmDivSpan>팔로우 350</MyRightTopBtmDivSpan>
                    </MyRightTopBtmDiv>
                  </MyRightTopDiv>
                  {getCookie("authorization") !== undefined ? (
                    jwt_decode(getCookie("authorization")).sub !==
                    "KAKAO775572255" ? (
                      <MyRightTopButDiv>
                        <Button
                          _style={{
                            width: "122px",
                            height: "45px",
                            bg_color: "#E7E7E7",
                            bd_radius: "11px",
                            color: "#121212",
                            ft_size: "12",
                            ft_weight: "700",
                          }}
                          _text={"메세지"}
                        />
                        <Button
                          _style={{
                            width: "122px",
                            height: "45px",
                            bg_color: "#28CA7C",
                            bd_radius: "11px",
                            color: "rgba(255, 255, 255, 1)",
                            ft_size: "12",
                            ft_weight: "700",
                          }}
                          _text={"팔로우"}
                        />
                      </MyRightTopButDiv>
                    ) : (
                      <MyRightTopButDivNotMember>
                        {" "}
                        <Button
                          _style={{
                            width: "261px",
                            height: "45px",
                            bg_color: "#28CA7C",
                            bd_radius: "11px",
                            color: "rgba(255, 255, 255, 1)",
                            ft_size: "12",
                            ft_weight: "700",
                          }}
                          _text={"프로필 수정"}
                        />
                      </MyRightTopButDivNotMember>
                    )
                  ) : (
                    <MyRightTopButDiv>
                      <Button
                        _style={{
                          width: "122px",
                          height: "45px",
                          bg_color: "#E7E7E7",
                          bd_radius: "11px",
                          color: "#121212",
                          ft_size: "12",
                          ft_weight: "700",
                        }}
                        _text={"메세지"}
                      />
                      <Button
                        _style={{
                          width: "122px",
                          height: "45px",
                          bg_color: "#28CA7C",
                          bd_radius: "11px",
                          color: "rgba(255, 255, 255, 1)",
                          ft_size: "12",
                          ft_weight: "700",
                        }}
                        _text={"팔로우"}
                      />
                    </MyRightTopButDiv>
                  )}
                </MyRightTopDivClDiv>
                <MyTagBox>
                  <MyTagBoxTextSlide tagSlider={tagSlider}>
                    <Slider {...settings}>
                      {Array(12)
                        .fill("")
                        .map(() => (
                          <MyTagBoxTextSlideDiv>
                            <MyTagBoxTextSpanSlide>
                              # 더 보기보기
                            </MyTagBoxTextSpanSlide>
                          </MyTagBoxTextSlideDiv>
                        ))}
                    </Slider>
                  </MyTagBoxTextSlide>
                </MyTagBox>
                <MyRightBtmDiv>
                  <MyRightBtmDivSpan>
                    감성을 전하는 래퍼 백예린 -ˋˏ * ٩( ◡̉̈ )۶ * ˎˊ-{" "}
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
            {mockDate.map((x) => (
                  <Post key={x.postId} imageUrl={x.imageUrl}/>))}
            </MyTextDiv>
          </MyMidTextDiv>
          <MyBtmTextDiv>
            <MyBtmTextDivDiv ref={leftRef}>
              <MyBtmDataDiv onClick={() => categoryHandle("work")}>
                작업물
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            <MyBtmTextDivDiv ref={midRef}>
              <MyBtmDataDiv onClick={() => categoryHandle("like")}>
                좋아요
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            <MyBtmTextDivDiv ref={rightRef}>
              <MyBtmDataDiv onClick={() => categoryHandle("save")}>
                보관함
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
          </MyBtmTextDiv>

          <MyBtmImgDiv>
            {Array(12)
              .fill("")
              .map(() => (
                <PostBig />
              ))}
          </MyBtmImgDiv>
        </MyContainer>
      </MyContainerDiv>
    </Fragment>
  );
};

export default MyPage;
